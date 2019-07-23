import { Component, Input } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html'
})
export class InactiveUsersComponent {
  @Input() users: string[];

  constructor(private usersService: UsersService) {}
  
  onSetToActive(id: number) {
    this.usersService.activeUser(id);    
  }
}
