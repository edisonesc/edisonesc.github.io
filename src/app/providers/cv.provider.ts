import { WORK_TYPE } from '../enums/work-type.enum';
import { Experience } from '../models/experience.model';
import { Project } from '../models/project.model';
import { Technology } from '../models/technology.model';
import { User } from '../models/user.model';
import { B64GHIMG, CV_CSS_STYLE } from './cv-style.provider';

export const getCVName = `CV${new Date().toISOString().slice(0, 10).replace(/-/g, '')}`;

// ─────────────────────────────────────────────
//  V2 — Current default (modern, ATS-friendly)
// ─────────────────────────────────────────────
export function getCVTemplate(
  user: User,
  experiences: Experience[],
  technologies: Technology[],
  projects: Project[],
): string {
  const getRange = (start: string, end: string) =>
    start === end ? start : `${start} – ${end}`;

  const listItems = (items: string[]) =>
    (items || []).map((r) => `<li>${r}</li>`).join('');

  const getExperienceBlock = (_experiences: Experience[]) =>
    _experiences
      .map((exp) => {
        let body = '';
        switch (exp.type) {
          case WORK_TYPE.DIRECT:
          case WORK_TYPE.INTERN:
          case WORK_TYPE.EDUCATION:
          case WORK_TYPE.TRAINING:
            body = `<ul class="cv-list">${listItems(exp?.cv_responsibilities || exp?.responsibilities || [])}</ul>`;
            break;
          case WORK_TYPE.OUTSOURCING:
          case WORK_TYPE.DIRECT_MULTI:
            body = (exp.projects || [])
              .map(
                (project) => `
              <div class="cv-sub-project">
                <div class="cv-row">
                  <span class="cv-sub-name">${project.name}</span>
                  <span class="cv-date">${getRange(project.started_at, project.finished_at)}</span>
                </div>
                <ul class="cv-list">${listItems(project.cv_responsibilities || project.responsibilities || [])}</ul>
              </div>`,
              )
              .join('');
            break;
        }

        return `
        <div class="cv-entry">
          <div class="cv-row">
            <strong class="cv-company">${exp.title}</strong>
            <span class="cv-date">${getRange(exp.started_at, exp.finished_at)}</span>
          </div>
          ${exp.position ? `<p class="cv-role">${exp.position}${exp.location ? ` &middot; ${exp.location}` : ''}</p>` : ''}
          ${body}
        </div>`;
      })
      .join('');

  const techRow = (group: string, label: string) => {
    const names = technologies
      .filter((t) => t.group === group && !t.exclude_in_cv)
      .map((t) => t.name);
    return names.length > 0
      ? `<div class="cv-skill-row"><span class="cv-skill-label">${label}</span><span>${names.join(', ')}</span></div>`
      : '';
  };

  const workExps = experiences.filter(
    (e) =>
      [
        WORK_TYPE.DIRECT,
        WORK_TYPE.OUTSOURCING,
        WORK_TYPE.DIRECT_MULTI,
        WORK_TYPE.INTERN,
      ].includes(e.type) && !e.exclude_in_cv,
  );
  const trainingExps = experiences.filter(
    (e) => e.type === WORK_TYPE.TRAINING && !e.exclude_in_cv,
  );
  const educationExps = experiences.filter(
    (e) => e.type === WORK_TYPE.EDUCATION && !e.exclude_in_cv,
  );
  const cvProjects = projects.filter((p) => !p.exclude_in_cv);

  const contactParts = [
    user.email ? `<a href="mailto:${user.email}">${user.email}</a>` : '',
    user.toIncludeMobileNumber && user.mobile_number
      ? `<a href="tel:${user.mobile_number}">${user.mobile_number}</a>`
      : '',
    user.linkedin_url ? `<a href="${user.linkedin_url}">LinkedIn</a>` : '',
    user.github_repo_url ? `<a href="${user.github_repo_url}">GitHub</a>` : '',
    user.portfolio_url ? `<a href="${user.portfolio_url}">Portfolio</a>` : '',
    user.address || '',
  ].filter(Boolean);

  const css = `
    *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 9.5pt;
      line-height: 1.4;
      color: #1a1a1a;
      background: #fff;
      max-width: 780px;
      margin: 0 auto;
      padding: 22px 34px;
    }

    a { color: #1a4f9e; text-decoration: none; }
    a:hover { text-decoration: underline; }

    /* Header */
    .cv-header { padding-bottom: 9px; border-bottom: 2px solid #1a4f9e; margin-bottom: 0; }
    .cv-name { font-size: 18pt; font-weight: 700; color: #0d0d0d; letter-spacing: 0.2px; }
    .cv-headline { font-size: 9.5pt; color: #444; margin-top: 2px; }
    .cv-contact { font-size: 8.5pt; color: #555; margin-top: 4px; }
    .cv-contact a { color: #1a4f9e; }
    .cv-sep { margin: 0 6px; color: #bbb; }

    /* Section */
    .cv-section { margin-top: 11px; }
    .cv-section-title {
      font-size: 8.5pt;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1.4px;
      color: #1a4f9e;
      border-bottom: 1px solid #c4d4ef;
      padding-bottom: 2px;
      margin-bottom: 6px;
    }

    /* Entry */
    .cv-entry { margin-bottom: 8px; }
    .cv-row { display: flex; justify-content: space-between; align-items: baseline; gap: 8px; }
    .cv-company { font-size: 9.5pt; font-weight: 700; color: #0d0d0d; }
    .cv-date { font-size: 8.5pt; color: #555; white-space: nowrap; flex-shrink: 0; }
    .cv-role { font-style: italic; font-size: 9pt; color: #444; margin-top: 1px; margin-bottom: 2px; }

    /* Lists */
    .cv-list { padding-left: 14px; margin-top: 2px; }
    .cv-list li { font-size: 9pt; color: #2a2a2a; margin-bottom: 1px; line-height: 1.35; }

    /* Sub-project (outsourcing / direct-multi) */
    .cv-sub-project { margin: 5px 0 2px 6px; }
    .cv-sub-name { font-weight: 600; font-size: 9pt; color: #1a1a1a; }

    /* Skills */
    .cv-skill-row { display: flex; gap: 8px; margin-bottom: 3px; font-size: 9pt; }
    .cv-skill-label { font-weight: 700; min-width: 78px; flex-shrink: 0; color: #0d0d0d; }

    /* Summary */
    .cv-summary, .cv-summary p { font-size: 9pt; color: #2a2a2a; margin: 0; }

    /* Projects */
    .cv-proj { margin-bottom: 7px; }
    .cv-proj-name { font-weight: 700; font-size: 9.5pt; color: #0d0d0d; }
    .cv-proj-desc { font-size: 9pt; color: #333; margin-top: 2px; }
    .cv-proj-url { font-size: 8.5pt; margin-top: 1px; }

    /* Print */
    @page { size: letter; margin: 12mm 14mm; }
    @media print {
      body { padding: 0; max-width: 100%; }
      .cv-section-title,
      .cv-row {
        break-after: avoid;
        page-break-after: avoid;
      }
      .cv-sub-project {
        break-inside: avoid;
        page-break-inside: avoid;
      }
    }
  `;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${user.name} — CV</title>
  <style>${css}</style>
</head>
<body>

  <header class="cv-header">
    <h1 class="cv-name">${user.name}</h1>
    <p class="cv-headline">${user.position}</p>
    <p class="cv-contact">
      ${contactParts.join('<span class="cv-sep">·</span>')}
    </p>
  </header>

  ${
    user.description
      ? `<section class="cv-section">
    <h2 class="cv-section-title">Summary</h2>
    <div class="cv-summary">${user.description}</div>
  </section>`
      : ''
  }

  ${
    workExps.length > 0
      ? `<section class="cv-section">
    <h2 class="cv-section-title">Experience</h2>
    ${getExperienceBlock(workExps)}
  </section>`
      : ''
  }

  ${
    cvProjects.length > 0
      ? `<section class="cv-section">
    <h2 class="cv-section-title">Projects</h2>
    ${cvProjects
      .map(
        (project) => `
    <div class="cv-proj">
      <div class="cv-row">
        <span class="cv-proj-name">${project.name}</span>
        <span class="cv-date">${getRange(project.started_at, project.finished_at)}</span>
      </div>
      <p class="cv-proj-desc">${project.description}</p>
      ${project.project_url ? `<p class="cv-proj-url"><a href="${project.project_url}">${project.project_url}</a></p>` : ''}
    </div>`,
      )
      .join('')}
  </section>`
      : ''
  }

  <section class="cv-section">
    <h2 class="cv-section-title">Skills</h2>
    <div class="cv-skills">
      ${techRow('FRONTEND', 'Frontend')}
      ${techRow('BACKEND', 'Backend')}
      ${techRow('DEVOPS', 'DevOps')}
      ${techRow('EXPLORATORY', 'Exploratory')}
    </div>
  </section>

  ${
    trainingExps.length > 0
      ? `<section class="cv-section">
    <h2 class="cv-section-title">Certifications &amp; Training</h2>
    ${getExperienceBlock(trainingExps)}
  </section>`
      : ''
  }

  ${
    educationExps.length > 0
      ? `<section class="cv-section">
    <h2 class="cv-section-title">Education</h2>
    ${getExperienceBlock(educationExps)}
  </section>`
      : ''
  }

</body>
</html>`;
}

// ─────────────────────────────────────────────
//  PDF Definition — native pdfmake document
// ─────────────────────────────────────────────
export function getCVPdfDefinition(
  user: User,
  experiences: Experience[],
  technologies: Technology[],
  projects: Project[],
): any {
  const BLUE = '#1a4f9e';
  const DARK = '#0d0d0d';
  const GREY = '#555555';
  const BODY_COLOR = '#2a2a2a';
  const LINE_BLUE = '#c4d4ef';

  const getRange = (start: string, end: string) =>
    start === end ? start : `${start} – ${end}`;

  // Parse HTML into pdfmake inline nodes (handles p, br, strong, em, a, ul, li)
  const htmlToNodes = (html: string): any[] => {
    if (!html) return [];
    const parseNode = (node: ChildNode): any => {
      if (node.nodeType === Node.TEXT_NODE) return node.textContent || '';
      const el = node as Element;
      const tag = el.tagName?.toLowerCase();
      const kids = () =>
        Array.from(el.childNodes)
          .map(parseNode)
          .filter((n) => n !== '');
      switch (tag) {
        case 'p':
          return { text: kids(), margin: [0, 0, 0, 2] };
        case 'br':
          return '\n';
        case 'strong':
        case 'b':
          return { text: kids(), bold: true };
        case 'em':
        case 'i':
          return { text: kids(), italics: true };
        case 'a':
          return {
            text: kids(),
            link: el.getAttribute('href') || '',
            color: BLUE,
          };
        case 'ul':
          return { ul: kids() };
        case 'li':
          return { text: kids() };
        default:
          return kids();
      }
    };
    const div = document.createElement('div');
    div.innerHTML = html;
    return Array.from(div.childNodes)
      .map(parseNode)
      .flat()
      .filter((n) => n !== '');
  };

  const hLine = (color: string, width: number): any => ({
    canvas: [
      {
        type: 'line',
        x1: 0,
        y1: 0,
        x2: 515,
        y2: 0,
        lineWidth: width,
        lineColor: color,
      },
    ],
  });

  const sectionBlock = (title: string): any[] => [
    { text: title.toUpperCase(), style: 'sectionTitle', margin: [0, 9, 0, 0] },
    { ...hLine(LINE_BLUE, 0.5), margin: [0, 2, 0, 4] },
  ];

  const entryRow = (
    left: string,
    right: string,
    leftStyle = 'company',
  ): any => ({
    columns: [
      { text: left, style: leftStyle, width: '*' },
      { text: right, style: 'date', width: 'auto', alignment: 'right' },
    ],
    margin: [0, 0, 0, 0],
  });

  const bulletList = (items: string[]): any => ({
    ul: items.map((item) => ({ text: item, style: 'bullet' })),
    margin: [2, 1, 0, 0],
  });

  const renderExperiences = (exps: Experience[]): any[] =>
    exps.map((exp, i) => {
      const body: any[] = [
        entryRow(exp.title, getRange(exp.started_at, exp.finished_at)),
      ];

      if (exp.position) {
        const roleText = exp.location
          ? `${exp.position} · ${exp.location}`
          : exp.position;
        body.push({ text: roleText, style: 'role' });
      }

      switch (exp.type) {
        case WORK_TYPE.DIRECT:
        case WORK_TYPE.INTERN:
        case WORK_TYPE.EDUCATION:
        case WORK_TYPE.TRAINING: {
          const items = exp.cv_responsibilities || exp.responsibilities || [];
          if (items.length > 0) body.push(bulletList(items));
          break;
        }
        case WORK_TYPE.OUTSOURCING:
        case WORK_TYPE.DIRECT_MULTI:
          (exp.projects || []).forEach((proj) => {
            const pItems =
              proj.cv_responsibilities || proj.responsibilities || [];
            body.push({
              ...entryRow(
                proj.name,
                getRange(proj.started_at, proj.finished_at),
                'subProject',
              ),
              margin: [4, 2, 0, 0],
            });
            if (pItems.length > 0)
              body.push({ ...bulletList(pItems), margin: [6, 0, 0, 0] });
          });
          break;
      }

      return { stack: body, margin: [0, 0, 0, i < exps.length - 1 ? 6 : 0] };
    });

  const techRow = (group: string, label: string): any | null => {
    const names = technologies
      .filter((t) => t.group === group && !t.exclude_in_cv)
      .map((t) => t.name);
    if (!names.length) return null;
    return {
      columns: [
        { text: label, style: 'skillLabel', width: 72 },
        { text: names.join(', '), style: 'skillValue', width: '*' },
      ],
      margin: [0, 0, 0, 2],
    };
  };

  const workExps = experiences.filter(
    (e) =>
      [
        WORK_TYPE.DIRECT,
        WORK_TYPE.OUTSOURCING,
        WORK_TYPE.DIRECT_MULTI,
        WORK_TYPE.INTERN,
      ].includes(e.type) && !e.exclude_in_cv,
  );
  const trainingExps = experiences.filter(
    (e) => e.type === WORK_TYPE.TRAINING && !e.exclude_in_cv,
  );
  const educationExps = experiences.filter(
    (e) => e.type === WORK_TYPE.EDUCATION && !e.exclude_in_cv,
  );
  const cvProjects = projects.filter((p) => !p.exclude_in_cv);

  const SEP: any = { text: '  ·  ', style: 'contact' };
  const contactInline: any[] = [];
  const addContact = (node: any) => {
    if (contactInline.length) contactInline.push(SEP);
    contactInline.push(node);
  };
  if (user.email)
    addContact({
      text: user.email,
      style: 'contact',
      color: BLUE,
      link: `mailto:${user.email}`,
    });
  if (user.toIncludeMobileNumber && user.mobile_number)
    addContact({ text: user.mobile_number, style: 'contact' });
  if (user.linkedin_url)
    addContact({
      text: 'LinkedIn',
      style: 'contact',
      color: BLUE,
      link: user.linkedin_url as string,
    });
  if (user.github_repo_url)
    addContact({
      text: 'GitHub',
      style: 'contact',
      color: BLUE,
      link: user.github_repo_url as string,
    });
  if (user.portfolio_url)
    addContact({
      text: 'Portfolio',
      style: 'contact',
      color: BLUE,
      link: user.portfolio_url as string,
    });
  if (user.address) addContact({ text: user.address, style: 'contact' });

  const skillRows = [
    techRow('FRONTEND', 'Frontend'),
    techRow('BACKEND', 'Backend'),
    techRow('DEVOPS', 'DevOps'),
    techRow('EXPLORATORY', 'Exploratory'),
  ].filter(Boolean);

  const content: any[] = [
    // ── Header ──────────────────────────────────
    { text: user.name, style: 'name' },
    { text: user.position, style: 'headline', margin: [0, 2, 0, 2] },
    { text: contactInline },
    { ...hLine(BLUE, 2), margin: [0, 5, 0, 0] },
  ];

  if (user.description) {
    content.push(...sectionBlock('Summary'));
    const descNodes = htmlToNodes(user.description);
    content.push({
      stack: descNodes.length
        ? descNodes
        : [{ text: user.description, style: 'body' }],
    });
  }

  if (workExps.length) {
    content.push(...sectionBlock('Experience'));
    content.push(...renderExperiences(workExps));
  }

  if (cvProjects.length) {
    content.push(...sectionBlock('Projects'));
    cvProjects.forEach((proj, i) => {
      const projBottom = i < cvProjects.length - 1 ? 5 : 0;
      content.push(
        entryRow(proj.name, getRange(proj.started_at, proj.finished_at)),
      );
      content.push({
        text: proj.description,
        style: 'body',
        margin: [0, 1, 0, proj.project_url ? 1 : projBottom],
      });
      if (proj.project_url) {
        content.push({
          text: proj.project_url,
          style: 'body',
          color: BLUE,
          link: proj.project_url,
          fontSize: 8.5,
          margin: [0, 0, 0, projBottom],
        });
      }
    });
  }

  if (skillRows.length) {
    content.push(...sectionBlock('Skills'));
    content.push(...skillRows);
  }

  if (trainingExps.length) {
    content.push(...sectionBlock('Certifications & Training'));
    content.push(...renderExperiences(trainingExps));
  }

  if (educationExps.length) {
    content.push(...sectionBlock('Education'));
    content.push(...renderExperiences(educationExps));
  }

  return {
    content,
    pageSize: 'LETTER',
    pageMargins: [40, 36, 40, 36],
    defaultStyle: {
      font: 'Roboto',
      fontSize: 9.5,
      color: BODY_COLOR,
      lineHeight: 1.3,
    },
    styles: {
      name: { fontSize: 18, bold: true, color: DARK },
      headline: { fontSize: 9.5, color: '#444444' },
      contact: { fontSize: 8.5, color: GREY },
      sectionTitle: {
        fontSize: 8.5,
        bold: true,
        color: BLUE,
        characterSpacing: 1.2,
      },
      company: { fontSize: 9.5, bold: true, color: DARK },
      subProject: { fontSize: 9, bold: true, color: '#1a1a1a' },
      date: { fontSize: 8.5, color: GREY },
      role: {
        fontSize: 9,
        italics: true,
        color: '#444444',
        margin: [0, 1, 0, 2],
      },
      bullet: { fontSize: 9, color: BODY_COLOR, lineHeight: 1.3 },
      skillLabel: { fontSize: 9, bold: true, color: DARK },
      skillValue: { fontSize: 9, color: BODY_COLOR },
      body: { fontSize: 9, color: BODY_COLOR },
    },
  };
}

// ─────────────────────────────────────────────
//  V1 — Original implementation (preserved)
// ─────────────────────────────────────────────
export function getCVTemplateV1(
  user: User,
  experiences: Experience[],
  technologies: Technology[],
  projects: Project[],
) {
  const getRange = (start, end) =>
    start == end ? start : `${start} &ndash; ${end}`;

  const getExperienceContent = (_experiences) => {
    return _experiences
      .map((exp) => {
        const listResponsibilies = (responsibilities: string[]) => {
          return `<ul>${responsibilities
            .map((r) => `<li class="category-description-main">${r}</li>`)
            .join('')}</ul>`;
        };

        let descriptionContent = ``;
        switch (exp.type) {
          case WORK_TYPE.DIRECT:
          case WORK_TYPE.INTERN:
          case WORK_TYPE.EDUCATION:
          case WORK_TYPE.TRAINING:
            descriptionContent = listResponsibilies(
              exp?.cv_responsibilities || exp.responsibilities,
            );
            break;
          case WORK_TYPE.OUTSOURCING:
          case WORK_TYPE.DIRECT_MULTI:
            descriptionContent = `${exp.projects.map((project) => {
              return `
                            <p class="category-details-header">${
                              project.name
                            }</p>
                            ${listResponsibilies(
                              project.cv_responsibilities ||
                                project.responsibilities,
                            )}
                        `;
            })}`;
            break;
        }

        return `<p class="primary-titles">${
          exp?.position != undefined ? `${exp.position}  - ` : ''
        }${exp.title} </p>
            <p class="category-details">${getRange(
              exp.started_at,
              exp.finished_at,
            )}</p>

            ${descriptionContent}`;
      })
      .join('');
  };

  return `<!DOCTYPE html>
        <head>
        <title>Justin Escabarte</title>
        <meta charset="utf-8">
        <link rel="stylesheet" href="css/style.css">
        <style>${CV_CSS_STYLE}</style>
        </head>

        <body>
        <header class="header-details">
            <h1 class="name" onclick="javascript:window.open(
            '${user.portfolio_url}',
            '_blank'
            );">${user.name} | </h1>
            <article class="links-container">
            <a class="links" href="${
              user.github_repo_url
            }" target="_blank"><img src="${B64GHIMG}" alt="github icon" width="26" height="19" style="margin-top: -6px"></a>
            </article><br>
            <article class="contact-information">
            <p class="contact-deets">
                <a class="links" href="mailto:${user.email}">${
                  user.email
                }</a></br>

                ${
                  user?.toIncludeMobileNumber
                    ? `<div class="contact-number">
                        <a class="links" href="">${user.mobile_number}</a></div>
                    </p>`
                    : ''
                }

            </article>
        </header>
        <section class="content">
            <h2 class="category-headers">Introduction</h2>

            ${user.description}

            <h2 class="category-headers">Technical</h2>
            <hr>
            <p class="category-details">Frontend</p>

            <ul>
            <li class="category-description-main">${technologies
              .filter(
                (e) =>
                  e.group == 'FRONTEND' && e.is_user_core && !e.exclude_in_cv,
              )
              .map((e) => e.name)
              .join(', ')}</li>
              <li class="category-description-main">${technologies
                .filter(
                  (e) =>
                    e.group == 'FRONTEND' &&
                    !e.is_user_core &&
                    !e.exclude_in_cv,
                )
                .map((e) => e.name)
                .join(', ')}</li>
            </ul>
            </ul>


            <p class="category-details">Backend</p>
            <ul>
            <li class="category-description-main">${technologies
              .filter(
                (e) =>
                  e.group == 'BACKEND' && e.is_user_core && !e.exclude_in_cv,
              )
              .map((e) => e.name)
              .join(', ')}</li>
              <li class="category-description-main">${technologies
                .filter(
                  (e) =>
                    e.group == 'BACKEND' && !e.is_user_core && !e.exclude_in_cv,
                )
                .map((e) => e.name)
                .join(', ')}</li>
            </ul>
            <p class="category-details">DevOps</p>
            <ul>
            <li class="category-description-main">${technologies
              .filter((e) => e.group == 'DEVOPS' && !e.exclude_in_cv)
              .map((e) => e.name)
              .join(', ')}
            </li>
            </ul>
            <p class="category-details">Exploratory</p>
            <ul>
            <li class="category-description-main">${technologies
              .filter((e) => e.group == 'EXPLORATORY' && !e.exclude_in_cv)
              .map((e) => e.name)
              .join(', ')}
            </li>
            </ul>
            <h2 class="category-headers">Experience</h2>
            <hr>
            ${getExperienceContent(
              experiences.filter(
                (e) =>
                  [
                    WORK_TYPE.DIRECT,
                    WORK_TYPE.OUTSOURCING,
                    WORK_TYPE.DIRECT_MULTI,
                    WORK_TYPE.INTERN,
                  ].includes(e.type) && !e.exclude_in_cv,
              ),
            )}
            <h2 class="category-headers">Projects</h2>

            ${projects
              .filter((e) => !e.exclude_in_cv)
              .map(
                (project) => `
                    <p class="primary-titles">${project.name}</p>
                    <p class="category-details">${getRange(
                      project.started_at,
                      project.finished_at,
                    )}</p>
                    <p class="category-description-main"> ${project.description}

                    ${
                      project?.project_url
                        ? `Visit
            <a class="links" href="${
              project?.project_url
            }" target="_blank">here</a> for further details.</p>`
                        : ``
                    }`,
              )
              .join('')}



            ${
              experiences.filter(
                (e) => e.type == WORK_TYPE.TRAINING && !e.exclude_in_cv,
              ).length > 0
                ? `<h2 class="category-headers">Seminars & Certification</h2>
            <hr>`
                : ``
            }

            ${getExperienceContent(
              experiences.filter(
                (e) => e.type == WORK_TYPE.TRAINING && !e.exclude_in_cv,
              ),
            )}

            <h2 class="category-headers">Education</h2>
            <hr>
            ${getExperienceContent(
              experiences.filter(
                (e) => e.type == WORK_TYPE.EDUCATION && !e.exclude_in_cv,
              ),
            )}
            </div>
        </section>
        </body>`;
}
