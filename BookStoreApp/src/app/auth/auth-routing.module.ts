import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';

//Before Lazy Loading
// const routes: Routes = [

//   {
//     path: 'auth',
//     component: AuthComponent,
//     children: [
//       { path: 'login', component: LoginComponent },
//       { path: 'signup', component: SignupComponent },
//     ],
//   },
// ];

//After Lazy Loadingg
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
