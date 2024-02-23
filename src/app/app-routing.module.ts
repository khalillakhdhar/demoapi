import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitComponent } from './produit/produit.component';
import { ProduitDetailsComponent } from './produit-details/produit-details.component';

const routes: Routes = [
  {
    path:'',redirectTo:'/produits',pathMatch:'full',
  
  },
  {
    path:'produits',component:ProduitComponent
  },
  // produit by id
  {
    path:'produits/:id',component:ProduitDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
