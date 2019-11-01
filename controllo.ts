//import modulo Users
import { Users } from "./users";

//creo new Users
let User = new Users.TestedUser(
    "mario@gmail.com",
    true,
    "mario",
    "rossi",
    "+39113467876",
    "MROSSI80A01E801W",
    [6, 7]
);
let User2 = new Users.TestedUser(
    "luca@gmail.com",
    true,
    "luca",
    "verdi",
    "+39123367829",
    "LCAVRD80A01E801W",
    [7, 9]
);
let User3 = new Users.TestedUser(
    "fede@gmail.com",
    true,
    "federico",
    "bianchi",
    "+39125067832",
    "FDEBCI80A01E809Z",
    [8, 9]
);

//creo array di Users
let groupUsers: any = [];

//push Users in array groupUsers
groupUsers.push(User);
groupUsers.push(User2);
groupUsers.push(User3);

//filter usando un solo param in ingresso e output new array
//per codiceFiscale, email and numero uso get()
const search = (x:string) =>{

    //                    filtro      iteratore
    let res =  groupUsers.filter((i:Users.TestedUser) => {
        return(i.name === x.toLowerCase() ||
        i.surName === x.toLowerCase() ||
        i.email.getEmail() === x ||
        i.codiceFiscale.getCodiceFiscale() === x.toUpperCase() ||
        i.telefono.getNumero() === x)
    });

    //variabile d'uscita  positvo || negativo
    let positive:string = res;
    let negative:string = 'utente non trovato'

    //verifico se in res "eisiste il dato", se si returno positive; se no returno negative
    return (res.length != 0) ? positive : negative;

}


//testing
console.log(search('Luca'));
