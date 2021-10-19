import { Component, Input, OnInit } from '@angular/core';
import { xe } from 'src/app/classes/xe.class';
import { ServiceXe } from 'src/app/services/servicexe.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import {HttpClient} from '@angular/common/http';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-dashboardxe',
  templateUrl: './dashboardxe.component.html',
  styleUrls: ['./dashboardxe.component.css']
})


export class DashboardxeComponent implements OnInit {
  closeResult: string ='';
  danhsachxe: xe[] = [];
  xe : xe = new xe("","","","","","","","") ;
  reload = false;


  constructor(  
    private _danhsachxe : ServiceXe,
    private modalService: NgbModal,
    private http:HttpClient
    ) { }   
    
  public loadScript(url:string){
    let node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(node);
  }

  ngOnInit(): void {
    this.danhsachxe = this._danhsachxe.getAllXe();
    if(!this.reload){
      this.loadScript("assets/extra-libs/datatables.net/js/jquery.dataTables.min.js");
      this.loadScript("assets/dist/js/pages/datatable/datatable-basic.init.js");
      this.loadScript("assets/extra-libs/datatables.net-bs4/css/dataTables.bootstrap4.css");
    }
    console.log(this.danhsachxe);
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
  opensuaxe(content: any, id: string){
    this.xe = this._danhsachxe.getXeById(id)[0];
    
    console.log(this.xe);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = 'Closed with: ${result}';
  }, (reason) => {
    this.closeResult = 'Dismissed ${this.getDismissReason(reason)}';
  });
  }
  removeXe(id: string){
    this._danhsachxe.deleteXe(id);
  }

  updateXe(id: string){

  }
  
  onSubmitAdd(f: NgForm){
    let newxe = new xe(f.controls.idxe.value,f.controls.tenxe.value,f.controls.anhxe.value,f.controls.giathuexe.value,f.controls.taixe.value,f.controls.hangxe.value,f.controls.socho.value,f.controls.diadiem.value);
    this._danhsachxe.addXe(newxe,true);
    this.reload=true;
    this.ngOnInit();
    this.modalService.dismissAll();
  }

  onSubmitUpdate(fupdate: NgForm){
    let newxe = new xe(fupdate.controls.idxe.value,fupdate.controls.tenxe.value,fupdate.controls.anhxe.value,fupdate.controls.giathuexe.value,fupdate.controls.taixe.value,fupdate.controls.hangxe.value,fupdate.controls.socho.value,fupdate.controls.diadiem.value);
    this._danhsachxe.addXe(newxe,false);
    this.reload=true;
    this.ngOnInit();
    this.modalService.dismissAll();
  }

}
