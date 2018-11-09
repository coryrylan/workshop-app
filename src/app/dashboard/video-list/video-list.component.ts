import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Video } from './../../shared/interfaces';
import { Subject, Subscription } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
// new VideoListComponent();
@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {
  @Input() videos: Video[];
  @Output() select = new EventEmitter<Video>();
  selectedVideoId: string;
  clicks = new Subject();
  clicksSubscription: Subscription;

  ngOnInit() {
    this.clicksSubscription = this.clicks.pipe(throttleTime(3000))
      .subscribe(v => console.log(v));

    this.clicks.next('blah');
  }

  ngOnDestroy() {
    this.clicksSubscription.unsubscribe();
  }

  selectVideo(video: Video) {
    this.selectedVideoId = video.id;
    this.select.emit(video);
    this.clicks.next('clicked!');
  }
}
