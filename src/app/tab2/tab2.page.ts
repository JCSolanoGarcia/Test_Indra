import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Articulo } from '../interfaces/articulo';
import { GeneralService } from '../services/general.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  id: string ='';
  articulo: Articulo;
  carrito= [];
  constructor(
    private route: ActivatedRoute,
    public service: GeneralService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.detallar();   
  }

  detallar(){
    this.service.filtrar(this.id).then(resp=>{      
      this.articulo = resp;      
    })
  }

  agregar(articulo: Articulo){    
    this.service.carrito(articulo).then(resp=>{
      this.router.navigateByUrl(`tabs/tab3`);      
    })
  }

  atras(){        
    this.router.navigateByUrl(`tabs/tab1`);  
  }

  verCarrito(){       
    this.router.navigateByUrl(`tabs/tab3`);  
  }

  volverListado(){
    this.router.navigateByUrl('/tabs/tab1');
  }

}
