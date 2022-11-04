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
  public pedido : any;

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
    let pedido = await this.storage.get('pedido');
    this.pedido = pedido;
    console.log(pedido);
  }

}
