import { Component } from '@angular/core';

@Component({
  selector: 'app-gatos',
  templateUrl: './gatos.page.html',
  styleUrls: ['./gatos.page.scss'],
})
export class GatosPage {
  sectionOpen: string | null = null;
  exampleOpen: { [key: string]: boolean } = {};
  detailOpen: { [key: string]: { [key: string]: boolean } } = {};

  constructor() {}

  toggleSection(section: string) {
    this.sectionOpen = this.sectionOpen === section ? null : section;
  }

  toggleExample(example: string) {
    this.exampleOpen[example] = !this.exampleOpen[example];
  }

  isExampleOpen(example: string): boolean {
    return this.exampleOpen[example] || false;
  }

  toggleDetail(detail: string, section: string) {
    if (!this.detailOpen[section]) {
      this.detailOpen[section] = {};
    }
    this.detailOpen[section][detail] = !this.detailOpen[section][detail];
  }

  isDetailOpen(detail: string, section: string): boolean {
    return this.detailOpen[section]?.[detail] || false;
  }
}
