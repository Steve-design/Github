import { Component, OnInit } from '@angular/core';
import { RepoRequestService } from './repo-request.service';
import { Repository} from '../repository';
@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
