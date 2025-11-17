import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-ttc',
  standalone: true,
  imports: [FormsModule, DecimalPipe, CommonModule],
  templateUrl: './ttc.component.html',
  styleUrls: ['./ttc.component.css']
})
export class TtcComponent {
  prixHT: number = 0;
  quantite: number = 1;
  tva: number = 18;

  get remisePourcentage(): number {
    if (this.quantite >= 10 && this.quantite <= 15) return 0.2;
    if (this.quantite > 15) return 0.3;
    return 0;
  }

   get prixUnitaireTTC(): number {
    return this.prixHT + (this.prixHT * this.tva / 100);
  }



  get remiseMontant(): number {
    return this.prixUnitaireTTC * this.quantite * this.remisePourcentage;
  }

  // Prix total TTC après remise
  get prixTotalTTC(): number {
    return (this.prixUnitaireTTC * this.quantite) - this.remiseMontant;
  }

  // Prix unitaire TTC après remise
  //not needed not used
  get prixUnitaireTTC_apresRemise(): number {
    return this.prixUnitaireTTC * (1 - this.remisePourcentage);
  }
}














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
