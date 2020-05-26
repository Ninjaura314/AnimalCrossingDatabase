import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeInfoComponent } from './recipe-info/recipe-info.component';
import { ArtworkComponent } from './artwork/artwork.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeInfoComponent,
    ArtworkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
