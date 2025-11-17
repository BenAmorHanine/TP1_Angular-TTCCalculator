import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TtcComponent } from "./ttc/ttc.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TtcComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TTC-app';
}
