import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-chatbot-ui',
  templateUrl: './chatbot-ui.component.html',
  styleUrls: ['./chatbot-ui.component.less']
})
export class ChatbotUiComponent {
textContent:string='';
@HostListener('document:keydown.enter',['$event'])
handleEnterKey(event:KeyboardEvent){
  this.submitText()

}
submitText(){
  if(this.textContent.trim() !==''){
    console.log('data--->',this.textContent)
    this.textContent=''
  }
}
}
