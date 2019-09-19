import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private firebaseobj: AngularFireDatabase) { }
  customerList: AngularFireList<any>;

  form = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    mobile: new FormControl('', [Validators.required, Validators.minLength(10)]),
    location: new FormControl('')
  });

  getCustomers() {
    this.customerList = this.firebaseobj.list('customers');
    return this.customerList.snapshotChanges();
  }

  insertCustomer(customer) {
    this.customerList.push({
      fullName: customer.fullName,
      email: customer.email,
      mobile: customer.mobile,
      location: customer.location
    });
  }

  populateForm(customer) {
    this.form.setValue(customer);
  }

  updateCustomer(customer) {
    this.customerList.update(customer.$key,
      {
        fullName: customer.fullName,
        email: customer.email,
        mobile: customer.mobile,
        location: customer.location
      });
  }

  deleteCustomer($key: string) {
    this.customerList.remove($key);

  }
}
