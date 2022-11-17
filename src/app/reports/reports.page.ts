import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
})
export class ReportsPage implements OnInit {

  public pedidos: any[] = [];
  public segment: String= 'default';

  constructor(public servicio: ServiciosService,
    private storage: Storage,
    public loading: LoadingController) { }

  ngOnInit() {
    this.Pedido_Listado_report();
  }

  async Pedido_Listado_report() {
    let l = await this.loading.create();
    l.present();
    this.servicio.Pedido_Listado()
      .subscribe((data: any) => {
        this.pedidos = data.info.items;
        l.dismiss();
      }, (error: any) => {
        l.dismiss();
      });
  }
 /* selectDefault(){
    this.Pedido_Listado_report();
  }*/

}
