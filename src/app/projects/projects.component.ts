import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PROJECTS } from '../../db-data'
import { Projects } from '../model/projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  @Input()
  project!:Projects;

  constructor() { }

  ngOnInit(): void {
  }

}
