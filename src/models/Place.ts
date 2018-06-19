export interface IPlace {
  _id: string,
  name: string,
  entryCreationDate: number,
  address: string,
  photo?: string,
}

export class Place implements IPlace {
  _id: string;
  name: string;
  entryCreationDate: number;
  address: string;
  photo?: string | undefined;

  constructor(_id: string, name: string, entryCreationDate: number, address: string, photo?: string) {
    this._id = _id;
    this.name = name;
    this.entryCreationDate = entryCreationDate || Date.now();
    this.address = address;
    this.photo = photo || undefined;
  }
}
