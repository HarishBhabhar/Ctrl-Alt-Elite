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
activeSelect: number=3;
servicesName:string='Web Testing';
navigateToScheduled(type:any){
  this.activeSelect=type;
 }
services:any = ['Service Virtualization','API Monitoring','Rover','Web Testing','Desktop Testing','Device Farm','API Testing','Mobile Testing','Component','Webpage Performance']
sendMessage() {
  this.botResponse = this.generateFakeBotResponse(this.userMessage);
  this.chatHistory.push({ userMessage: this.userMessage, botResponse: this.botResponse });
  this.userMessage = '';

}

generateFakeBotResponse(userMessage: string): string {
  return "I'm a fake bot response to: " + userMessage;
}
getService(service:string){
  this.servicesName=service
}
selectActive(index:any){
  this.activeSelect=index;
 }
// getAllCreateProject(data: any, serviceName: string,teamId:number) {
//   switch (serviceName) {
//     case 'API Monitoring':
//       return this.http.post(environment.API_MONITORING_ENDPOINT + '/api/projects', data);
//       break;
//     case 'Service Virtualization':
//       return this.http.post(environment.SERVICE_VIRTUALIZATION_ENDPOINT + '/api/projects', data);
//       break;
//     case 'Rover':
//       return this.httpClient.post(environment.ROVER_ENDPOINT + 'api/projects', data);
//       break;
//     case 'Web Testing':
//       return this.http.post(environment.WEB_REPOSITORY_ENDPOINT + '/api/projects', data);
//       break;
//     case 'Desktop Testing':
//         return this.http.post(environment.DESKTOP_REPOSITORY_ENDPOINT + '/api/projects', data);
//         break;
//     case 'Device Farm':
//       return this.http.post(environment.DEVICE_FARM_ENDPOINT + '/api/projects', data);
//       break;
//     case 'API Testing':
//       return this.http.post(environment.API_TESTING_ENDPOINT + '/api/projects', data);
//       break;
//     case 'Mobile Testing':
//       return this.http.post(environment.MOBILITY_ENDPOINT + '/api/projects', data);
//       break;
//     case 'Component':
//       return this.http.post(environment.COMPONENT_ENDPOINT + '/api/projects?teamId=' + teamId, data);
//       break;
//     case 'Webpage Performance':
//       return this.http.post(environment.WEB_PERFORMANCE_ENDPOINT + '/api/projects', data);
//       break;
//     default:
//       return null;
//       break;
//   }
// }
}

