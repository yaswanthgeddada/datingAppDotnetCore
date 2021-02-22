import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model:any = {};

  constructor(private accountService : AccountService, private router:Router, private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  register(){
    this.accountService.register(this.model).subscribe(result => {
      console.log(result);
    },err => {
      console.log(err);
      this.toastr.error(err.error);
    })
  }

  cancel(){
    console.log("cancelled");
    this.router.navigateByUrl('/');
  }

}
