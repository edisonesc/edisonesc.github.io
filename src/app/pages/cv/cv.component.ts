import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { getCVTemplate } from 'src/app/providers/cv.provider';

@Component({
  selector: 'app-cv',
  imports: [],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss',
})
export class CvComponent {
  cvContent;

  constructor(
    private router: Router,
    private sanitizer: DomSanitizer,
    private activeRoute: ActivatedRoute
  ) {
    
  }

  ngAfterContentChecked(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

  }
  ngOnInit(): void {
    //params approach
    // this.activeRoute.queryParams.subscribe(params => {

    // const content = params['data'] ? JSON.parse(params['data']) : null;
    // if(content) {
    //   const {
    //   user,
    //   experiences,
    //   technologies,
    //   projects
    //   } = content;
    //   this.cvContent = getCVTemplate(user, experiences, technologies, projects)
    // }
    // });

    // localStorage approach
    const content = JSON.parse(localStorage.getItem('cvData') || '{}');
    
    if(content) {
      const {
      user,
      experiences,
      technologies,
      projects
      } = content;

      
      let _cvContent = getCVTemplate(user, experiences, technologies, projects)
      // let _cvContent = this.router.getCurrentNavigation().extras.state?.['content'];
      this.cvContent = this.sanitizer.bypassSecurityTrustHtml(_cvContent);
    }
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  ngAfterViewInit(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    // window.print()

  }
}
