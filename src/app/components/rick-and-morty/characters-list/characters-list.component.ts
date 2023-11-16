import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {ApiService, Character} from '../../../services/api.service';
import {map} from 'rxjs';
import {CharacterComponent} from "../character/character.component";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-characters-list',
  standalone: true,
  imports: [CharacterComponent],
  templateUrl: './characters-list.component.html',
  styleUrl: './characters-list.component.scss'
})
export class CharactersListComponent implements OnInit {
  private apiService = inject(ApiService);
  private destroyRef = inject(DestroyRef)

  public characters!: Character[];

  public ngOnInit() {
    this.apiService.getCharacters()
      .pipe(
        map(resp => this.characters = resp.results),
        takeUntilDestroyed(this.destroyRef)
      ).subscribe();
  }
}
