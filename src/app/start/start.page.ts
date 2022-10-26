import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {

  constructor(public servicio: ServiciosService) { }

  ngOnInit() {
  }

}
