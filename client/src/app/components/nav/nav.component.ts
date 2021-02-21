import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/_models/User';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  constructor(public accountService:AccountService) { }

  ngOnInit(): void {
  }

  login(){

    this.accountService.login(this.model).subscribe(result => {
      console.log(result);
    }, err =>{
      console.log(err);
    })
    console.log(this.model);
  }

  logout(){
    this.accountService.logout();
  }


}
