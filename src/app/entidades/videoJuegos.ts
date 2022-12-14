export class VideoJuegos {


    ///////////////
    // Atributos.//
    ///////////////

    private id: number = 0;
    private title: string;
    private company: string;
    private img: string;
    private review: number;

    private static acumuladorId : number = 1;


    /////////////////
    // Constructor.//
    /////////////////

    constructor( title : string, company : string, img : string, review : number ) {

        this.id = VideoJuegos.acumuladorId++;
        this.title = title;
        this.company = company;
        this.img = img;
        this.review = review;

    }


    ////////////////////////
    // Getters & Setters. //
    ////////////////////////

    public get getId(): number {
        return this.id;
    }

    public set setId(value: number) {
        this.id = value;
    }

    public get getTitle(): string {
        return this.title;
    }

    public set setTitle(value: string) {
        this.title = value;
    }

    public get getCompany(): string {
        return this.company;
    }

    public set setCompany(value: string) {
        this.company = value;
    }

    public get getImg(): string {
        return this.img;
    }

    public set setImg(value: string) {
        this.img = value;
    }

    public get getReview(): number {
        return this.review;
    }

    public set setReview(value: number) {
        this.review = value;
    }
    
    
    ///////////////
    // toString. //
    ///////////////

    public toString() : string {
        return `- ID: ${this.id}, - TÍTULO: ${this.title}, - COMPAÑIA: ${this.company}, - IMÁGEN: ${this.img}, - VALORACIONES: ${this.review}.`;
    }

}