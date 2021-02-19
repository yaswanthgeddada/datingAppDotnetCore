import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'client';
  users:any=[];

  constructor(private userService: UserService) {}

  ngOnInit() {
  this.userService.getusers().subscribe(result =>{
    console.log(result);
    this.users = result;
  })


  }
}
