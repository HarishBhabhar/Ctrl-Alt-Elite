import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Ctrl-Alt-Elite';
  showUser:boolean=false;
  showNewUser(event:any){
    this.showUser=!this.showUser;
  }
  dataFromNewUser(event:any){
    this.showUser=!this.showUser;
  }
}
