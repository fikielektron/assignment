export class Flight{

  /**
   * @constructor
   *
   * Data is of type:
   *
   * @param data
   */
  constructor(
        public num: string,
        public from: string,
        public to: string,
        public from_date: string, // dd/mm/yyy
        public to_date: string, // dd/mm/yyy
        public plane: string,
        public duration: number, // minutes
        public from_gate: number,
        public to_gate: number
  ){
  }
}
