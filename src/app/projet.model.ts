export class Projet {

    public id:number
    
    public nom:string

    public technologies:Array<any>
    
    public projet_client:string

    public constructor(id:number, nom:string, technologies:Array<any>, projet_client:string)
    {
        this.id=id
        this.nom=nom
        this.technologies=technologies
        this.projet_client=projet_client
    }
}