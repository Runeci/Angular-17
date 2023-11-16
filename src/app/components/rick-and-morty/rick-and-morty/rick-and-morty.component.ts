import { Component } from '@angular/core';
import {CharactersListComponent} from "../characters-list/characters-list.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-rick-and-morty',
  standalone: true,
  imports: [CharactersListComponent, RouterOutlet],
  templateUrl: './rick-and-morty.component.html',
  styleUrl: './rick-and-morty.component.scss'
})
export class RickAndMortyComponent {

}
