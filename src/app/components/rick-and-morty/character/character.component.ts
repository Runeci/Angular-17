import {booleanAttribute, Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {Character} from '../../../services/api.service';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink, RouterLinkActive],
  templateUrl: './character.component.html',
  styleUrl: './character.component.scss'
})
export class CharacterComponent {
  @Input({required: true}) public character!: Character
  @Input({transform: booleanAttribute}) public isVisible = true;
}
