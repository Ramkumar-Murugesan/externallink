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
categoriesList;;

  constructor(
private popupService: PopupService
  ) { }

  ngOnInit() {
    this.GpGetNounById();
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
GpGetNounById() {
 this.popupService.GpGetNounById(queryId)
  .subscribe(
    data => {
       console.log('successfully get the data by id --- ', data);
   this.categoriesList = data.categories;
    },
    error => {
       console.log('cannot able to get the data using its id--- ', error);
    }
    );
}

}