import { Component } from '@angular/core';
import { PersoService } from '../perso.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {

  education= {
    degree: " ",
    school: " ",
    graduationYear: " ",
  }
  edcations:any[]=[];
constructor(  public _perso:PersoService)
{

}
}
