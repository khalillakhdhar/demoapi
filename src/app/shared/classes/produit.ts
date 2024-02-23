export class Produit {
    id!: number;
    titre!: string;
    prix!: number;
    description!: string;
    quantite!: number;
    public calculerTotal(): number {
        return this.prix * this.quantite;
    }
    public detectionStock(): string {
        if (this.quantite > 0) {
            return "En stock";
        }
        else if(this.quantite < 2) {
            return "Dernier article en stock";
        } else {
            return "Rupture de stock";
        }
    }
    public calculeTva(): number {
        return this.prix * 0.12;
    }
}
