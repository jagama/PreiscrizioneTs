import { Email, Telefono, CodiceFiscale, Graduatoria } from "./checks";

export namespace Users {
  export interface UserInterface {
    name?: string;
    surName?: string;
    email: Email;
    privacy: boolean;
  }

  export class NewsletterUser implements UserInterface {
    name?: string = "";
    surName?: string = "";
    email: Email;
    privacy: boolean = false;

    constructor(
      email: string,
      privacy: boolean,
      name: string,
      surName: string
    ) {
      this.email = new Email(email);
      this.privacy = privacy;
      this.name = name;
      this.surName = surName;
    }
  }

  export class InterestedUser extends NewsletterUser {
    constructor(
      email: string,
      privacy: boolean,
      name: string,
      surName: string
    ) {
      super(email, privacy, name, surName);
    }
  }

  export class SubscribedUser extends InterestedUser {
    telefono: Telefono;
    codiceFiscale: CodiceFiscale;

    constructor(
      email: string,
      privacy: boolean,
      name: string,
      surName: string,
      telefono: string,
      codiceFiscale: string
    ) {
      super(email, privacy, name, surName);
      this.telefono = new Telefono(telefono);
      this.codiceFiscale = new CodiceFiscale(codiceFiscale);
    }
  }

  export class TestedUser extends SubscribedUser {
    voti: Graduatoria;

    constructor(
      email: string,
      privacy: boolean,
      name: string,
      surName: string,
      telefono: string,
      codiceFiscale: string,
      voti: Array<number>
    ) {
      super(email, privacy, name, surName, telefono, codiceFiscale);
      this.voti = new Graduatoria(voti);
    }
  }
}
