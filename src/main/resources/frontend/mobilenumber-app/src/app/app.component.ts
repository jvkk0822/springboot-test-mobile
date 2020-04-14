import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  customer: any;
      message: string;

      constructor() { }

      ngOnInit() {
          this.customer = {
              mobileno: '0123456789'
          };
      }

      onSubmit() {
          this.message = 'Entered Mobile Number: ' + this.customer.mobileno;
      }

}
