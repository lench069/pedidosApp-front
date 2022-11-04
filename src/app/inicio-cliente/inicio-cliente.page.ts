import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { ServiciosService } from '../servicios.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-inicio-cliente',
  templateUrl: './inicio-cliente.page.html',
  styleUrls: ['./inicio-cliente.page.scss'],
})
export class InicioClientePage implements OnInit {

  public cantidad: number = 0; 
  public pedido: any = [];
  public pedidolocal: any = [];

  options = {
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: -60,
  };

  categories = {
    slidesPerView: 2.5,
  };

  public categorias: any[] = [];
  public total: number = 0;
  public productos: any[] = [];
  public totalP: number = 0;

  constructor(public servicio: ServiciosService,
    public loading: LoadingController,
    public alert: AlertController,
    private storage: Storage) { 
      this.storage.create();
    }

  ngOnInit() {

  }

  async ionViewWillEnter() {
    this.Cargar_Categorias();
    this.Cargar_Productos();
    let pedido = await this.storage.get('pedido');
    this.pedidolocal = pedido != null ? pedido : [];
  }

  async Cargar_Categorias() {
    let l = await this.loading.create();
    l.present();
    this.servicio.Categorias_Listado()
      .subscribe((data: any) => {
        this.categorias = data.info.items;
        console.log(this.categorias);
        this.total = data.info.total;
        l.dismiss();
      }, (error: any) => {
        l.dismiss();
      });
  }

  async Cargar_Productos() {
    let l = await this.loading.create();
    l.present();
    this.servicio.Producto_Listado()
      .subscribe((data: any) => {
        this.productos = data.info.items;
        this.productos.forEach(producto => {
          producto.cantidad = 0;
        });
        console.log(this.productos);
        this.totalP = data.info.total;
        l.dismiss();
      }, (error: any) => {
        l.dismiss();
      });
  }

  add(producto, i){
    if(producto.cantidad < 10){   
      producto.cantidad++;
      this.productos[i]= producto;
      console.log(this.productos[i]);
    }
    
  }
  remove(producto, i){
    if(producto.cantidad > 0){
      producto.cantidad--;
      this.productos[i]= producto;
    }
    
  }
  addProducto(producto, i){
    if(producto.cantidad != 0){
      this.pedidolocal.push(producto);
      this.storage.set('pedido', this.pedidolocal).then((data:any)=>{
        producto.cantidad = 0;
      });
      this.servicio.Mensaje('Producto agregado correctamente', 'success');     
    }else{
      this.servicio.Mensaje('Debe seleccionar una cantidad', 'warning');
    }
    
  }

}
