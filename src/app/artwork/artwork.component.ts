import { Component, OnInit } from '@angular/core';
import RECIPES from '../../assets/data/museum/artworks.json';

@Component({
  selector: 'app-artwork',
  templateUrl: './artwork.component.html',
  styleUrls: ['./artwork.component.css']
})
export class ArtworkComponent implements OnInit {

  recipes = RECIPES;

  constructor() { }

  ngOnInit(): void {

  }

}
