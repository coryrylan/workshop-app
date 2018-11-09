import { Component, OnInit } from '@angular/core';

import { Video } from './../../shared/interfaces';
import { VideoService } from './../../shared/video.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.scss']
})
export class VideoDashboardComponent implements OnInit {
  videoData: Observable<Video[]>;
  selectedVideo: Video;

  constructor(private videoService: VideoService) { }

  ngOnInit() {
    this.videoData = this.videoService.load();
  }

  setSelectedVideo(video: Video) {
    this.selectedVideo = video;
  }
}
