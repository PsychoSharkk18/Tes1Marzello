import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}
  TempatNama : String
  TempatNRP: String
  TempatEmail: String
  TempatTelp: String
  Nama : string
  NRP : string
  email : string
  telpon : string
  btnKumpul(){
    this.TempatNama=this.Nama
    this.TempatNRP=this.NRP
    this.TempatEmail=this.email
    this.TempatTelp=this.telpon
  }

}
