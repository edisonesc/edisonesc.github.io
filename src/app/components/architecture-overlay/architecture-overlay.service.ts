import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { user } from 'src/app/providers/user.provider';
import { projects } from 'src/app/providers/projects.provider';
import { experiences } from 'src/app/providers/experience.provider';
import { AOEntries, AOEntriesV2 } from './architecture-overlay.const';
import {
  aws,
  githubActions,
  n8n,
} from 'src/app/providers/technologies.provider';

export interface DataSourceInfo {
  providerFile: string;
  exportName: string;
  modelType: string;
  sampleJson?: any;
}

export interface PipelineStep {
  label: string;
  detail: string;
}

export interface SectionMeta {
  id: string;
  label: string;
  cssSelector: string;
  dataSource: DataSourceInfo;
  pipeline: PipelineStep[];
  sourceSnippet?: string;
}

@Injectable()
export class ArchitectureOverlayService {
  readonly isActive$ = new BehaviorSubject<boolean>(false);
  readonly activeSection$ = new BehaviorSubject<string | null>(null);
  readonly showSourceView$ = new BehaviorSubject<boolean>(true);

  private registry: Map<string, SectionMeta> = new Map();

  constructor() {
    this.buildRegistry();
  }

  toggle(): void {
    this.isActive$.next(!this.isActive$.value);
  }

  setActiveSection(sectionId: string): void {
    this.activeSection$.next(sectionId);
  }

  getMeta(sectionId: string): SectionMeta | undefined {
    return this.registry.get(sectionId);
  }

  toggleSourceView(): void {
    this.showSourceView$.next(!this.showSourceView$.value);
  }

  private buildRegistry(): void {
    const userSample = {
      name: user.name,
      position: user.position,
      email: user.email,
      address: user.address,
    };

    const technologiesSample = projects
      .slice(0, 2)
      .map((p) => p.technologies?.slice(0, 1));

    const projectsSample = projects.slice(0, 2).map((p) => ({
      name: p.name,
      type: p.type,
      technologies: p.technologies?.slice(0, 2), //(p.technologies?.length || 0) + ' techs',
    }));

    const expSample = experiences
      .filter((e) => e.title && e.position)
      .slice(0, 2)
      .map((e) => ({
        title: e.title,
        type: e.type,
        position: e.position,
      }));

    const entries: SectionMeta[] = AOEntries(
      user,
      userSample,
      technologiesSample,
      projectsSample,

      expSample,
    );

    entries.forEach((entry) => this.registry.set(entry.id, entry));
  }
}
