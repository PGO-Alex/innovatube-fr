import { Component, Input } from '@angular/core';
import { Video } from '../../interfaces/video';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() video!: Video;

}
