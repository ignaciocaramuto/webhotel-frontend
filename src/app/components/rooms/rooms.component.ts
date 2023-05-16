import { Component } from '@angular/core';
import { Room } from './rooms.entities';
import { RoomsService } from './rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {

  rooms!: Room[];

  constructor(private roomsService: RoomsService) { }

  ngOnInit(): void {
    this.roomsService.getAllRooms().subscribe(data => {
      this.rooms = data;
    });
  }

}
