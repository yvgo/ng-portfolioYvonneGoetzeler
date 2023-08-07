import { Component } from '@angular/core';
import { PROJECTS } from '../../db-data';
import { Projects } from '../model/projects';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  projects = PROJECTS;

  /* onProjectSelected(project:Projects) {
    console.log("project component - works", project);
  } */

}
