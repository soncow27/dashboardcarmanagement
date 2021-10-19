import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AsideComponent } from './components/aside/aside.component';
import { IndexComponent } from './components/index/index.component';
import { NavigationModule } from './components/navigation/navigation.module';
import { DashboardxeComponent } from './components/dashboardxe/dashboardxe.component';
import { ServiceXe } from './services/servicexe.service';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DashboardnhanvienComponent } from './components/dashboardnhanvien/dashboardnhanvien.component';
import { DashboardhopdongComponent } from './components/dashboardhopdong/dashboardhopdong.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    IndexComponent,
    DashboardxeComponent,
    DashboardnhanvienComponent,
    DashboardhopdongComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavigationModule,
    FormsModule,
    NgbModule,
    HttpClientModule
    
  ],
  providers: [ServiceXe],
  bootstrap: [AppComponent]
})
export class AppModule { }
