export class TtcCalculator {
  constructor(
    public prixHT: number = 0,
    public quantite: number = 1,
    public tva: number = 18
  ) {}

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

  get prixTotalTTC(): number {
    return (this.prixUnitaireTTC * this.quantite) - this.remiseMontant;
  }
}
