import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipesPageRoutingModule } from './recipes-routing.module';

import { RecipesPage } from './recipes.page';
import { HttpClientModule } from "@angular/common/http";
import { RecipesService } from './recipes.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    IonicModule,
    RecipesPageRoutingModule
  ],
  providers: [RecipesService],
  declarations: [RecipesPage]
})
export class RecipesPageModule {}
