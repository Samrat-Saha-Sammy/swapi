export interface ICharacter {
  uid: string;
  name: string;
  url: string;
}

export interface ICharacterList {
  message: string;
  total_records: number;
  total_pages: number;
  previous: null | string;
  next: null | string;
  results: ICharacter[];
}

export interface ICharacterDetails {
  message: string;
  result: {
    properties: {
      height: string;
      mass: string;
      hair_color: string;
      skin_color: string;
      eye_color: string;
      birth_year: string;
      gender: string;
      created: string;
      edited: string;
      name: string;
      homeworld: string;
      url: string;
    };
    description: string;
    _id: string;
    uid: string;
    __v: string;
  };
}

export interface IPlanetDetails {
  message: string;
  result: {
    properties: {
      diameter: string;
      rotation_period: string;
      orbital_period: string;
      gravity: string;
      population: string;
      climate: string;
      terrain: string;
      surface_water: string;
      created: string;
      edited: string;
      name: string;
      url: string;
    };
    description: string;
    _id: string;
    uid: string;
    __v: string;
  };
}
