import { Component } from '@angular/core';
import { UsersTab } from './tabs/usersTab/usersTab';
import { SensorsTab } from './tabs/sensorsTab';

@Component({
  selector: 'UserSettingsPage',
  templateUrl: 'userSettings.html'
})
export class UserSettingsPage {
  tab1: any;
  tab2: any;

  constructor() {
    this.tab1 = UsersTab;
    this.tab2 = SensorsTab;
  }
}



