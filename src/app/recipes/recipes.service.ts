import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Recipe } from './recipe.module';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

apuUrl= "https://jsonplaceholder.typicode.com/users";

  constructor(private http:HttpClient) { }

  

    getRecipes(): Observable<any> {
      return this.http.get<any>(this.apuUrl)

  }

}

  
  

  

