import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleComponent } from './simple/simple.component';
import { ComplexComponent } from './complex/complex.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { ProfileEditorBuilderComponent } from './profile-editor-builder/profile-editor-builder.component';


@NgModule({
  declarations: [
    AppComponent,
    SimpleComponent,
    ComplexComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    ProfileEditorBuilderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
