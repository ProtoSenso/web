import { Component } from '@angular/core';

@Component({
  template: `
  <ion-header>
    <ion-navbar>
      <ion-title>Sensors</ion-title>
    </ion-navbar>
  </ion-header>
  <ion-content>
     <ion-item >
        <ion-label class="colorBlack">Name</ion-label>
        <ion-input disabled  type="text" value="Tempature sensor"></ion-input>
    </ion-item>
    <ion-item>  
        <ion-label>Enabled</ion-label>
        <ion-toggle checked="true"></ion-toggle>
    </ion-item>
    
    <br />

    <ion-item>
        <ion-label class="colorBlack">Name</ion-label>
        <ion-input disabled type="text" value="Motion sensor"></ion-input>
    </ion-item>    
    <ion-item>
        <ion-label>Enabled</ion-label>
        <ion-toggle checked="true"></ion-toggle>
    </ion-item>
</ion-content>`,
styles: ['.colorBlack { color: black !important}',
'.text-input::-moz-placeholder { color: black; }',
'.text-input:-ms-input-placeholder { color: black; }',
'.text-input::-webkit-input-placeholder { text-indent: 0; color: black; }']
})
export class SensorsTab {}
