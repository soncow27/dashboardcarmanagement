import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { hopdong } from 'src/app/classes/hopdong.class';
import { HopdongService } from 'src/app/services/hopdong.service';

@Component({
  selector: 'app-dashboardhopdong',
  templateUrl: './dashboardhopdong.component.html',
  styleUrls: ['./dashboardhopdong.component.css']
})
export class DashboardhopdongComponent implements OnInit {
  closeResult: string ='';
  danhsachhopdong: hopdong[] = [];
  hopdong : hopdong = new hopdong(0,new Date(""),false,new Date(""),0) ;
  reload = false;
  private _danhsachnhanvien: any;

  constructor(
    private _danhsachhopdong : HopdongService,
    private modalService: NgbModal,) { }

  public loadScript(url:string){
    let node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(node);
  }

  ngOnInit(): void {
    this.danhsachhopdong = this._danhsachhopdong.getAllHopDong();
    if(!this.reload){
      this.loadScript("assets/extra-libs/datatables.net/js/jquery.dataTables.min.js");
      this.loadScript("assets/dist/js/pages/datatable/datatable-basic.init.js");
      this.loadScript("assets/extra-libs/datatables.net-bs4/css/dataTables.bootstrap4.css");
      console.log("script")
    }
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
  opensuahopdong(content: any, id: number){
    this.hopdong = this._danhsachhopdong.getHopDongById(id)[0];
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = 'Closed with: ${result}';
  }, (reason) => {
    this.closeResult = 'Dismissed ${this.getDismissReason(reason)}';
  });
  }
  removeHopDong(id: number){
    this._danhsachhopdong.deleteHopDong(id);
  }

  
  onSubmitAdd(f: NgForm){
    let newhopdong = new hopdong(this._danhsachhopdong.getAllHopDong().length+1,new Date(f.controls.ngayhethan.value), f.controls.ghichu.value, new Date(f.controls.ngaylap.value), f.controls.idkh.value);
    console.log(newhopdong);
    this._danhsachhopdong.addHopDong(newhopdong,true);
    this.reload=true;
    this.ngOnInit();
    this.modalService.dismissAll();
  }

  onSubmitUpdate(f: NgForm){
    let newhopdong = new hopdong(f.controls.idhd.value,new Date(f.controls.ngayhethan.value), f.controls.ghichu.value, new Date(f.controls.ngaylap.value), f.controls.idkh.value);
    this._danhsachhopdong.addHopDong(newhopdong,false);
    this.reload=true;
    this.ngOnInit();
    this.modalService.dismissAll();
  }
  parseDate(dateString: string): Date {
    if (dateString) {
        return new Date(dateString);
    }
    return new Date("01/01/2021");
  }
}
