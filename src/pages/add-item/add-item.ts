import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html'
})
export class AddItemPage {

	name;
	phonenumber;
  email;

	constructor(public nav: NavController, public view: ViewController) {

	}

	saveItem(){

		let newItem = {
		  name: this.name,
		  phonenumber: this.phonenumber,
      email: this.email
		};

		this.view.dismiss(newItem);

	}

	close(){
		this.view.dismiss();
	}

}
