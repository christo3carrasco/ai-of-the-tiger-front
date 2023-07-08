import { Component } from '@angular/core';

export interface User {
  user: string;
  data: string;
}

const PROFILE_DATA: User[] = [
  { user: 'IC', data: '70336923' },
  { user: 'Firstname', data: 'Robert Alexander' },
  { user: 'Lastname', data: 'Balboa Cabrera' },
  { user: 'Phone', data: '949988817' },
  { user: 'Birth', data: '05/07/1986' },
  { user: 'Gender', data: 'Male' },
  { user: 'Email', data: 'rocky@tiger.com' },
  { user: 'Expiration', data: '14 days left' },
];

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent {
  displayedColumns: string[] = ['user', 'data'];
  dataSource = PROFILE_DATA;
}
