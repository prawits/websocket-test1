import { Component, HostListener } from '@angular/core';
import { webSocket } from 'rxjs/websocket';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//const ws: WebSocketSubject<any> = webSocket("ws://203.154.88.148:5010");

export class AppComponent {
  title = 'websocket-test1';
  username = '';
  listTag = [];
  subject = webSocket({
    url: 'ws://203.154.88.148:5010',
    deserializer: msg => msg
  });
  

  ngOnInit() {
    //this.subject.asObservable().subscribe(dataFromServer => console.log( dataFromServer));
    //this.ws.next({message: 'some message'});
    // this.ws.subscribe(
    //   msg => console.log('message received: ' + msg), // Called whenever there is a message from the server.
    //   err => console.log(err)
    // );

    this.subject.subscribe(
      msg => console.log(this.listTag.push(msg.data)), // Called whenever there is a message from the server.
      err => console.log(err), // Called if at any point WebSocket API signals some kind of error.
      () => console.log('complete') // Called when connection is closed (for whatever reason).
    );
   
  }

  // @HostListener('window:beforeunload', [ '$event' ])
  // beforeUnloadHander(event) {
  //   subject.unsubscribe();
  //   alert('call beforeunload');
  // }

  
  //ss = new WebSocket();

}
