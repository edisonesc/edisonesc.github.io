import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvComponent } from './cv.component';
import { provideRouter } from '@angular/router';

describe('CvComponent', () => {
  let component: CvComponent;
  let fixture: ComponentFixture<CvComponent>;

  beforeEach(async () => {
    const mockCvData = {
      user: {
        name: 'Test User',
        email: 'test@example.com',
        position: 'Developer',
        address: '',
        profile_picture: '',
        description: '',
        mobile_number: '',
        portfolio_url: '',
        github_repo_url: '',
        toIncludeMobileNumber: false,
      },
      experiences: [],
      technologies: [],
      projects: [],
    };
    spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify(mockCvData));

    await TestBed.configureTestingModule({
      imports: [CvComponent],
      providers: [
        provideRouter([]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
