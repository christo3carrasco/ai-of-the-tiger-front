import { Component } from '@angular/core';

export interface User {
  user: string;
  data: string;
}

const PROFILE_DATA: User[] = [
  { user: 'IC', data: '70336923' },
  { user: 'Firstname', data: 'Angie Alexandra' },
  { user: 'Lastname', data: 'Cabanillas Beltran' },
  { user: 'Phone', data: '949988810' },
  { user: 'Birth', data: '05/07/2000' },
  { user: 'Gender', data: 'Female' },
  { user: 'Email', data: 'angieacb@gmail.com' },
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
