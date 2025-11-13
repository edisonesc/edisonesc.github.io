import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FileService } from './file-service.service';
import { getCVName, getCVTemplate } from '../providers/cv.provider';
import { User } from '../models/user.model';
import { Experience } from '../models/experience.model';
import { Technology } from '../models/technology.model';
import { Project } from '../models/project.model';
import * as html2pdf from 'html2pdf.js';
import * as moment from 'moment';
import * as FileSaver from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor(private fileService: FileService, private http: HttpClient) { }

  saveCV(  user: User,
    experiences: Experience[],
    technologies: Technology[],
    projects: Project[], onSuccess: () => void) {

    const content = getCVTemplate(user, experiences , technologies,projects);

    const container = document.createElement('div');
    // container.setAttribute('style', 'margin: 10px 180px')
    container.innerHTML = content;

    const options = {
      margin: [10, 20],
      filename: moment('L').toString(),
      html2canvas: {
        // width: 1080,
        scale: 2, // Increase this value for higher resolution
        // height: 1920
      },
      image: { type: 'jpeg', quality: 10},
      jsPDF: {
        orientation: 'portrait',
        unit: 'mm',
        format: 'letter',
        putOnlyUsedFonts: true,
      },
      pagebreak: {mode: 'avoid-all'}
      // enableLinks: true

    };

       // Convert HTML to PDF and save
       html2pdf()
       .from(container)
       .set(options)       
       .toPdf()
       .get('pdf')
       .then((pdf) => {
         // Save the generated PDF using FileSaver.js
         const pdfBlob = pdf.output('blob');
         FileSaver.saveAs(pdfBlob, `${getCVName}.pdf`);
         onSuccess?.()
       });   

    // const fileUrl = this.fileService.saveHtmlFile(content);
    // console.log('Temporary HTML File URL:', fileUrl);
  }

  // saveCV(  user: User,
  //   experiences: Experience[],
  //   technologies: Technology[],
  //   projects: Project[]) {

  //   const content = getCVTemplate(user, experiences , technologies,projects);

  //   const fileUrl = this.fileService.saveHtmlFile(content);
  //   console.log('Temporary HTML File URL:', fileUrl);
  // }
}
