import { Component } from '@angular/core';
import { PROJECTS } from '../../db-data';
import { Projects } from '../model/projects';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  project = PROJECTS[0];

  projects = PROJECTS;
  /* coreCourse = COURSES[0];
  rxjsCourse = COURSES[1];
  ngrxCourse = COURSES[2]; */

  onProjectSelected(project:Projects) {
    console.log("project component - works", project);
  }

}
