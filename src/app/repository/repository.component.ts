import { Component, OnInit } from '@angular/core';
import { RepoRequestService } from '../repo-http/repo-request.service'
import { Repository} from '../repository';
@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  gitrepos:Repository;
  constructor(public RepoRequestService:RepoRequestService) {
  }


 ngOnInit() {
   this.searchRepo("Steve-design");
 }

 searchRepo(searchTerm){
   this.RepoRequestService.searchRepo(searchTerm).then(
     ()=>{
       this.gitrepos=this.RepoRequestService.gitrepos;
       

     },
     (error)=>{
       console.log(error)
     }
   )
    }
  }