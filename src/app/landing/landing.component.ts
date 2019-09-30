import { Component, OnInit } from '@angular/core';
import { UserRequestService} from "../user-http/user-request.service";
import { User } from "../user";
import { Repository } from '../repository';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(public UserRequestService:UserRequestService)  { }
  
  searchUser(searchTerm){
    this.UserRequestService.searchUser(searchTerm).then(
      (results)=>{
        this.user = this.UserRequestService.user;
    
      },
      (error)=>{
        console.log(error)
      }
    )
  }


  ngOnInit() {
    this.searchUser("Steve-design")
  }


}
