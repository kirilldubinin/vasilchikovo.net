import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes, Router, NavigationEnd } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

/* APP */
import { HeaderComponent } from './components/header/header.component';
import { StartComponent } from './components/start/start.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { WareHouseComponent } from './components/warehouse/warehouse.component';
import { RecipeComponent } from './components/recipe/recipe.component';

import {AppRoutes} from './routing/routing';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StartComponent,
    TasksComponent,
    WareHouseComponent,
    RecipeComponent
  ],
  imports: [
    RouterModule.forRoot(AppRoutes),
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
