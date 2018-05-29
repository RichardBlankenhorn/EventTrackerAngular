export class Event {
  id: number;
  time: number;
  date: string;
  distance: number;

  constructor(time: number, date: string, distance: number) {
    this.time = time;
    this.date = date;
    this.distance = distance;
  }
}
