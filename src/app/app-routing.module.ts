import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from './guards/admin.guard';
import { NormalGuard } from './guards/normal.guard';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { CategoriesComponent } from './pages/admin/categories/categories.component';
import { HomeComponent } from './pages/admin/home/home.component';
import { ProfileComponent } from './pages/admin/profile/profile.component';
import { QuizzesComponent } from './pages/admin/quizzes/quizzes.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';


const routes: Routes = [
  { path:'', component: LoginComponent },
  { path:'signup', component: RegistrationComponent },
  { path:'dashboard', component: UserDashboardComponent, canActivate: [NormalGuard] },
  { path:'admin-dashboard', component: AdminDashboardComponent, canActivate: [AdminGuard],
    children: [
      { path:'', component: HomeComponent, canActivate: [AdminGuard] },
      { path:'admin-profile', component: ProfileComponent, canActivate: [AdminGuard] },
      { path:'admin-category', component: CategoriesComponent, canActivate: [AdminGuard] },
      { path:'admin-quiz', component: QuizzesComponent, canActivate: [AdminGuard] },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
