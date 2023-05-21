import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComplexComponent } from './complex/complex.component';
import { SimpleComponent } from './simple/simple.component';

const routes: Routes = [
  { path: "simple", component: SimpleComponent },
  { path: "complex", component: ComplexComponent },
  { path: "", redirectTo: "/simple", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
