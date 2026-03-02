import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { getCVTemplate, getCVName, getCVPdfDefinition } from 'src/app/providers/cv.provider';
import { AnalyticsService } from 'src/app/services/analytics.service';

@Component({
  selector: 'app-cv',
  imports: [],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss',
})
export class CvComponent {
  cvContent: any;
  isDownloading = false;

  private cvData: any = null;

  constructor(private sanitizer: DomSanitizer, private analytics: AnalyticsService) {}

  ngOnInit(): void {
    const content = JSON.parse(localStorage.getItem('cvData') || '{}');

    if (content) {
      this.cvData = content;
      const { user, experiences, technologies, projects } = content;
      const _cvContent = getCVTemplate(user, experiences, technologies, projects);
      this.cvContent = this.sanitizer.bypassSecurityTrustHtml(_cvContent);
    }
  }

  async download(): Promise<void> {
    if (!this.cvData || this.isDownloading) return;
    this.analytics.track('cv_download');
    this.isDownloading = true;

    try {
      const [pdfMakeModule, pdfFontsModule] = await Promise.all([
        import('pdfmake/build/pdfmake'),
        import('pdfmake/build/vfs_fonts'),
      ]);

      const pdfMake = (pdfMakeModule as any).default ?? pdfMakeModule;
      const pdfFonts = (pdfFontsModule as any).default ?? pdfFontsModule;

      for (const [name, data] of Object.entries(pdfFonts)) {
        pdfMake.virtualfs.writeFileSync(name, data as string, 'base64');
      }

      const { user, experiences, technologies, projects } = this.cvData;
      const docDefinition = getCVPdfDefinition(user, experiences, technologies, projects);

      pdfMake.createPdf(docDefinition).download(`${getCVName}.pdf`);
    } finally {
      this.isDownloading = false;
    }
  }
}
