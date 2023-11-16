import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {ApiService, Character} from "../../../services/api.service";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {map, switchMap} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {NgOptimizedImage} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-character-detail',
  standalone: true,
  templateUrl: './character-detail.component.html',
  imports: [
    NgOptimizedImage,
    MatButtonModule,
    RouterLink
  ],
  styleUrl: './character-detail.component.scss'
})
export class CharacterDetailComponent implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  public apiService = inject(ApiService);
  public destroyRef = inject(DestroyRef);
  public character!: Character;

  public ngOnInit() {
    this.activatedRoute.params.pipe(
      map(res => res['id']),
      switchMap(id => this.apiService.getCharacter(id)),
      takeUntilDestroyed(this.destroyRef)
    )
      .subscribe(res => this.character = res)
  }
}
