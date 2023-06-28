 import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HospitalManagementSystem';
  name:string="";
  names:Array<string>=new Array<string>();
  
  callsomelogic(){
    this.names.push(this.name);
    this.name="";

  }
  calllogic2(){
    alert("thank you");
  }
}
