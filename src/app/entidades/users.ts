export class Users {


    // Atributos.

    private user : string;
    private pass : string;


    // Constrcutor.

    constructor( user : string, pass : string) {
        this.user = user;
        this.pass = pass;
    }
    

    // Getters & Setters.

    public get getUser() : string {
        return this.user;
    }

    public get getPass() : string {
        return this.pass;
    }

    public set setUser( user : string ) {
        this.user = user;
    }

    public set setPass( pass : string ) {
        this.pass = pass;
    }


    // toString.

    public toString() : string {
        return `- Nombre de Usuario: ${this.user}. - Contraseña de Usario: ${this.pass}.`;
    }

}