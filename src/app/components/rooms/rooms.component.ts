import { Component } from '@angular/core';
import { RoomsService } from './rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {

  constructor(private roomsService: RoomsService) { }

  ngOnInit(): void {
    this.roomsService.getAllRooms().subscribe(data => {
      console.log(data);
    });
  }

}
