import { Component } from '@angular/core';
import { PersoService } from '../perso.service';

@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.scss']
})
export class InformationsComponent {
  informations={
    firstname : " ",
    lastName: " ",
    email:" ",
    phone: " ",
  
  };
  infos:any[]=[];
  constructor(  public _perso:PersoService)
{

}
}

