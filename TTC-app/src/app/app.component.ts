import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TtcComponent } from "./ttc/ttc.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TtcComponent],
  templateUrl: './app.component.html', // in this case we change the content of app.component.html to directly use ttc component: <app-ttc></app-ttc>
  //or insted of templateUrl use: // in this case we dont care abt the content of app.component.html
  //template: `<app-ttc></app-ttc>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TTC-app';
}
