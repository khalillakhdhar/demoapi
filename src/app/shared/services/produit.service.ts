import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from '../classes/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
   url="https://629ef3cd461f8173e4dc8dcd.mockapi.io/api/produit";
// injection de httpClient

  constructor(private http:HttpClient) { }
  // recuperation des produits
  getProduits():Observable<Produit>
  {
    return this.http.get<Produit>(this.url);
  }
  // ajout d'un produit
  addProduit(produit:Produit):Observable<Produit>
  {
    return this.http.post<Produit>(this.url,produit);
  }
  // suppression d'un produit
  deleteProduit(id:number):Observable<Produit>
  {
    return this.http.delete<Produit>(this.url+"/"+id);
  }
  // recuperation d'un produit par id
  getProduitById(id:number):Observable<Produit>
  {
    return this.http.get<Produit>(this.url+"/"+id);
  }
  // modification d'un produit
  updateProduit(produit:Produit):Observable<Produit>
  {
    return this.http.put<Produit>(this.url+"/"+produit.id,produit);
  }
}
