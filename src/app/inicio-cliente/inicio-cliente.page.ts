import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-inicio-cliente',
  templateUrl: './inicio-cliente.page.html',
  styleUrls: ['./inicio-cliente.page.scss'],
})
export class InicioClientePage implements OnInit {

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
    public alert: AlertController) { }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.Cargar_Categorias();
    this.Cargar_Productos();
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
        this.totalP = data.info.total;
        l.dismiss();
      }, (error: any) => {
        l.dismiss();
      });
  }

}
