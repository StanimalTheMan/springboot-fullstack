import {Component, Input} from '@angular/core';
import {MenuItem} from "primeng/api";
import {CustomerDTO} from "../../models/customer-dto";

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent {

  @Input()
  customer: CustomerDTO = {};
  items: Array<MenuItem> = [
    {
      label: 'Profile',
      icon: 'pi pi-user'
    },
    {
      label: 'Settings',
      icon: 'pi pi-cog'
    },
    {
      separator: true
    },
    {
      label: 'Sign out',
      icon: 'pi pi-sign-out'
    },
  ];

  get username(): string {
    return '--'
  }

  get userRole(): string {
    return '--'
  }

}
