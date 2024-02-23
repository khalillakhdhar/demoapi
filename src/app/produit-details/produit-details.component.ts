import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from '../shared/classes/produit';
import { ProduitService } from '../shared/services/produit.service';

@Component({
  selector: 'app-produit-details',
  templateUrl: './produit-details.component.html',
  styleUrl: './produit-details.component.css'
})
export class ProduitDetailsComponent {
// récupération de l'id du produit
  id:number=0;
  produit = new Produit();

  constructor(private route:ActivatedRoute,private produitService: ProduitService,private router:Router) {
    this.id =parseInt(this.route.snapshot.params['id']);
    // subscription au service pour récupérer le produit par id
    this.produitService.getProduitById(this.id).subscribe(response => {
      this.produit = response ;
      console.log("le produit", this.produit);
    });
    
  }
  // modification d'un produit
  updateProduit()
  {
    let prod= Object.assign({},this.produit); // clonage de l'objet en utilisant la methode assign json
    this.produitService.updateProduit(prod).subscribe(response => {
      this.produit = response;
      // redirection vers la liste des produits
      this.router.navigate(['/produits']);

    });
  }
}
