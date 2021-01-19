import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login-page',
    pathMatch: 'full'
  },
  {
    path: 'login-page',
    loadChildren: () => import('./login-page/login-page.module').then( m => m.LoginPagePageModule)
  },
  {
    path: 'sign-up-page',
    loadChildren: () => import('./sign-up-page/sign-up-page.module').then( m => m.SignUpPagePageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'payment-page',
    loadChildren: () => import('./payment-page/payment-page.module').then( m => m.PaymentPagePageModule)
  },
  {
    path: 'add-card-page',
    loadChildren: () => import('./add-card-page/add-card-page.module').then( m => m.AddCardPagePageModule)
  },
  {
    path: 'payment-success-page',
    loadChildren: () => import('./payment-success-page/payment-success-page.module').then( m => m.PaymentSuccessPagePageModule)
  },
  {
    path: 'course-page',
    loadChildren: () => import('./course-page/course-page.module').then( m => m.CoursePagePageModule)
  },
  {
    path: 'course-details',
    loadChildren: () => import('./course-details/course-details.module').then( m => m.CourseDetailsPageModule)
  },
  {
    path: 'lesson-page',
    loadChildren: () => import('./lesson-page/lesson-page.module').then( m => m.LessonPagePageModule)
  },
  {
    path: 'assignment-page',
    loadChildren: () => import('./assignment-page/assignment-page.module').then( m => m.AssignmentPagePageModule)
  },
  {
    path: 'submit-page',
    loadChildren: () => import('./submit-page/submit-page.module').then( m => m.SubmitPagePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
