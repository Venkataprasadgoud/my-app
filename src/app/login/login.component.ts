import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Data, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginform:FormGroup= new FormGroup({
    email: new FormControl(),
    password: new FormControl(null,[Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]),
})

  constructor(private _loginservice:LoginService,private _router:Router) { }

  ngOnInit(): void {
   
  }
  login(){
  console.log(this.loginform);
    
  this._loginservice.login(this.loginform.value).subscribe(
    (data:any)=>{
      alert("login success");

      // go to dash board
      this._router.navigateByUrl("dashboard");
      // store token

      sessionStorage.setItem("my-app-token",data.token);
      
    },
    (err:any)=>{
      alert("login failde");
    }

  )
  
}

  

}
