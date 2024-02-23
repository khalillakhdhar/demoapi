import { Component } from '@angular/core';
import { Produit } from '../shared/classes/produit';
import { ProduitService } from '../shared/services/produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.css'
})
export class ProduitComponent {
  produit = new Produit();
  produits :any;
  constructor(private produitService: ProduitService) {
    this.produitService.getProduits().subscribe(response => {
      this.produits = response ;
      console.log("", this.produits);
    });
  }
  addProduit()
  {
    let prod= Object.assign({},this.produit);
    this.produitService.addProduit(prod).subscribe(response => {
      this.produits.push(response);
      this.produit = new Produit();
    });
   


  }
  delete(p:any)
  {
    if(confirm("Voulez-vous supprimer le produit? "+p.titre))
    {
      this.produitService.deleteProduit(p.id).subscribe(response => {
        let index = this.produits.indexOf(p);
        this.produits.splice(index,1);
      });
    }
    
  }
}
