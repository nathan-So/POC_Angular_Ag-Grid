import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Projet } from "../projet.model"

@Component({
  selector: 'app-array-filterable-and-sortable',
  templateUrl: './array-filterable-and-sortable.component.html',
  styleUrls: ['./array-filterable-and-sortable.component.scss']
})
export class ArrayFilterableAndSortableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  placeholder = "Saisissez votre recherche..."

  @Input('projetsDF') projetsDF:any;
  @Input('rowData') filteredList:any;
  @Input('columnDefs') columnDefs:any;
  

  handleChange($event: string) {
    this.filteredList = this.projetsDF.filter(e => e.nom.toLowerCase().includes($event) || 
                                              e.technologies.some(t=>t.toLowerCase().includes($event)) ||
                                              e.projet_client.toLowerCase().includes($event));
  }
}