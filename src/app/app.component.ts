import {Component} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {CharactersListComponent} from "./components/rick-and-morty/characters-list/characters-list.component";
import {HttpClientModule} from "@angular/common/http";
import {HeaderComponent} from "./components/header/header.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterOutlet} from "@angular/router";

@Component({
  standalone: true,
  imports: [
    CharactersListComponent,
    HeaderComponent,
    RouterOutlet
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-17';
}
