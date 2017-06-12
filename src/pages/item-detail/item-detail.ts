import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {

  name;
  phonenumber;
  email;

  constructor(public navParams: NavParams){

  }

  ionViewDidLoad() {
    this.name = this.navParams.get('item').name;
    this.phonenumber = this.navParams.get('item').phonenumber;
    this.email = this.navParams.get('item').email;
  }

}
