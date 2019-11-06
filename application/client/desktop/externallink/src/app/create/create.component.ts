import { Component, OnInit } from '@angular/core';
import { CreateService } from './create.service';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

ticket = {
   name: '',
   ticketNo: '',
   message: ''
};
isPopupModal = false;

  constructor(
private createService: CreateService
  ) { }

  ngOnInit() {
    
  }

popupModal() {
 this.isPopupModal = true;
}
popupData(event)
 {
 this.ticket.name = event.data.name;
 this.ticket.ticketNo = event.data.id;
 this.isPopupModal = event.isPopupModal;
 }
cancelPopup(event)
 {
 this.isPopupModal = event;
 }
GpCreate() {
 this.createService.GpCreate(this.ticket)
  .subscribe(
    data => {
       console.log('data created successfully');
    },
    error => {
       console.log('cannot able to create the data');
    }
    );
}

}