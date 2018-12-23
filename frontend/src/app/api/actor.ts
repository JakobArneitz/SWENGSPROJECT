export interface Actor {
  id?: number;
  firstName: string;
  lastName: string;
  weight: number;
  height: number;
  nickName: string;
  rating?: number;
  movies?: Array<any>;
  dayOfBirth?: Date;
}
