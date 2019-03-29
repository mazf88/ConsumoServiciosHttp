import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Usuario } from 'src/app/model/Usuario';
import { Tweet } from 'src/app/Model/Tweet';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  @Input() mySelectedUser: Usuario;
  tweet: Tweet;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserById;
  }

}
