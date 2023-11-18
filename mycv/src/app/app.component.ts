import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'mycv';
  informations={
  firstname : " ",
  lastName: " ",
  email:" ",
  phone: " ",

};
education= {
  degree: " ",
  school: " ",
  graduationYear: " ",
}
experience= {
  position: " ",
  company: " ",
  startDate: " ",
  endDate: " ",
};
}
  

  
  
