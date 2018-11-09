import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Video } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  constructor(private httpClient: HttpClient) { }

  load() {
    return this.httpClient
      .get<Video[]>('http://localhost:8085/videos');
  }
}
