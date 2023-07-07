import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DietModComponent } from '../diet-mod/diet-mod.component';

@Component({
  selector: 'app-diet-main',
  templateUrl: './diet-main.component.html',
  styleUrls: ['./diet-main.component.css'],
})
export class DietMainComponent {
  type: string = 'mediterranean';
  meals: string = '3';
  calories: string = '2000 cal';
  constructor(private dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DietModComponent, {
      data: {
        type: this.type,
        meals: this.meals,
        calories: this.calories,
      },
      width: '600px',
    });
  }
}
