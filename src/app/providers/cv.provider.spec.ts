import { WORK_TYPE } from '../enums/work-type.enum';
import { Experience } from '../models/experience.model';
import { Project } from '../models/project.model';
import { Technology } from '../models/technology.model';
import { User } from '../models/user.model';
import { getCVPdfDefinition, getCVTemplate } from './cv.provider';

describe('CV provider', () => {
  const user = {
    name: 'Test User',
    email: 'test@example.com',
    position: 'Software Engineer',
    description: '',
    mobile_number: '',
    address: '',
    profile_picture: '',
    github_repo_url: '',
    portfolio_url: '',
    toIncludeMobileNumber: false,
  } as User;

  const technologies: Technology[] = [];
  const projects: Project[] = [];

  const categorizedExperience = {
    title: 'Company',
    started_at: 'Jan 2024',
    finished_at: 'Present',
    position: 'Engineer',
    type: WORK_TYPE.DIRECT_MULTI,
    projects: [
      {
        name: 'Platform',
        started_at: 'Jan 2024',
        finished_at: 'Present',
        cv_responsibilities: ['Flat CV fallback'],
        responsibilities: ['Flat fallback'],
        responsibility_categories: [
          {
            title: 'Infrastructure Reliability & Developer Experience',
            cv_responsibilities: ['Category CV bullet'],
            responsibilities: ['Category standard bullet'],
          },
          {
            title: 'Empty Category',
            responsibilities: [],
          },
        ],
      },
    ],
  } as Experience;

  it('renders project responsibility categories in expanded HTML mode', () => {
    const html = getCVTemplate(
      user,
      [categorizedExperience],
      technologies,
      projects,
    );

    expect(html).toContain('Infrastructure Reliability & Developer Experience');
    expect(html).toContain('Category CV bullet');
    expect(html).not.toContain('Empty Category');
  });

  it('flattens project responsibility categories in concise HTML mode', () => {
    const html = getCVTemplate(
      user,
      [categorizedExperience],
      technologies,
      projects,
      { variant: 'concise' },
    );

    expect(html).not.toContain('Infrastructure Reliability & Developer Experience');
    expect(html).toContain('Category CV bullet');
    expect(html).not.toContain('Flat CV fallback');
  });

  it('falls back to flat project responsibilities when no categories exist', () => {
    const fallbackExperience = {
      ...categorizedExperience,
      projects: [
        {
          name: 'Fallback Project',
          started_at: 'Jan 2024',
          finished_at: 'Present',
          cv_responsibilities: ['Flat CV fallback'],
          responsibilities: ['Flat fallback'],
        },
      ],
    } as Experience;

    const html = getCVTemplate(user, [fallbackExperience], technologies, projects);

    expect(html).toContain('Flat CV fallback');
  });

  it('renders direct experience responsibility categories', () => {
    const directExperience = {
      title: 'Direct Company',
      started_at: 'Jan 2024',
      finished_at: 'Present',
      position: 'Engineer',
      type: WORK_TYPE.DIRECT,
      cv_responsibilities: ['Direct flat fallback'],
      responsibilities: ['Direct fallback'],
      responsibility_categories: [
        {
          title: 'Knowledge Sharing & Team Enablement',
          cv_responsibilities: ['Direct category bullet'],
          responsibilities: ['Direct standard category bullet'],
        },
      ],
    } as Experience;

    const html = getCVTemplate(user, [directExperience], technologies, projects);

    expect(html).toContain('Knowledge Sharing & Team Enablement');
    expect(html).toContain('Direct category bullet');
    expect(html).not.toContain('Direct flat fallback');
  });

  it('renders project responsibility categories in the PDF definition', () => {
    const pdfDefinition = getCVPdfDefinition(
      user,
      [categorizedExperience],
      technologies,
      projects,
    );
    const serialized = JSON.stringify(pdfDefinition);

    expect(serialized).toContain('Infrastructure Reliability & Developer Experience');
    expect(serialized).toContain('Category CV bullet');
    expect(serialized).not.toContain('Empty Category');
  });
});
