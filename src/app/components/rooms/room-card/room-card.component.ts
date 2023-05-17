import { Component, Input } from '@angular/core';
import { Room } from '../rooms.entities';

@Component({
  selector: 'app-room-card',
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.scss']
})
export class RoomCardComponent {

  @Input() room!: Room;

  ngOnInit(): void {
    console.log(this.room);
  }

}
