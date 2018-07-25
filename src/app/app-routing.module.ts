
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { McBreadcrumbsModule } from 'ngx-breadcrumbs';
import { PersonalDetailsComponent } from './employee/personal-details/personal-details.component';
import { StatutoryDetailsComponent } from './employee/statutory-details/statutory-details.component';
import { OffcialDetailsComponent } from './employee/offcial-details/offcial-details.component';
import { EducationalDetailsComponent } from './employee/educational-details/educational-details.component';
import { ExperienceDetailsComponent } from './employee/experience-details/experience-details.component';
import { MedicalPoliciesComponent } from './employee/medical-policies/medical-policies.component';
import { MedicalHistoryComponent } from './employee/medical-history/medical-history.component';
import { MastersComponent } from './masters/masters.component';
import { SettingsComponent } from './settings/settings.component';
import { MasterSettingComponent } from './masters/master-setting/master-setting.component';
import { EmployeeSettingComponent } from './settings/employee-setting/employee-setting.component';



const routes: Routes = [
  { path: '', redirectTo: '/Dashboard', pathMatch: 'full' },
  { path: 'Dashboard', component: DashboardComponent, data: { breadcrumbs: 'Dashboard'}},
  { path: 'Employee', data:{breadcrumbs:'Employee'},
children:[ 
  {  path:'', component: PersonalDetailsComponent, data:{breadcrumbs:'Personal Details'}},
  {  path:'PersonalDetails', component: PersonalDetailsComponent, data:{breadcrumbs:'Personal Details'}},
  {  path:'StatutoryDetails', component: StatutoryDetailsComponent, data:{breadcrumbs:'Statutory Details'}},
  {  path:'OffcialDetails', component: OffcialDetailsComponent, data:{breadcrumbs:'Offcial Details'}},
  {  path:'EducationalDetails', component: EducationalDetailsComponent, data:{breadcrumbs:'Educational Details'}},
  {  path:'ExperienceDetails', component: ExperienceDetailsComponent, data:{breadcrumbs:'Experience Details'}},
  {  path:'MedicalPolicies', component: MedicalPoliciesComponent, data:{breadcrumbs:'Medical Policies'}},
  {  path:'MedicalHistory', component: MedicalHistoryComponent, data:{breadcrumbs:'Medical History'}}
]},
  { path: 'Masters',data: { breadcrumbs: 'Masters' },
children:[
//  {path:'', component:MasterSettingComponent, data:{breadcrumbs:'Master Settings'}},
{ path: '', redirectTo: 'MasterSettings', pathMatch: 'full' },
  {path:'MasterSettings', component:MasterSettingComponent, data:{breadcrumbs:'Master Settings'}}
] },
  { path: 'Settings',data: { breadcrumbs: 'Settings' },
children:[
 // {path:'', component:EmployeeSettingComponent, data:{breadcrumbs:'Employee Settings'}},
 { path: '', redirectTo: 'EmployeeSettings', pathMatch: 'full' },
  {path:'EmployeeSettings', component:EmployeeSettingComponent, data:{breadcrumbs:'Employee Settings'}}
] },
  { path: '**', component: PageNotFoundComponent,data: { breadcrumbs: 'Page Not Found' } }

];

@NgModule({
  imports: [RouterModule.forRoot(routes),McBreadcrumbsModule.forRoot()],
  exports: [RouterModule, McBreadcrumbsModule]
})
export class AppRoutingModule { }
export const routingComponents = [DashboardComponent, PageNotFoundComponent]

