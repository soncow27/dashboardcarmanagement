import { Injectable } from '@angular/core';
import { xe } from '../classes/xe.class';


@Injectable({
  providedIn: 'root'
})
export class ServiceXe {
  xelist : any[] = [
    new xe("x01", "Xe ô tô 4 chỗ Toyota Vios", "Hinh_1.jpg", "900.000đ", "Nguyễn Văn Nam", "Toyota", "4 chỗ", "Củ Chi"),
    new xe("x02", "Xe du lịch 4 chỗ Mazda 2", "Hinh_2.jpg", "1.100.000đ", "Trịnh Hoàng Anh", "Mazda", "4 chỗ", "Cần Giờ"),
    new xe("x03", "Xe ô tô 4 chỗ Kia K3", "Hinh_3.jpg", "1.100.000đ", "Lê Hoàng Sang", "Kia", "4 chỗ", "Đại Nam"),
    new xe("x04", "Xe du lịch 4 chỗ Honda Civic ", "Hinh_4.jpg", "900.000đ", "Trần Văn Tám", "Honda", "4 chỗ", "Biên Hòa"),
    new xe("x05", "Xe 4 chỗ ngồi Mazda 6", "Hinh_5.jpg", "1.300.000đ", "Lê Tứ", "Mazda", "4 chỗ", "Tây Ninh"),
    new xe("x06", "Xe ô tô 7 chỗ Kia Sedona", "Hinh_6.jpg", "1.100.000đ", "Hoàng Trương Định", "Kia", "7 chỗ", "Long An"),
  ];

  constructor() { }
  getAllXe(){
    return this.xelist;
  }

  deleteXe(id:string) {
    const index = this.xelist.findIndex(xe=> xe.id === id);
    this.xelist.splice(index,1);
  }

  getXeById (id:string){
    return this.xelist.filter(xe => xe.id === id);
  }
  
  addXe(newxe : xe, addorupdate: boolean){
    if (addorupdate) {
      this.xelist.push(newxe);
      }
      else
      {
      let index = this.xelist.findIndex(xe => xe.id == newxe.id)
      this.xelist[index].id = newxe.id;
      this.xelist[index].tenxe = newxe.tenxe;
      this.xelist[index].anh = newxe.anh;
      this.xelist[index].giathue = newxe.giathue;
      this.xelist[index].taixe = newxe.taixe;
      this.xelist[index].hangxe = newxe.hangxe;
      this.xelist[index].socho = newxe.socho;
      this.xelist[index].diadiem = newxe.diadiem;
      }
  }
}