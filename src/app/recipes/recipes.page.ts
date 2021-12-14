import { Component, OnInit } from '@angular/core';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

    reci: any=[];

  constructor(private RecipesService :RecipesService) { }

 
  ngOnInit() {

   return this.RecipesService.getRecipes().subscribe(data=>this.reci=data);
   console.log(this.reci);
    
    }
    


  }

