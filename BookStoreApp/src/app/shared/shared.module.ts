import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [RouterModule],
})
export class SharedModule { }
