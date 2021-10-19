export class nguoidung{
    public id: number= 0;
    public tennv: string = "";
    public username: string = "";
    public password: string="";
    public gioitinh: boolean = true;
    public sdt: string="";
    public diachi: string="";
    constructor(id: number, tennv:string, username:string, password:string, gioitinh:boolean, sdt:string, diachi:string){
        this.id = id;
        this.tennv = tennv;
        this.username = username;
        this.password = password;
        this.gioitinh = gioitinh;
        this.sdt = sdt;
        this.diachi = diachi;     
    }
}