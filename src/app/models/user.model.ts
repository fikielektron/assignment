import { Flight } from "./flight.model";

export class User{

  /**
   * @constructor
   * @param _id
   * @param name
   */
  constructor(private _id: number, public name: string){
    //Do something?
  }

  get id(){
    return this._id;
  }
}
