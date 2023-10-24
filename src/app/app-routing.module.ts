import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComplexComponent } from './complex/complex.component';
import { SimpleComponent } from './simple/simple.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { ProfileEditorBuilderComponent } from './profile-editor-builder/profile-editor-builder.component';

const routes: Routes = [
  { path: "name", component: NameEditorComponent },
  { path: "profile", component: ProfileEditorComponent },
  { path: "profile-builder", component: ProfileEditorBuilderComponent },
  { path: "simple", component: SimpleComponent },
  { path: "complex", component: ComplexComponent },
  { path: "", redirectTo: "/profile", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
