import { Component, OnInit } from '@angular/core';
import { Device } from '@awesome-cordova-plugins/device/ngx';
import { LoadingController } from '@ionic/angular';
import { ServiciosService } from '../servicios.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {

  constructor(public servicio: ServiciosService,private device: Device, private loading : LoadingController,private storage: Storage) { 
    console.log('Device UUID is: ' + this.device.uuid);
  }

  ngOnInit() {
  }

  async validate(){
    this.storage.create();
    this.storage.set('uuid', this.device.uuid);
    let l = await this.loading.create();
      l.present();
      this.servicio.Cliente_Consulta(this.device.uuid)
        .subscribe((data: any) => {
          l.dismiss();
          if (data.info.item.id > 0) {      
            this.servicio.irA('/inicio-cliente');
          } else {
            this.servicio.Mensaje('El cliente que intenta consultar no existe.', 'danger');
            this.servicio.irA('/registro');
          }
        }, _ => {
          l.dismiss();
          this.servicio.Mensaje('No se pudo realizar la petición.', 'danger');
          this.servicio.irA('/registro');
        });
    
  }

}
