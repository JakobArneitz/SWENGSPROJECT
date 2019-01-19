export interface Hero {
  id?: number;
  firstName: string;
  lastName: string;
  superheroName: string;
  alive: boolean;
  rating?: number;
  gender: string;
  movies?: Array<any>;
  superPower: string;
  avatar: string;
}