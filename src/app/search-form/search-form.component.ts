import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  @Output() emitSearch = new EventEmitter<any>() 


  searchTerm: string;
  constructor() { }


  search(){
    console.log(this.searchTerm)
    this.emitSearch.emit(this.searchTerm)
  }
  onClickSubmit(data) {
    console.log(data.searchTerm)
    this.emitSearch.emit(data.searchTerm)
 }
  ngOnInit() {
  }

}