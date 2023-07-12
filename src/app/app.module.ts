import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { HeaderSectionComponent } from './header-section/header-section.component';
import { ProjectsComponent } from './projects/projects.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderSectionComponent,
    ProjectsComponent,
    PortfolioComponent,
    ContactComponent,
    AboutComponent,
    FooterComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxPageScrollModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
