export class Telefono {
    //vincolato a Telefono
    private numero: string;
    constructor(n: string) {
        this.numero = this.validate(n);
    }
    public setNumero(n: string) {
        this.numero = this.validate(n);
    }
    public getNumero() {
        return this.numero;
    }
    //controllo del numero
    private validate(n: string): string {
        if (n === "" || n === null)
            //se vuoto o null
            throw new Error("Numero Di Telefono Vuoto");
        if (n.length < 12 || n.length > 13)
            // se min o sup
            throw new Error("Numero Non Valido");
        if (n.slice(0, 3) !== "+39")
            //estrapola prefisso, nota:slice non modifica array di partenza
            throw new Error("Numero Non Formattato Correttamente");
        if (n.slice(3).match(/^-?\d*\.?\d*$/) == null)
            //matching dei parametri
            throw new Error("Ammessi solo numeri");
        return n;
    }
}

export class Email {
    //vincolato ad Email
    private email: string;
    constructor(e: string) {
        this.email = this.validate(e);
    }
    public setEmail(e: string) {
        this.email = this.validate(e);
    }
    public getEmail() {
        return this.email;
    }
    //controllo Email
    private validate(e: string): string {
        const mailParam = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (e === "" || e === null)
            //se vuoto o null
            throw new Error("Email Vuota");
        if (e.match(mailParam) == null)
            //match parametri
            throw new Error("Formato Email non valido");
        let domain = e.split("@")[1]; //splitto email con limite e passo da stringa ad array di stringhe
        if (domain.split(".")[1] !== "com" && domain.split(".")[1] !== "it")
            //condizione: se il TLD splittato, che si trova in posizione 1 del mio Array di stringhe non è ammesso lancio errore
            throw new Error("Email non valida");
        return e;
    }
}

export class CodiceFiscale {
    //vincolato a CF
    private codiceFiscale: string;
    constructor(cf: string) {
        this.codiceFiscale = this.validate(cf);
    }
    public setCodiceFiscale(cf: string) {
        this.codiceFiscale = this.validate(cf);
    }
    public getCodiceFiscale() {
        return this.codiceFiscale;
    }
    //controllo cf
    private validate(cf: string) {
        const cfParam = /^[A-Z]{6}\d{2}[A-Z]\d{2}[A-Z]\d{3}[A-Z]$/i;
        if (cf === "" || cf === null)
            //se vuoto o null
            throw new Error("Codice Fiscale Vuoto");
        if (cf.match(cfParam) == null)
            //match dei parametri
            throw new Error("Codice Fiscale Non Valido");
        return cf;
    }
}

export class Graduatoria {
    private votoOrale: number;
    private votoScritto: number;
    private votoTotale: number;

    constructor(voti: Array<number>) {
        this.votoOrale = this.validate(voti[0]);
        this.votoScritto = this.validate(voti[1]);
        this.votoTotale = (this.votoOrale + this.votoScritto) / 2;
    }
    public getVoto() {
        return this.votoTotale;
    }
    private validate(n: number) {
        //controllo voti
        //non mettere n=NaN perche in Js Not-a-Number è un valore particolare del TIPO Number.
        //Il controllo sul NaN va eseguito come : èUnNumero(numero) => isNaN(number).
        // https://eslint.org/docs/rules/use-isnan
        if (n == null || isNaN(n)) throw new Error("Voto Vuoto");
        if (n < 0) throw new Error("Il Voto deve essere maggiore di 0");
        if (n > 110) throw new Error("Il Voto deve essere minore di 110");
        return n;
    }
}
// let provaTel=new Telefono("+393359027634");
