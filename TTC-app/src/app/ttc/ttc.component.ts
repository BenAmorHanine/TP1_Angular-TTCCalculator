import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { TtcCalculator } from '../models/ttc-calculator';

@Component({
  selector: 'app-ttc',
  standalone: true,
  imports: [FormsModule, DecimalPipe, CommonModule],
  templateUrl: './ttc.component.html',
  styleUrls: ['./ttc.component.css']
})
export class TtcComponent {
  calculator = new TtcCalculator();
}











//Angular components marked as standalone do not need to be declared in an NgModule.
// Such components directly manage their own template dependencies
// (components, directives, and pipes used in a template) via the imports property.


/***
@Component({
  selector: 'app-ttc',
  standalone: true,
  imports: [FormsModule, DecimalPipe],
  templateUrl: './ttc.component.html',
  styleUrls: ['./ttc.component.css']
})
export class TtcComponent {
  price: number = 0;      // default price
  quantity: number = 1;   // default quantity
  tva: number = 18;       // default TVA %

  calculateTTC(): number {
    let discount = 0;

    if (this.quantity >= 10 && this.quantity <= 15) discount = 0.2;
    else if (this.quantity > 15) discount = 0.3;

    const totalHT = this.price * this.quantity * (1 - discount);
    return totalHT * (1 + this.tva / 100);
  }
}
*/
