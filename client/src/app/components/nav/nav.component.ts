import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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

  constructor(public accountService:AccountService, private router: Router, private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  login(){

    this.accountService.login(this.model).subscribe(result => {
      this.router.navigateByUrl('/members');

      console.log(result);
    }, err =>{
      console.log(err);
      this.toastr.error(err.error);
    })
    console.log(this.model);
  }

  logout(){
    this.accountService.logout();
    this.router.navigateByUrl('/');

  }


}
