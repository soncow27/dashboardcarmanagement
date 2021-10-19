import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { nguoidung } from '../classes/nguoidung.class';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userlist : any[] = [
    new nguoidung(0, "Trịnh Phạm Hùng Sơn", "den123", "123", true, "0123456789", "Củ Chi"),
    new nguoidung(1, "Cao Phạm Duy Sơn", "son123", "123", true, "0123456789", "TPHCM"),
    new nguoidung(1, "Nguyễn Cao Kỳ", "ky123", "123", false, "0123456789", "TPHCM"),
  ];
  isLogIn = true;
  currentUser: string = "";
  public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() { }
  getLoginStatus(){
    return this.isLogIn;
  }
  getAllNguoiDung(){
    return this.userlist;
  }

  deleteNguoiDung(id:number) {
    const index = this.userlist.findIndex(nguoidung=> nguoidung.id === id);
    this.userlist.splice(index,1);
  }

  getNguoiDungById (id:number){
    return this.userlist.filter(nguoidung => nguoidung.id === id);
  }
  
  addNguoiDung(newnguoidung : nguoidung, addorupdate: boolean){
    if (addorupdate) {
      console.log(newnguoidung);
      this.userlist.push(newnguoidung);
      }
      else
      {
      let index = this.userlist.findIndex(nguoidung => nguoidung.id == newnguoidung.id)
      this.userlist[index].id = newnguoidung.id;
      this.userlist[index].tennv = newnguoidung.tennv;
      this.userlist[index].username = newnguoidung.username;
      this.userlist[index].password = newnguoidung.password;
      this.userlist[index].gioitinh = newnguoidung.gioitinh;
      this.userlist[index].sdt = newnguoidung.sdt;
      this.userlist[index].diachi = newnguoidung.diachi;
      }
  }

  login(username: string, password: string){
    if(this.userlist.find(nguoidung => nguoidung.username == username && nguoidung.password == password))
    {
      this.isLogIn = true;
      this.currentUser = this.userlist.find(nguoidung => nguoidung.username == username && nguoidung.password == password).tennv;
    } 
  }
    getCurUser(){
      return this.currentUser;
    }
  logout(){
    this.isLogIn = false;
  }
}
