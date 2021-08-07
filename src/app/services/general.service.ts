import { Injectable } from '@angular/core';
import { Articulo } from '../interfaces/articulo';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  articulo : Articulo;
  listaCompras:any= [];
  valorCompra: number= 0;
  lista:any = [
    {
      ID: 'a101a',
      Nombre: 'Papas fritas',
      Precio: 1500,
      Proveedor: 'Super ricas',
      img: 'assets/images/Papas-super-ricas.jpg',
    },
    {
      ID: 'a102b',
      Nombre: 'Arroz libra',
      Precio: 1800,
      Proveedor: 'Productos Diana',
      img: 'assets/images/ArrozDiana.jpg',
    },
    {
      ID: 'a11c',
      Nombre: 'Arroz libra',
      Precio: 1900,
      Proveedor: 'Arroz Roa',
      img: 'assets/images/ArrozRoa.png',
    },
    {
      ID: 'a01ab',
      Nombre: 'Lentejas libra',
      Precio: 1950,
      Proveedor: 'Productos Diana',
      img: 'assets/images/LentejasDiana.jpg',
    },
    {
      ID: 'b11a',
      Nombre: 'Atun en Aceite',
      Precio: 6500,
      Proveedor: 'Van Camps',
      img: 'assets/images/Atun.jpg',
    },
    {
      ID: 'c101bc',
      Nombre: 'Aceite 3L',
      Precio: 18000,
      Proveedor: 'Oliosoya',
      img: 'assets/images/aceite-oliosoya.jpg',
    },
  ]

  constructor( ) { 
    this.valor();
  }

  async listar(){
    return await this.lista;
  }

  async filtrar(id: string){
    for(this.articulo of this.lista){
      if(id== this.articulo.ID){
        return await this.articulo;
      }
    }
  }

  async carrito(articulo: Articulo){
    this.listaCompras.push(articulo);
    this.valor();
    return await this.listaCompras;
  }

valor(){
  this.valorCompra =0;
    for(let item of this.listaCompras){
      console.log(item);      
      this.valorCompra = this.valorCompra + item.Precio;
    }    
    return this.valorCompra;
  }

  async listaCarro(){  
    return await this.listaCompras;
  }

  async quitarProducto(articulo: Articulo){    
      for(var i = this.listaCompras.length; i--;) {
          if(this.listaCompras[i] === articulo) {
            this.listaCompras.splice(i, 1);
          }
      }
      this.valor();
      return await this.listaCompras;
  }

}
