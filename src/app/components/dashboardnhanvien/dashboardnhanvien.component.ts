import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { nguoidung } from 'src/app/classes/nguoidung.class';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboardnhanvien',
  templateUrl: './dashboardnhanvien.component.html',
  styleUrls: ['./dashboardnhanvien.component.css']
})
export class DashboardnhanvienComponent implements OnInit {
  closeResult: string ='';
  danhsachnhanvien: nguoidung[] = [];
  nguoidung : nguoidung = new nguoidung(0,"","","",true,"","") ;
  reload = false;


  constructor(
    private _danhsachnhanvien : UserService,
    private modalService: NgbModal,) { }

  public loadScript(url:string){
    let node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(node);
  }

  ngOnInit(): void {
    this.danhsachnhanvien = this._danhsachnhanvien.getAllNguoiDung();
    if(!this.reload){
      this.loadScript("assets/extra-libs/datatables.net/js/jquery.dataTables.min.js");
      this.loadScript("assets/dist/js/pages/datatable/datatable-basic.init.js");
      this.loadScript("assets/extra-libs/datatables.net-bs4/css/dataTables.bootstrap4.css");
      console.log("script")
    }
    console.log(this.danhsachnhanvien);
  }

 

  open(content: any){
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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
  opensuanguoidung(content: any, id: number){
    this.nguoidung = this._danhsachnhanvien.getNguoiDungById(id)[0];
    
    console.log(this.nguoidung);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = 'Closed with: ${result}';
  }, (reason) => {
    this.closeResult = 'Dismissed ${this.getDismissReason(reason)}';
  });
  }
  removeNguoiDung(id: number){
    this._danhsachnhanvien.deleteNguoiDung(id);
  }

  
  onSubmitAdd(f: NgForm){
    let newnhanvien = new nguoidung(this._danhsachnhanvien.getAllNguoiDung().length,f.controls.tennv.value, f.controls.username.value, f.controls.password.value, (f.controls.gioitinh.value === 'true'), f.controls.sdt.value, f.controls.diachi.value);
    this._danhsachnhanvien.addNguoiDung(newnhanvien,true);
    this.reload=true;
    this.ngOnInit();
    this.modalService.dismissAll();
  }

  onSubmitUpdate(f: NgForm){
    let newnhanvien = new nguoidung(f.controls.idnv.value,f.controls.tennv.value, f.controls.username.value, f.controls.password.value, (f.controls.gioitinh.value === 'true'), f.controls.sdt.value, f.controls.diachi.value);
    this._danhsachnhanvien.addNguoiDung(newnhanvien,false);
    this.reload=true;
    this.ngOnInit();
    this.modalService.dismissAll();
  }

}
