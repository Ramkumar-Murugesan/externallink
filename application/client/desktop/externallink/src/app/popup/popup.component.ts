import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PopupService } from './popup.service';



@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

columnDefs = [
{headerName: 'ID', field: 'id'},
{headerName: 'Name', field: 'name'},
{headerName: 'ParentID', field: 'parent_id'}];
@Input() isPopupModal = false;
@Output() popupData = new EventEmitter();
@Output() cancelPopup = new EventEmitter();
ticket = {
   name: '',
   ticketNo: '',
   message: ''
};
gridApi: any;
gridColumnApi: any;
rowSelection = 'single';
defaultColDef = { editable: false, sortable: true, resizable: true, filter: true };
paginationPageSize = 10;
rowData: any = [];
categories = {
   id: '',
   name: '',
   parent_id: ''
};

  constructor(
private popupService: PopupService
  ) { }

  ngOnInit() {
    this.GpGetAllValues();
  }

onGridReady(params) {
this.gridApi = params.api;
this.gridApi.sizeColumnsToFit();
this.gridColumnApi = params.columnApi;
}
submit() {
this.popupData.emit({ data: this.gridApi.getSelectedRows()[0], isPopupModal: false });
}
cancel(event) {
this.cancelPopup.emit(false);
}
GpGetAllValues() {
 this.popupService.GpGetAllValues()
  .subscribe(
    data => {
       console.log('successfully get all data --- ', data);
       this.rowData = data.categories;
    },
    error => {
       console.log('cannot able to get all data --- ', error);
    }
    );
}

}