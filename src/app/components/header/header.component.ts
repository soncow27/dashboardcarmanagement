import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { nguoidung } from 'src/app/classes/nguoidung.class';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
@Injectable()
export class HeaderComponent implements OnInit {
  isShow: boolean = false;
  isUserLoggedIn!: boolean;
  closeResult: string ='';
  curUser: string = '';
  constructor(
    private _user : UserService,    
    private modalService: NgbModal,) {
      this._user.isUserLoggedIn.subscribe( value => {
        this.isUserLoggedIn = value;
    });
     }

  ngOnInit(): void {
    this.isShow = this._user.getLoginStatus();
  
  }
  open(login: any){
    this.modalService.open(login, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = 'Closed with: ${result}';
  }, (reason) => {
    this.closeResult = 'Dismissed ${this.getDismissReason(reason)}';
  });
  }
  private getDismissReason(reason:any):string{
    if (reason === ModalDismissReasons.ESC){
      return 'by pressing ESC';
    }
    else if (reason === ModalDismissReasons.BACKDROP_CLICK){
      return 'by clicking on a backdrop';
    }
    else{
      return 'with: ${reason}';
    }
  }
  onSubmitLogin(f: NgForm){
    this._user.login(f.controls.username.value, f.controls.password.value);
    this._user.isUserLoggedIn.next(true);
    this.curUser=this._user.getCurUser();
    this.ngOnInit();
    this.modalService.dismissAll();
  }

  logout(){
    this._user.isUserLoggedIn.next(false);
  }

  onSubmitSignup(f: NgForm){
    console.log(this._user.getAllNguoiDung().length);
    let newnguoidung = new nguoidung(this._user.getAllNguoiDung().length,f.controls.tennv.value, f.controls.username.value, f.controls.password.value, f.controls.gioitinh.value, f.controls.sdt.value, f.controls.diachi.value);
    console.log(newnguoidung);
    this._user.addNguoiDung(newnguoidung, true);
    this._user.login(newnguoidung.username, newnguoidung.password);
    this._user.isUserLoggedIn.next(true);
    this.curUser=this._user.getCurUser();
    this.ngOnInit();
    this.modalService.dismissAll();
  }
}
