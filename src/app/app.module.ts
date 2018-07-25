
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Firebase Import
import { AngularFireModule } from 'angularfire2'
import { environment } from './../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

// Service
import { AuthService } from './services/auth.service';

// Material and Routing Import
import { MaterialModule } from './material.modules';
import { AppRoutingModule } from './app-routing.module';

// Component Import
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';

import { StatutoryDetailsComponent } from './employee/statutory-details/statutory-details.component';
import { OffcialDetailsComponent } from './employee/offcial-details/offcial-details.component';
import { EducationalDetailsComponent } from './employee/educational-details/educational-details.component';
import { ExperienceDetailsComponent } from './employee/experience-details/experience-details.component';
import { MedicalPoliciesComponent } from './employee/medical-policies/medical-policies.component';
import { MedicalHistoryComponent } from './employee/medical-history/medical-history.component';
import { PersonalDetailsComponent } from './employee/personal-details/personal-details.component';
import { SettingsComponent } from './settings/settings.component';
import { MastersComponent } from './masters/masters.component';
import { MasterSettingComponent } from './masters/master-setting/master-setting.component';
import { EmployeeSettingComponent } from './settings/employee-setting/employee-setting.component';

@NgModule({
  declarations: [
    AppComponent,    
    PageNotFoundComponent,
    DashboardComponent,
    EmployeeComponent,
    LoginComponent,
    MenuBarComponent,
    PersonalDetailsComponent,
    StatutoryDetailsComponent,
    OffcialDetailsComponent,
    EducationalDetailsComponent,
    ExperienceDetailsComponent,
    MedicalPoliciesComponent,
    MedicalHistoryComponent,
    SettingsComponent,
    MastersComponent,
    MasterSettingComponent,
    EmployeeSettingComponent,
  
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,  
    AppRoutingModule,
    MaterialModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
