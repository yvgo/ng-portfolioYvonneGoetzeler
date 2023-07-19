import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { OnePagerComponent } from './one-pager/one-pager.component';


const routes: Routes = [
  { path: '', component: OnePagerComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'dataProtection', component: DataProtectionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
