import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {PreloadAllModules, provideRouter, Routes, withPreloading, withViewTransitions} from "@angular/router";
import {HeaderLinks} from "./app/components/header/header.component";
import {provideHttpClient} from "@angular/common/http";
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import {CharacterDetailComponent} from "./app/components/rick-and-morty/character-detail/character-detail.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: HeaderLinks.RickAndMorty,
    pathMatch: "full"
  },
  {
    path: HeaderLinks.Signals,
    loadComponent: () => import('./app/components/signals/signals.component').then(c => c.SignalsComponent)
  },
  {
    path: HeaderLinks.RickAndMorty,
    loadComponent: () => import('./app/components/rick-and-morty/rick-and-morty/rick-and-morty.component').then(c => c.RickAndMortyComponent),
    children: [
      {
        path: ':id',
        loadComponent: () => import('./app/components/rick-and-morty/character-detail/character-detail.component').then(c => c.CharacterDetailComponent)
      }
    ]
  },
];


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(
      routes, withViewTransitions(), withPreloading(PreloadAllModules),),
    provideHttpClient(),
    provideAnimationsAsync()
  ]
});
