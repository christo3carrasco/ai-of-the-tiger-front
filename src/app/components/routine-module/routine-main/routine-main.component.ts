import { Component } from '@angular/core';
import { RoutineModComponent } from '../routine-mod/routine-mod.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-routine-main',
  templateUrl: './routine-main.component.html',
  styleUrls: ['./routine-main.component.css'],
})
export class RoutineMainComponent {
  muscle: string = 'legs';
  intensity: string = 'medium';
  constructor(private dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(RoutineModComponent, {
      data: {
        muscle: this.muscle,
        intensity: this.intensity,
      },
      width: '600px',
    });
  }
}
