import { Component, OnInit } from '@angular/core';
import { Device } from '@awesome-cordova-plugins/device/ngx';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {

  constructor(public servicio: ServiciosService,private device: Device) { 
    console.log('Device UUID is: ' + this.device.uuid);
  }

  ngOnInit() {
  }

}
