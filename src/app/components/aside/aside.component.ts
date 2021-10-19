import { Component, Injectable, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  isShow : boolean= false;
  constructor(  
    private _user : UserService,
    ) {
      this._user.isUserLoggedIn.subscribe( value => {
        this.isShow = value;
    });
     } 

  ngOnInit(): void {
    
  }

}
