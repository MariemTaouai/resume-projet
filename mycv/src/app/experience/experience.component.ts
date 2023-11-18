import { Component } from '@angular/core';
import { PersoService } from '../perso.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experience= {
    position: " ",
    company: " ",
    startDate: " ",
    endDate: " ",
    

  };
  experiences:any[]=[];
  constructor(  public _perso:PersoService)
{

}
}
