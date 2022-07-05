import { EventService } from './../../services/event.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-certificates',
  templateUrl: './table-certificates.component.html',
  styleUrls: ['./table-certificates.component.css']
})
export class TableCertificatesComponent implements OnInit {

  dataEvents: any;

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.getEvents();
  }

  async getEvents() {
    await this.eventService.getAllEvents().subscribe(resp => {
      console.log(resp);
      this.dataEvents = resp;
    });
  }
}
