import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import {
  ArchitectureOverlayService,
  SectionMeta,
} from 'src/app/components/architecture-overlay/architecture-overlay.service';

@Component({
  selector: 'app-architecture-overlay',
  templateUrl: './architecture-overlay.component.html',
  styleUrls: ['./architecture-overlay.component.scss'],
  standalone: false,
})
export class ArchitectureOverlayComponent implements OnInit, OnDestroy {
  isActive$: Observable<boolean>;
  activeSection$: Observable<string | null>;
  showSourceView$: Observable<boolean>;
  activeMeta: SectionMeta | null = null;

  private sectionObserver: IntersectionObserver | null = null;
  private destroy$ = new Subject<void>();
  private previousHighlightEl: Element | null = null;
  private sectionRatios = new Map<string, number>();

  private sectionSelectors = [
    'introduction',
    'tech-section',
    'projects-section',
    'experiences-section',
    'info-section',
  ];

  constructor(private overlayService: ArchitectureOverlayService) {}

  ngOnInit(): void {
    this.isActive$ = this.overlayService.isActive$;
    this.activeSection$ = this.overlayService.activeSection$;
    this.showSourceView$ = this.overlayService.showSourceView$;

    this.overlayService.activeSection$
      .pipe(takeUntil(this.destroy$))
      .subscribe((sectionId) => {
        this.activeMeta = sectionId
          ? this.overlayService.getMeta(sectionId) || null
          : null;
        if (sectionId) {
          this.applyHighlight(sectionId);
        }
      });

    this.overlayService.isActive$
      .pipe(takeUntil(this.destroy$))
      .subscribe((active) => {
        if (active) {
          this.injectHighlightStyles();
          this.startSectionObserver();
        } else {
          this.stopSectionObserver();
          this.removeHighlightStyles();
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.stopSectionObserver();
    this.removeHighlightStyles();
  }

  toggleOverlay(): void {
    this.overlayService.toggle();
  }

  toggleSourceView(): void {
    this.overlayService.toggleSourceView();
  }

  scrollToSection(sectionId: string): void {
    const el = document.querySelector('.' + sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    if (event.ctrlKey && event.shiftKey && event.key === 'A') {
      event.preventDefault();
      this.toggleOverlay();
    }
  }

  private startSectionObserver(): void {
    this.sectionRatios.clear();

    this.sectionObserver = new IntersectionObserver(
      (entries) => {
        // Update the persistent ratio map with this batch's entries
        entries.forEach((entry) => {
          const sectionId = this.identifySection(entry.target);
          if (sectionId) {
            this.sectionRatios.set(
              sectionId,
              entry.isIntersecting ? entry.intersectionRatio : 0,
            );
          }
        });

        // Find the section with the highest ratio across ALL tracked sections
        let bestId: string | null = null;
        let bestRatio = 0;
        this.sectionRatios.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        });

        if (bestId) {
          this.overlayService.setActiveSection(bestId);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: [0.1, 0.3, 0.5, 0.7],
      },
    );

    this.sectionSelectors.forEach((selector) => {
      const el = document.querySelector('.' + selector);
      if (el) {
        this.sectionObserver!.observe(el);
      }
    });

    // Immediate scan to detect current section on activation
    setTimeout(() => {
      const viewportCenter = window.innerHeight / 2;
      let closest: { id: string; distance: number } | null = null;
      this.sectionSelectors.forEach((selector) => {
        const el = document.querySelector('.' + selector);
        if (el) {
          const rect = el.getBoundingClientRect();
          const sectionCenter = rect.top + rect.height / 2;
          const distance = Math.abs(sectionCenter - viewportCenter);
          if (!closest || distance < closest.distance) {
            closest = { id: selector, distance };
          }
        }
      });
      if (closest) {
        this.overlayService.setActiveSection(closest.id);
      }
    }, 50);
  }

  private stopSectionObserver(): void {
    if (this.sectionObserver) {
      this.sectionObserver.disconnect();
      this.sectionObserver = null;
    }
    this.sectionRatios.clear();
  }

  private identifySection(el: Element): string | null {
    for (const selector of this.sectionSelectors) {
      if (el.classList.contains(selector)) {
        return selector;
      }
    }
    return null;
  }

  private applyHighlight(sectionId: string): void {
    if (this.previousHighlightEl) {
      this.previousHighlightEl.classList.remove('arch-highlight-active');
    }
    const el = document.querySelector('.' + sectionId);
    if (el) {
      el.classList.add('arch-highlight-active');
      this.previousHighlightEl = el;
    }
  }

  private injectHighlightStyles(): void {
    if (document.getElementById('arch-overlay-styles')) return;
    const style = document.createElement('style');
    style.id = 'arch-overlay-styles';
    style.textContent = `
     .arch-highlight-active {
        position: relative !important;
        z-index: 10 !important;

        /* Neutral Deep Gray Outline */
        outline: 2px solid rgb(75 85 99 / 17%) !important; 
        outline-offset: -2px !important;

        /* Subtle Lift Shadow - Neutral Gray */
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08) !important;

        /* Light Gray Background (Off-white but distinct) */
        background-color: rgba(243, 244, 246, 1) !important;

        /* Minimal Zoom */
        transform: scale(1.01) !important;
        will-change: transform;

        transition: 
          outline-color 0.2s ease, 
          background-color 0.2s ease, 
          transform 0.15s ease-out !important;
      }

      .arch-highlight-active::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 3px;
        height: 100%;
        background: #6366f1;
        z-index: 1;
        border-radius: 0 2px 2px 0;
      }
    `;
    document.head.appendChild(style);
  }

  private removeHighlightStyles(): void {
    const style = document.getElementById('arch-overlay-styles');
    if (style) {
      style.remove();
    }
    if (this.previousHighlightEl) {
      this.previousHighlightEl.classList.remove('arch-highlight-active');
      this.previousHighlightEl = null;
    }
  }
}
