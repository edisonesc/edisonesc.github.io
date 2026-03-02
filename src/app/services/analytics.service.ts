import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

declare let gtag: Function;

@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  constructor() {
    this.init();
  }

  private init(): void {
    const id = environment.ga4MeasurementId;
    if (!id) return;

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
    document.head.appendChild(script);

    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).gtag = function () {
      (window as any).dataLayer.push(arguments);
    };
    gtag('js', new Date());
    gtag('config', id);
  }

  track(eventName: string, params?: Record<string, any>): void {
    if (typeof gtag === 'function') {
      gtag('event', eventName, params ?? {});
    }
  }
}
