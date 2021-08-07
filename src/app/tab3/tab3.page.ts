import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articulo } from '../interfaces/articulo';
import { GeneralService } from '../services/general.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  listaAriculos: any = [];
  acumulado: number = 0;
  itemCarro: any = [];
  constructor(
    public service: GeneralService,
    private router: Router,
  ) { }

  ngOnInit(){
    this.listar();    
  } 

  async listar(){
    await this.service.listaCarro().then(resp=>{
      this.listaAriculos = [];
      this.acumulado = 0;
      this.listaAriculos = resp;      
    }).catch(err=>{
      console.log('Error: ', err);      
    });    
  } 

  quitar(articulo: Articulo){
    this.acumulado = 0;
    this.service.quitarProducto(articulo).then(resp=>{
      console.log(resp);
      for(let item of resp){
        this.acumulado += item.Precio
      }      
    }).catch(err=>{
      console.log('Error: ', err);      
    });    
  }

  volverListado(){
    this.router.navigateByUrl('/tabs/tab1');
  }

}
