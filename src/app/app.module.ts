import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { HeaderSectionComponent } from './header-section/header-section.component';
import { ProjectsComponent } from './projects/projects.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { SkillsComponent } from './skills/skills.component';
import { FormComponent } from './form/form.component';
import { ImprintComponent } from './imprint/imprint.component';
import { OnePagerComponent } from './one-pager/one-pager.component';
import { ContactContentComponent } from './contact-content/contact-content.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderSectionComponent,
    ProjectsComponent,
    PortfolioComponent,
    ContactComponent,
    AboutComponent,
    FooterComponent,
    SkillsComponent,
    FormComponent,
    ImprintComponent,
    OnePagerComponent,
    ContactContentComponent,
    DataProtectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPageScrollModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
