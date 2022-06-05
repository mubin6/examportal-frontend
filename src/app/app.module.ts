import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

/////////////////// Angular Material Module /////////////////////

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';


/////////////////////////////////////////////////////////////////

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { authInterceptorProviders } from './services/auth.interceptor';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { SidenavComponent } from './pages/admin/sidenav/sidenav.component';
import { ProfileComponent } from './pages/admin/profile/profile.component';
import { HomeComponent } from './pages/admin/home/home.component';
import { CategoriesComponent } from './pages/admin/categories/categories.component';
import { QuizzesComponent } from './pages/admin/quizzes/quizzes.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { AddQuizComponent } from './components/add-quiz/add-quiz.component';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { AddEmojiComponent } from './components/add-emoji/add-emoji.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HeaderComponent,
    FooterComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    SidenavComponent,
    ProfileComponent,
    HomeComponent,
    CategoriesComponent,
    QuizzesComponent,
    AddCategoryComponent,
    AddQuizComponent,
    AddEmojiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDividerModule,
    MatCardModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatSelectModule,
    PickerModule,
    MatMenuModule

  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
