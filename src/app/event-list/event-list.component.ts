import { EventService } from './../event.service';
import { Component, OnInit } from '@angular/core';
import { Event } from '../event';
import { variable } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  title = 'Cycling Events';

  events = [];

  event = new Event(null, null, null);

  selected = null;

  edit = false;

  getNumOfEvents = function() {
    return this.events.length;
  };

  displayEvent = function(event) {
    this.selected = event;
  };

  displayTable = function() {
    this.selected = null;
  };

  reload = function() {
    this.eventService.index().subscribe(
      data => this.events = data,
      err => console.error('Observer got an error: ' + err)
    );
  };

  create = function() {
    this.eventService.create(this.event).subscribe(
      data => {
        this.reload();
        this.event = new Event(null, null, null);
    },
      err => console.error('Creation error ' + err)
    );
  };

  delete = function(id) {
    this.eventService.delete(id).subscribe(
      data => this.reload(),
      err => console.error('Deletion error: ' + err)
    );
  };

  update = function(id) {
    const newEvent = new Event(this.selected.time, this.selected.date, this.selected.distance);
    this.eventService.update(id, newEvent).subscribe(
      data => {
        this.reload();
        this.selected = null;
        this.edit = false;
      },
      err => console.error('Update error: ' + err)
    );
  };

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.reload();
  }

}
