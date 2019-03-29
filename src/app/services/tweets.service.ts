import { Injectable } from '@angular/core';
import { Tweet } from '../model/Tweet';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TweetsService {

  constructor(private http: HttpClient) { }

  getAllTweets() {
    return this.http.get<Tweet[]>(environment.urlConsultaTweets);
  }

  insertTweet(tweet: Tweet) {
    console.log("TWEET A INSERTAR:", tweet);
    const body = new HttpParams().set('id', tweet.id.toString()).set('text', tweet.texto).set('author', tweet.autor);
    return this.http.post(environment.urlInsertaTweets, body).subscribe();
  }
}
