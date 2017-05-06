import { Component } from '@angular/core';

@Component({
  template: `
  <ion-header>
    <ion-navbar>
      <ion-title>Users</ion-title>
    </ion-navbar>
  </ion-header>
  <ion-content>
    <ion-item>
        <ion-label class="colorBlack">Name</ion-label>
        <ion-input disabled type="text" value="Bert"></ion-input>
    </ion-item>
    
    <ion-item>
        <ion-label class="colorBlack">Age</ion-label>
        <ion-input disabled type="text" value="21"></ion-input>
    </ion-item>
    
    <ion-item>
        <ion-label class="colorBlack">Location</ion-label>
        <ion-input disabled type="text" value="Amsterdam, Nederland"></ion-input>
    </ion-item>   

    <br />
    
    <ion-list>
    <ion-list-header>Watchers</ion-list-header>
      <ion-item>
          <ion-toggle checked="true"></ion-toggle>
            <ion-label>
              Bart Vink
            </ion-label>
          <ion-icon name='body' item-left></ion-icon>
      </ion-item>
      <ion-item>
          <ion-toggle checked="false"></ion-toggle>
            <ion-label>
              Timothy
            </ion-label>
          <ion-icon name='body' item-left></ion-icon>
      </ion-item>
    </ion-list>


    


    
  </ion-content>`
})
export class UsersTab {}