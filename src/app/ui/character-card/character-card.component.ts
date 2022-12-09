import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character } from 'src/app/interfaces/character';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'mhd-character-card',
  standalone: true,
  imports: [CommonModule, MatChipsModule, MatIconModule],
  template: `
  <ng-container *ngIf="character">
    <div>{{character.name}}</div>
    <mat-chip-list *ngIf="character.race !== 'NaN'" aria-label="Race">
      <mat-chip color="primary" selected>
        {{character.race}}
      </mat-chip>
    </mat-chip-list>
  </ng-container>
  `,
  styles: [`
    :host {
      background-color: rgb(255, 255, 255);
      display: flex;
      flex-direction: column;
    }
    div {
      margin-bottom: 0.5rem
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterCardComponent {

  @Input() character!: Character;

}
