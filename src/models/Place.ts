export interface IPlace {
  name: string,
  entryCreationDate: number,
  address: string,
  photo?: string,
}

export class Place implements IPlace {
  name: string;
  entryCreationDate: number;
  address: string;
  photo?: string | undefined;

  constructor(name: string, entryCreationDate: number, address: string, photo?: string) {
    this.name = name;
    this.entryCreationDate = entryCreationDate || Date.now();
    this.address = address;
    this.photo = photo || undefined;
  }
}
