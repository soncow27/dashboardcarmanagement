export class hopdong{
    public id: number = 1;
    public ngayhethan: Date;
    public ghichu: boolean = false;
    public ngaylap: Date;
    public idkh : number = 0;
    constructor(id:number, ngayhethan:Date, ghichu:boolean, ngaylap:Date, idkh: number){
        this.id = id;
        this.ngayhethan = ngayhethan;
        this.ghichu = ghichu;
        this.ngaylap = ngaylap; 
        this.idkh = idkh;       
    }
}