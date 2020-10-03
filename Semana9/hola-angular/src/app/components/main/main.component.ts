import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title:string = "Mí App";

  postres:Array<string> = [
    'Queso Helado',
    'Picarones',
    'Arroz con Leche con su Galleta',
    'Mazamorra Morada',
    'Flancito',
    'Postre de Maizena',
    'Api con empanada'
  ]

  clickAlerta(){
    alert("Oshe me has hecho click");
  }
}
