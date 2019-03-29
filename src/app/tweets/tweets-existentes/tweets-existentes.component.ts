import { Component, OnInit } from '@angular/core';
import { Tweet } from '../../Model/Tweet';
import { TweetsService } from 'src/app/services/tweets.service';

@Component({
  selector: 'app-tweets-existentes',
  templateUrl: './tweets-existentes.component.html',
  styleUrls: ['./tweets-existentes.component.css']
})
export class TweetsExistentesComponent implements OnInit {

  miTweet: Tweet;
  misTweets: Array<Tweet>;

  constructor(private tweetsService: TweetsService) {
    this.misTweets = new Array();
    this.miTweet = new Tweet();
  }

  addNewTweet() {
    console.log('add tweet');
    this.tweetsService.insertTweet(this.miTweet);
    this.misTweets.push(this.miTweet);
    this.miTweet = new Tweet();
  }

  ngOnInit() {
    this.tweetsService.getAllTweets()
      .subscribe(data => {
        this.misTweets = data;
      })
  }
}
