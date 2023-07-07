import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-routine-mod',
  templateUrl: './routine-mod.component.html',
  styleUrls: ['./routine-mod.component.css'],
})
export class RoutineModComponent implements OnInit {
  showSpinner: boolean = true;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.showSpinner = false;
    }, 1500);
  }
}
