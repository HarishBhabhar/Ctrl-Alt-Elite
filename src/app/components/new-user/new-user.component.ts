import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.less']
})
export class NewUserComponent {
@Output()showNew=new EventEmitter()

  showNewUser(){
    this.showNew.emit(true)
  }
}
