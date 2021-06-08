import { Component } from '@angular/core';
import {DataTransfetService} from "./services/data-transfet.service";
import {User} from "./interfaces/user.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';

name :string
  constructor(private dataTrans:DataTransfetService ){
this.dataTrans.store.subscribe(value => this.name=value)

  }
}
