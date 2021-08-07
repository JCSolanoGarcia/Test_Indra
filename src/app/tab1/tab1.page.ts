import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Articulo } from '../interfaces/articulo';
import { GeneralService } from '../services/general.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  articulos: Articulo;
  listaAriculos:[]=[];
  acumulado : number = 0;
  textoBuscar: string = '';
  constructor(
    public service: GeneralService,
    private router: Router,
  ) {}

  ngOnInit(){
    this.service.listar().then(resp=>{
      this.listaAriculos = resp;          
    }).catch(err=>{
      console.log('Error: ', err);      
    });    
  }

  async agregar(articulo: Articulo){    
    await this.router.navigateByUrl(`tabs/tab2/${articulo.ID}`);  
  }

  buscar(event){
    this.textoBuscar = event.detail.value;
  }

  verCarrito(){       
    this.router.navigateByUrl(`tabs/tab3`);  
  }

}
