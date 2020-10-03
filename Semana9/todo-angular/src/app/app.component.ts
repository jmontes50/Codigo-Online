import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  ceviche:Array<string> = [
    'Caballa'
  ]

  ingrediente:string = '';


  agregarIngrediente(){
    this.ceviche.push(this.ingrediente);
    this.ingrediente = '';
  }

  eliminarIngrediente(indice:number){
    this.ceviche.splice(indice,1)
  }
}
