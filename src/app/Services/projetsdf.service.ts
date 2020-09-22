export class ProjetsdfService {

    TrieParNomCroissant(list) {
		console.log("on trie par nom croissant !")
		list.sort((a, b) => {
			if ( a.nom < b.nom ){
				return -1;
			  }
			  if ( a.nom >  b.nom ){
				return 1;
			  }
			  return 0;
			}
		);
	}

	TrieParNomDecroissant(list) {
		console.log("on trie par nom décroissant !")
		list.sort((a, b) => {
			if ( a.nom < b.nom ){
				return 1;
			  }
			  if ( a.nom > b.nom ){
				return -1;
			  }
			  return 0;
			}
		);
	}

	TrieParTechnologieCroissant(list) {
		console.log("on trie par Technologie croissant !")
		list.sort((a, b) => {
			if ( a.technologies[0] < b.technologies[0] ){
				return -1;
			  }
			  if ( a.technologies[0] > b.technologies[0] ){
				return 1;
			  }
			  return 0;
			}
		  );
	}

	TrieParTechnologieDecroissant(list) {
		console.log("on trie par Technologie décroissant !")
		list.sort((a, b) => {
			if ( a.technologies[0] < b.technologies[0] ){
				return 1;
			  }
			  if ( a.technologies[0] > b.technologies[0] ){
				return -1;
			  }
			  return 0;
			}
		  );
    }

	Oui(list) {
		console.log("S on filtre par oui !");
		list = list.filter(projetDF => projetDF.projet_client == "Oui");
		console.log("S on a filtre par oui !");
		}
		
	Non(list) {
		console.log("on filtre par non !");
		list = list.filter(projetDF => projetDF.projet_client == "non");
	}

}