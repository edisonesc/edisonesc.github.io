import { experiences } from 'src/app/providers/experience.provider';
import { WORK_TYPE } from "../enums/work-type.enum";
import { Experience } from "../models/experience.model";
import { Project } from "../models/project.model";
import { Technology } from "../models/technology.model";
import { User } from "../models/user.model";
import { B64GHIMG, CV_CSS_STYLE } from './cv-style.provider';
import * as moment from 'moment';
import { user } from './user.provider';

export const getCVName = `CV${moment().format('yyyymmDD').toString()}`;

export function getCVTemplate(
    user: User,
    experiences: Experience[],
    technologies: Technology[],
    projects: Project[]
) {
    const getRange = (start, end) => start == end ? start : `${start} &ndash; ${end}`

    const getExperienceContent = (_experiences) => {
        return _experiences.map(exp => {

            const listResponsibilies = (responsibilities: string[]) => {
                return `<ul>${responsibilities.map(r => `<li class="category-description-main">${r}</li>`).join('')}</ul>`
            }

            let descriptionContent = ``
            switch(exp.type) {
                case WORK_TYPE.DIRECT:
                case WORK_TYPE.INTERN:
                case WORK_TYPE.EDUCATION:
                case WORK_TYPE.TRAINING:
                    descriptionContent = listResponsibilies(exp.responsibilities)
                break;
                case WORK_TYPE.OUTSOURCING:
                    descriptionContent = `${exp.projects.map(project => {
                        return `
                            <p class="category-details-header">${project.name}</p>
                            ${listResponsibilies(project.responsibilities)}
                        `
                    })}`
                break
            }
            
            return `<p class="primary-titles">${exp?.position != undefined ? `${exp.position}  - ` : ''}${exp.title} </p>
            <p class="category-details">${getRange(exp.started_at, exp.finished_at)}</p>
            
            ${descriptionContent}`
        }).join('')
    }

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
            <a class="links" href="${user.github_repo_url}" target="_blank"><img src="${B64GHIMG}" alt="github icon" width="26" height="19" style="margin-top: -6px"></a>
            </article><br>
            <article class="contact-information">
            <p class="contact-deets">
                <a class="links" href="mailto:${user.email}">${user.email}</a></br>

                ${user?.toIncludeMobileNumber ? 
                    
                    `<div class="contact-number">
                        <a class="links" href="">${user.mobile_number}</a></div>
                    </p>` : ''
                }
                
            </article>
        </header>
        <section class="content">
            <h2 class="category-headers">Technical</h2>
            <hr>
            <ul>
            <li class="category-description-main">${technologies.filter(e => e.type == 'FRAMEWORK').map(e => e.name).join(', ')}</li>            
            <li class="category-description-main">${technologies.filter(e => e.type == 'LANGUAGE').map(e => e.name).join(', ')}</li>            
            <li class="category-description-main">${technologies.filter(e => e.type == 'TOOL').map(e => e.name).join(', ')}</li>            
            </ul>
            <h2 class="category-headers">Experience</h2>
            <hr>
            ${
                getExperienceContent(experiences.filter(e => [WORK_TYPE.DIRECT, WORK_TYPE.OUTSOURCING, WORK_TYPE.INTERN].includes(e.type)))
            }
            <h2 class="category-headers">Projects</h2>

            ${
                projects.filter(e => !e.excludeInCVExport).map(project => `
                    <p class="primary-titles">${project.name}</p>        
                    <p class="category-details">${getRange(project.started_at, project.finished_at)}</p>
                    <p class="category-description-main"> ${project.description} Visit
            <a class="links" href="${project.project_url}" target="_blank">here</a> for further details.</p>`).join('')
            }

            <h2 class="category-headers">Seminars & Certification</h2>
            <hr>    

            ${
                getExperienceContent(experiences.filter(e => e.type == WORK_TYPE.TRAINING && !e.excludeInCVExport))
            }

            <h2 class="category-headers">Education</h2>
            <hr>
            ${
                getExperienceContent(experiences.filter(e => e.type == WORK_TYPE.EDUCATION && !e.excludeInCVExport))
            }            
            </div>
        </section>
        </body>`
}