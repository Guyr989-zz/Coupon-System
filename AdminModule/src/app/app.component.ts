import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  submitted: boolean;
  title = 'app';


  onSubmit() {
    window.location.assign("http://localhost:8080/logoutcontroller");
   }


}




