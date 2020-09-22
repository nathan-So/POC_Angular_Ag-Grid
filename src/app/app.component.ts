import { Component, OnInit } from '@angular/core';
import { ProjetsdfService } from './Services/projetsdf.service';
// import { Projet } from './projet.model';
// import { ArrayFilterableAndSortableComponent } from './array-filterable-and-sortable/array-filterable-and-sortable.component';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	constructor(private Projetsdfservice: ProjetsdfService, private http: HttpClient){}
	ngOnInit() {
	// 
	 	//this.projetsDF = this.http.get('https://raw.githubusercontent.com/nathan-So/demo_fichier_json/master/projetsDF.json');
		this.filteredList = this.projetsDF;
		 }

	columnDefs = [
		{ headerName: 'Nom du projet', field: 'nom', sortable : true },
		{ headerName: 'Technologies', field: 'technologies', sortable : true },
		{ headerName: 'Projet client (Oui / Non)', field: 'projet_client', filter : true }
	];
// 
	//projetsDF: any;

	projetsDF = [
		{
		id: 1,
		nom:"Auchan",
		technologies:["Angular", "Springboot", "Xamarin"],
		projet_client:"Oui"
	},
	{
		id: 2,
		nom:"Casino",
		technologies:["Java/Android", "Swift"],
		projet_client:"Oui"
	},	

	{
		id: 3,
		nom:"CapGénie",
		technologies:["Angular", "dotnet", "Xamarin"],
		projet_client:"non"
	},
	{
		id: 4,
		nom:"Nexity",
		technologies:["Java/Android", "Swift"],
		projet_client:"Oui"
	},
	{
		id: 5,
		nom:"Digicare",
		technologies:["Java/Android", "Swift"],
		projet_client:"Oui"
	},
	{
		id: 6,
		nom:"Cassis Paprika",
		technologies:["Java/Android"],
		projet_client:"Oui"
	},
]

	filteredList = [];

}
