import { Component, OnInit, Input } from '@angular/core';
import { Tweet } from 'src/app/Model/Tweet';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle-tweet',
  templateUrl: './detalle-tweet.component.html',
  styleUrls: ['./detalle-tweet.component.css']
})
export class DetalleTweetComponent implements OnInit {

  @Input() mySelectedTweet: Tweet;

  constructor(private router: Router) { }

  infoUsuario(){
    this.router.navigate(["infoUsuario"]);
  }

  ngOnInit() {
  }

}
