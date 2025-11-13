import { Injectable } from '@angular/core';
import { saveAs } from 'file-saver';
import * as moment from 'moment';
import { getCVName } from '../providers/cv.provider';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private tempFileUrl: string | null = null;

  saveHtmlFile(content: string, fileName: string = getCVName): void {
    const blob = new Blob([content], { type: 'text/html' });
    saveAs(blob, fileName);
  }
  getTempFileUrl(): string | null {
    return this.tempFileUrl;
  }

  revokeTempFileUrl(): void {
    if (this.tempFileUrl) {
      window.URL.revokeObjectURL(this.tempFileUrl);
      this.tempFileUrl = null;
    }
  }
}