import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Video } from '../../interfaces/video';


@Component({
  selector: 'app-home',
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  video: Video ={
    id: 1,
    video_title:'Big Buck Bunny',
    video_url:'https://www.youtube.com/embed/YE7VzlLtp-4',
    video_details:'Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain\'t no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.',
    id_usr: 1
  }
}
