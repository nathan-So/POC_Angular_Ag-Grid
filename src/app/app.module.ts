import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderCapComponent } from './header-cap/header-cap.component';
import { SearchBarCapComponent } from './search-bar-cap/search-bar-cap.component';
import { ArrayFilterableAndSortableComponent } from './array-filterable-and-sortable/array-filterable-and-sortable.component';

import { ProjetsdfService } from './Services/projetsdf.service';

import { AgGridModule } from 'ag-grid-angular';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderCapComponent,
    SearchBarCapComponent,
    ArrayFilterableAndSortableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    AgGridModule.withComponents([])
  ],
  providers: [
    ProjetsdfService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
