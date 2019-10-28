//import modulo Users
import { Users } from "./users";

//creo new Users
let User = new Users.TestedUser(
    "mario@gmail.com",
    true,
    "Mario",
    "Rossi",
    "+39113467876",
    "MROSSI80A01E801W",
    [7, 9]
);
let User2 = new Users.TestedUser(
    "luca@gmail.com",
    true,
    "Luca",
    "Verdi",
    "+39123367829",
    "LCAVRD80A01E801W",
    [7, 9]
);
let User3 = new Users.TestedUser(
    "fede@gmail.com",
    true,
    "Federico",
    "Bianchi",
    "+39125067832",
    "FDEBCI80A01E809Z",
    [7, 9]
);

//creo array di Users
let groupUsers: any = [];

//push Users in array groupUsers
groupUsers.push(User);
groupUsers.push(User2);
groupUsers.push(User3);

//filter usando parametri in ingresso e output new array
//per codiceFiscale, email and numero uso proprio get()
const search = (x?: string, y?: string, z?: string, a?: string, b?: string) =>
    groupUsers.filter((i: Users.TestedUser) => {
        return (
            i.name === x ||
            i.surName === y ||
            i.email.getEmail() === z ||
            i.codiceFiscale.getCodiceFiscale() === a ||
            i.telefono.getNumero() === b
        );
    });

//testing
console.log(search("Luca"));
