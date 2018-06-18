interface IPlace {
  name: string,
  entryCreationDate: Date,
  address: string,
  photo?: string,
}

class Place implements IPlace {
  name: string;
  entryCreationDate: Date;
  address: string;
  photo?: string | undefined;

  constructor(name: string, entryCreationDate: Date, address: string, photo?: string) {
    this.name = name;
    this.entryCreationDate = entryCreationDate || Date.now();
    this.address = address;
    this.photo = photo || undefined;
  }
}

export { Place as default, IPlace };
