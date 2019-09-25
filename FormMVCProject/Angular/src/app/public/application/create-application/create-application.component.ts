import { Component, OnInit, ViewChild } from '@angular/core';
import { ApplicationTable } from 'src/app/Models/FormGenerator';
import { NgForm } from '@angular/forms';
import { CommonServiceService } from 'src/app/services/common-service.service';
import { _ } from "underscore";
import { actionType } from 'src/app/enum/common-enum.enum';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-create-application',
  templateUrl: './create-application.component.html',
  styleUrls: ['./create-application.component.css']
})
export class CreateApplicationComponent implements OnInit {
applicationData=new ApplicationTable();
accessList:any[]=[];
statusList:any[]=[];
  exists: any;

  constructor(private commonservice: CommonServiceService,public translate: TranslateService) { }
 
  f: NgForm;
  ngOnInit() {
    this.accessList=[{"name":"Yes","value":true,"ischecked":false},{"name":"No","value":false,"ischecked":true}];
    this.statusList=[{"name":"Draft","value":1,"ischecked":true},{"name":"Active","value":2,"ischecked":false},{"name":"InActive","value":3,"ischecked":false},{"name":"Template","value":4,"ischecked":false}];
this.applicationData.status=1;
this.applicationData.publicTemplate=false;
this.applicationData.protectedApplication=false;
  }

  changeCheckbox(type, event) {
    if (type==1) {
      this.applicationData.publicTemplate=event.target.checked;
    }
    if (type==2) {
      this.applicationData.protectedApplication=event.target.checked;
    }
  }
  manageApplication(data: any): void {
    this.commonservice.manageApplication(data).subscribe(
      dataList => {        
        this.exists = _.findWhere(dataList, { res: 1 });
        if (this.exists) {
          alert(this.exists.Message)
        }else{
          this.exists = _.findWhere(dataList, { res: -1 });
          alert(this.exists.Message)
        }
      },
      err => console.log(err)
    );
  }

  onSubmit(){
    if(!this.applicationData.applicationTitle){
      alert('Please Enter Title')
      return;
    }
    this.applicationData.action=actionType.insert;
    if(!this.applicationData.publicTemplate){
      this.applicationData.publicTemplate=false;
    }
    if(!this.applicationData.protectedApplication){
      this.applicationData.protectedApplication=false;
    }
    if(!this.applicationData.status){
      this.applicationData.status=0;
    }
    this.manageApplication(this.applicationData);
  }

}
