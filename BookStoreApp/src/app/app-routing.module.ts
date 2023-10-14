import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/component/login/login.component';
import { SignupComponent } from './auth/component/signup/signup.component';
import { NotFoundComponent } from './shared/component/not-found/not-found.component';

//Before removal auth module
// const routes: Routes = [
//   { path: 'about-us', component: AboutUsComponent },
//   { path: 'how-it-works', component: HowItWorksComponent },
//   {
//     path: 'auth',
//     component: AuthComponent,
//     children: [
//       { path: 'login', component: LoginComponent },
//       { path: 'signup', component: SignupComponent },
//     ],
//   },
// ];

//after removal auth module because i created separate auth-routing module for auth routes
// const routes: Routes = [
//   { path: '', redirectTo: 'about-us', pathMatch:'full' },
//   { path: 'about-us', component: AboutUsComponent },
//   { path: 'how-it-works', component: HowItWorksComponent },
//   { path: '**', component: NotFoundComponent },
// ];

//Before  Lazy Loading
// const routes: Routes = [
//   { path: '', redirectTo: 'about-us', pathMatch:'full' },
//   { path: 'about-us', component: AboutUsComponent },
//   { path: 'how-it-works', component: HowItWorksComponent },
//   { path: '**', component: NotFoundComponent },
// ];

//After Lazy Loading
const routes: Routes = [
  { path: '', redirectTo: 'about-us', pathMatch:'full' },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'how-it-works', component: HowItWorksComponent },
  {path: 'auth', component: AuthComponent, loadChildren: ()=>import('./auth/auth.module').then(x=>x.AuthModule)},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
