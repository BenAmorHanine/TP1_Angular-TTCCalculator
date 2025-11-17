import { Component } from '@angular/core';

@Component({
  selector: 'app-ttc',
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
