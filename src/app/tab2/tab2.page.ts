import { Component } from '@angular/core';

import { SenhasService } from '../services/senhas.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  constructor(public senhasService: SenhasService) {
    // this.senhasService.registrarChamada(senhaChamada)
  }

  
}
