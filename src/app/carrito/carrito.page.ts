import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {
  public pedidos : any;

  constructor(public servicio: ServiciosService,
    public loading: LoadingController,
    public alert: AlertController,
    private storage: Storage) { 
      
    }

  ngOnInit() {
    

  }
  async ionViewWillEnter() //se ejecuta a penas se abra la vista
  {
    this.storage.create();
    let pedidos = await this.storage.get('pedidos');
    this.pedidos = pedidos;
    console.log(pedidos);
  }

  add(pedido, i){
    if(pedido.cantidad < 10){   
      pedido.cantidad++;
      this.pedidos[i] = pedido;
      this.storage.set('pedidos', this.pedidos);
    }
    
  }
  remove(pedido, i){
    if(pedido.cantidad > 1){
      pedido.cantidad--;
      this.pedidos[i] = pedido;
      this.storage.set('pedidos', this.pedidos);
    }
    
  }

  deleteItem(pedido,i){
    this.pedidos.splice(i-1, 1);
    this.storage.set('pedidos', this.pedidos);
  }

}
