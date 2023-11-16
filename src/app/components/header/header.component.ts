import {Component} from '@angular/core';
import {CommonModule, KeyValue} from '@angular/common';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";

export enum HeaderLinks {
  Signals = 'signals',
  RickAndMorty = 'rick-and-morty'
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, MatToolbarModule, MatButtonModule, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public links: KeyValue<string, string>[] = [
    {
      key: '/' + HeaderLinks.Signals,
      value: 'Signals'
    },
    {
      key: '/' + HeaderLinks.RickAndMorty,
      value: 'Rick & Morty'
    }
  ]
}
