import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../../../interfaces/user.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {DataTransfetService} from "../../../services/data-transfet.service";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  @Input()
  user: User;

@Output()
lift=new EventEmitter<User>();
constructor(private data:DataTransfetService) {
}



  ngOnInit(): void {

  }
 lifting():void{
    this.lift.emit(this.user)

}
}
