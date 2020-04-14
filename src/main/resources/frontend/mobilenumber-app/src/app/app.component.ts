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
              firstName: 'Fred Template'
          };
      }

      onSubmit() {
          this.message = 'You typed: ' + this.customer.firstName;
      }

}
