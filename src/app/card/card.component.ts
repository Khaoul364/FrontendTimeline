import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() {  }

  ngOnInit(): void {
  
  //   ngOnInit(): void {
  //     this.colTable = '12';
  //     this.getAllModules(this.params);
      
  //   }
  
  //   setPage(pageNo: number): void {
  //     this.params.page = pageNo; 
  //     this.getProduits(this.params);
  //   }
  
  //   setCat(id: number): void {
  //   console.log("id == ",id)  ;
  //   this.produits = this.produits.filter((item:any) => item.id == id);
  
  // }
  
  // afficherTous(): void {
  //   this.produits = this.backProduits;
  // }
  
  //   getProduits(params:any){
   
  //     this.ModulesService.getAllModules().subscribe(
  // (res) =>{
  //         this.ModuleName = res.data;
  //         this.totalItems = res.data.docs.length;
  //         this.totalExemples = res.data.total;
  //         this.currentPage = res.data.page;
  //         this.numPages = res.data.pages;
  //         this.numbers = Array(res.data.pages+1).fill(0).map((x,i)=>i).slice(1); 
  //         this.backProduits = this.produits = res.data.docs;
  //         console.log('res data ',res.data)
  //       }

  }

}
