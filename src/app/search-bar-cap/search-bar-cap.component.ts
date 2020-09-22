import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ArrayFilterableAndSortableComponent } from "../array-filterable-and-sortable/array-filterable-and-sortable.component"

@Component({
  selector: 'app-search-bar-cap',
  templateUrl: './search-bar-cap.component.html',
  styleUrls: ['./search-bar-cap.component.scss']
})
export class SearchBarCapComponent implements OnInit {
  ngOnInit(): void {}

  placeholder = "Saisissez votre recherche..."

  constructor() { }

  searchText: "";
  @Output() searchChanged = new EventEmitter<String>();

  handleChange() {
    this.searchChanged.emit(this.searchText);
  }
}
