import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-chatbot-ui',
  templateUrl: './chatbot-ui.component.html',
  styleUrls: ['./chatbot-ui.component.less']
})
export class ChatbotUiComponent {
textContent:string='';
chatHistory: { userMessage: string, botResponse: string }[] = [];
userMessage: string = '';
botResponse: string = '';
sendMessage() {

  this.botResponse = this.generateFakeBotResponse(this.userMessage);
  this.chatHistory.push({ userMessage: this.userMessage, botResponse: this.botResponse });
  this.userMessage = '';}

generateFakeBotResponse(userMessage: string): string {
  return "I'm a fake bot response to: " + userMessage;
}
}
