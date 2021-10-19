import { Injectable } from '@angular/core';
import { hopdong } from '../classes/hopdong.class';
@Injectable({
  providedIn: 'root'
})
export class HopdongService {
  hopdonglist : any[] = [
    new hopdong(1, new Date("05/09/2021"), false, new Date("05/10/2021"), 2),
    new hopdong(2, new Date("05/09/2021"), false, new Date("05/10/2021"), 4),
  ];
  constructor() { }
  getAllHopDong(){
    return this.hopdonglist;
  }

  deleteHopDong(id:number) {
    const index = this.hopdonglist.findIndex(hd => hd.id === id);
    this.hopdonglist.splice(index,1);
  }

  getHopDongById (id:number){
    return this.hopdonglist.filter(hd => hd.id === id);
  }
  
  addHopDong(newhopdong : hopdong, addorupdate: boolean){
    if (addorupdate) {
      this.hopdonglist.push(newhopdong);
      }
      else
      {
      let index = this.hopdonglist.findIndex(hd => hd.id == newhopdong.id)
      this.hopdonglist[index].id = newhopdong.id;
      this.hopdonglist[index].ngayhethan = newhopdong.ngayhethan;
      this.hopdonglist[index].ghichu = newhopdong.ghichu;
      this.hopdonglist[index].ngaylap = newhopdong.ngaylap;
      this.hopdonglist[index].idkh = newhopdong.idkh;

      }
  }

}
