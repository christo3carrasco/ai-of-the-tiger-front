import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-diet-mod',
  templateUrl: './diet-mod.component.html',
  styleUrls: ['./diet-mod.component.css'],
})
export class DietModComponent implements OnInit {
  showSpinner: boolean = true;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.showSpinner = false;
    }, 1500);
  }
}
