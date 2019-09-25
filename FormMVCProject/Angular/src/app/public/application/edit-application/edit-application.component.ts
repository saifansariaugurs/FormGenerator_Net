import { Component, OnInit, ViewChild } from '@angular/core';
import { ApplicationTable } from 'src/app/Models/FormGenerator';
import { NgForm } from '@angular/forms';
import { CommonServiceService } from 'src/app/services/common-service.service';
import { _ } from "underscore";
import { actionType } from 'src/app/enum/common-enum.enum';
import Tabulator from 'tabulator-tables';
import { ActivatedRoute } from '@angular/router';
declare var bootbox:any;
@Component({
  selector: 'app-edit-application',
  templateUrl: './edit-application.component.html',
  styleUrls: ['./edit-application.component.css']
})
export class EditApplicationComponent implements OnInit {
  applicationData=new ApplicationTable();
  applicationDataTemp=new ApplicationTable();
  applicationParam=new ApplicationTable();
  accessList:any[]=[];
  statusList:any[]=[];
    exists: any;
  
    constructor(private commonservice: CommonServiceService,private route : ActivatedRoute) { }
  f: NgForm;
  ngOnInit() {
    this.accessList=[{"name":"Yes","value":true,"ischecked":false},{"name":"No","value":false,"ischecked":true}];
    this.statusList=[{"name":"Draft","value":1,"ischecked":true},{"name":"Active","value":2,"ischecked":false},{"name":"InActive","value":3,"ischecked":false},{"name":"Template","value":4,"ischecked":false}];
this.applicationData.status=1;
this.applicationData.publicTemplate=false;
this.applicationData.protectedApplication=false;
this.applicationData.action=actionType.SpecificRecord;
if(this.route.snapshot.paramMap.get("appId"))
this.applicationData.applicationId= Number( this.route.snapshot.paramMap.get("appId"));
this.manageApplication(this.applicationData);
    var actionIcon = function(cell, formatterParams){
      if(formatterParams.type === 1)
          return '<img src="../Bundles/AngularOutput/assets/images/settings.png" width="20">';
      else
          return '<i class="fa fa-cogs" aria-hidden="true"></i>';
  };

  var status_value = 0, tabulator, tabulatorChildren = [];
    var formTypes = ['', 'Personal', 'Private', 'Public', 'Open'];
    var formStatus = ['', 'Draft', 'Active', 'Inactive', 'Template'];
    
    tabulator =new Tabulator('#forms-table', {
        height:'80%',
        initialSort:[
            {column:"lastActivityDate", dir:"desc"}
        ],
        persistenceID:"appDetail",
        footerElement:"<span class='pull-left' id='no-of-forms'></span>",
        dataLoaded:function(data){
            //data - all data loaded into the table
            $('#forms-table .tabulator-footer #no-of-forms').text("Total Forms: " + data.length);
        },
        dataFiltered:function(filters, rows){
            //filters - array of filters currently applied
            //rows - array of row components that pass the filters
            $('#forms-table .tabulator-footer #no-of-forms').text("Total Forms: " + rows.length);
        },
        pagination: "local",
        paginationSize: 20,
        columns:[ //set column definitions for imported table data      
            {title:"Actions",field:"childActions",formatter:actionIcon, formatterParams:{type:2}, width:30, frozen: true, headerSort:false, align:"center", cellClick:function(e, cell){
                var rowData = cell.getRow().getData();
                var topicID = rowData.topicID;
                var formID = rowData.formID;
                var applicationId = rowData.applicationId;
                var appRole = typeof rowData.appRole !== 'undefined' ? rowData.appRole : 3;

                var formName = rowData.title,
                    topicName = rowData.topicTitle,
                    isAccessible = rowData.isAccessible;

                var formEditUrl = "{{ url('subforms/edit') }}/" + formID;
                var formDeleteUrl = "{{ url('subforms/delete') }}/" + formID;
                var formFilterUrl = "{{ url('subforms/filter-criteria') }}/" + formID;
                var formRoleUrl = "{{ url('user-forms/roles') }}/" + formID;

                var formSummaryUrl = "{{ url('summary') }}/" + formID;
                var formClearUrl = "{{ url('clear_records') }}/" + formID;
                var formEntryUrl = "{{ url('savedata') }}/" + formID;
                var formRecordUrl = "{{ url('records') }}/" + formID;

                if(appRole == 3){
                    var actions = '<div class="panel-blue text-center">'+    
                                '<div class="row">'+
                                '<div class="col-sm-12">'+
                                '<a class="btn btn-success btn-md entry-button" href="' + formEntryUrl + '"><i class="fa fa-plus" aria-hidden="true"></i> Entry</a>&nbsp;&nbsp;'+
                                '<a class="btn btn-info btn-md" href="' + formRecordUrl + '"><i class="fa fa-list-ol" aria-hidden="true"></i> Records</a>&nbsp;&nbsp;'+
                                '<a class="btn btn-default btn-md" href="' + formSummaryUrl + '"><i class="fa fa-th-list" aria-hidden="true"></i> Summary</a>&nbsp;&nbsp;'+
                                '<a href="javascript:;" onClick="formFunction(' + applicationId + ',' + topicID + ',' + formID + ',\'copy_form\',\'{{$url}}\')" class="btn btn-primary" title="Copy Form"><i class="fa fa-copy"></i> Copy Form</a>&nbsp;&nbsp;'+
                                '<a href="javascript:;" onClick="formFunction(' + applicationId + ',' + topicID + ',' + formID + ',\'copy_application\')" class="btn btn-primary" title="Copy Application"><i class="fa fa-copy"></i> Copy Application</a>'+
                                '<div class="form-group more_setup-wrap mt-15 mb-10"><input type="checkbox" class="show-more-settings" id="more_setup" name="more_setup">&nbsp;<label for="more_setup">Administrator Settings</label></div>'+
                                '<div class="form-group">'+
                                '<a class="btn btn-primary btn-md" href="' + formEditUrl + '"><i class="fa fa-edit" aria-hidden="true"></i> Edit Form</a>&nbsp;&nbsp;'+
                                '<a class="btn btn-default btn-md" href="' + formFilterUrl + '"><i class="fa fa-filter" aria-hidden="true"></i> Filter Criteria</a>&nbsp;&nbsp;'+
                                '<a class="btn btn-default btn-md" href="' + formRoleUrl + '"><i class="fa fa-user-tag" aria-hidden="true"></i> Form Roles</a>&nbsp;&nbsp;'+
                                '<button class="btn btn-danger btn-md" onClick="return formClear(\'' + formClearUrl + '\');"><i class="fa fa-eraser" aria-hidden="true"></i> Clear Records</button>&nbsp;&nbsp;'+
                                '<button class="btn btn-danger btn-md" onClick="return formDel(\'' + formDeleteUrl + '\');"><i class="fa fa-trash" aria-hidden="true"></i> Delete Form</button></div>'+
                                '<div class="form-group advance_setup-wrap mt-15 mb-10"><input type="checkbox" class="show-advance-settings" id="advance_setup" name="advance_setup">&nbsp;<label for="advance_setup">Advance Settings</label></div>'+
                                '<div class="form-group">'+
                                '<a href="" class="btn btn-primary btn-md"><i class="fa fa-edit" aria-hidden="true"></i> Edit Topic</a>&nbsp;&nbsp;'+
                                '<button class="btn btn-danger btn-md" title="Delete Menu" onClick="return topicDel(' + topicID + ');"><i class="fa fa-trash" aria-hidden="true"></i> Delete Topic</button>&nbsp;&nbsp;'+
                                '<a href="" class="btn btn-info group-actions" title="Quick Edit"><i class="fa fa-pen"></i> Quick Edit Form</a>&nbsp;&nbsp;'+
                                '<br/><a href="" class="btn btn-warning" title="Export to JSON"><i class="fa fa-download"></i> Export to JSON</a>&nbsp;&nbsp;'+                            
                                '<a href="" class="btn btn-warning" title="Export to Excel (Full)"><i class="fa fa-download"></i> Export to Excel (Full)</a>&nbsp;&nbsp;'+
                                '<a href="" class="btn btn-warning" title="Export to Excel (Basic)"><i class="fa fa-download"></i> Export to Excel (Basic)</a>&nbsp;&nbsp;'+
                                '</div></div></div></div></div>';
                }else{
                    var actions = '<div class="panel-blue text-center">'+    
                                '<div class="row">'+
                                '<div class="col-sm-12">'+
                                '<a class="btn btn-success btn-md entry-button" href="' + formEntryUrl + '"><i class="fa fa-plus" aria-hidden="true"></i> Entry</a>&nbsp;&nbsp;'+
                                '<a class="btn btn-info btn-md" href="' + formRecordUrl + '"><i class="fa fa-list-ol" aria-hidden="true"></i> Records</a>&nbsp;&nbsp;'+
                                '<a class="btn btn-default btn-md" href="' + formSummaryUrl + '"><i class="fa fa-th-list" aria-hidden="true"></i> Summary</a>&nbsp;&nbsp;'+                            
                                '<a href="javascript:;" onClick="formFunction(' + applicationId + ',' + topicID + ',' + formID + ',\'copy_form\',\'{{$url}}\')" class="btn btn-primary" title="Copy Form"><i class="fa fa-copy"></i> Copy Form</a>&nbsp;&nbsp;'+
                                '<a href="javascript:;" onClick="formFunction(' + applicationId + ',' + topicID + ',' + formID + ',\'copy_application\')" class="btn btn-primary" title="Copy Application"><i class="fa fa-copy"></i> Copy Application</a>'+
                                '<a href="" class="btn btn-warning" title="Export to Form"><i class="fa fa-download"></i> Export to Form</a>&nbsp;&nbsp;'+
                                '<a href="" class="btn btn-warning" title="Export to Excel (Full)"><i class="fa fa-download"></i> Export to Excel (Full)</a>&nbsp;&nbsp;'+
                                '<a href="" class="btn btn-warning" title="Export to Excel (Basic)"><i class="fa fa-download"></i> Export to Excel (Basic)</a>&nbsp;&nbsp;'+
                                '</div></div></div>';
                }
                bootbox.dialog({
                    backdrop: true,
                    onEscape: true,
                    title: formName + ' (' + topicName + ")",
                    //size: 'small',
                    message: actions
                })
                .on('shown.bs.modal', function (e) {
                    if(Object.keys(rowData).length){
                        //$('.bootbox.modal .form-actions').removeClass('disabled hidden');
                        if(!isAccessible){                
                            $('.bootbox.modal a.entry-button').addClass('disabled');
                        }
                        /*if(userRole > 1){
                            $('.bootbox.modal .group-actions').removeClass('disabled hidden');
                        }else{
                            $('.bootbox.modal .group-actions').addClass('disabled hidden');
                        } */           
                    }else{
                        $('.bootbox.modal .group-actions,.bootbox.modal .form-actions').addClass('disabled hidden');
                    }
                });
                // $( "div.form-group.more_setup-wrap", '.panel-blue' ).nextUntil( "div.form-group.advance_setup-wrap" ).hide();
                // $( "div.form-group.advance_setup-wrap", '.panel-blue' ).nextAll( "div.form-group" ).hide();
            }},
            {title:"App ID", field: 'applicationId', visible:false},
            {title:"Topic ID", field: 'topicID', visible:false},
            {title:"Form ID", field: 'formID', visible:false},        
            {title:"Form Name", field: 'title', headerFilter: true, formatter: 'html', cellClick:function(e, cell){
                var rowData = cell.getRow().getData();
                window.location.href = "{{ url('records') }}/" + rowData.formID;
            }},
            {title:"Topic Name", field: 'topicTitle', headerFilter: true},
            {title:"Form Tags", field: 'formTag', headerFilter: true},
            {title:"Form Type", field: 'formType', headerFilter:"select", headerFilterParams:{values:formTypes}},
            {title:"Last Activity", field:"lastActivityDate",headerFilter:true, sorter:'datetime', sorterParams:{format:"{{config('app.datetime_format_js')}}",alignEmptyValues:"bottom"}},
            {title:"Number of Records", field:"totalRecords",headerFilter:true, sorter:"number", align:'right'},
            {title:"Form Status", field: 'status', headerFilter:"select", headerFilterParams:{values:formStatus}}
        ],
        ajaxURL: ""
    });
    
   // setTabulatorHeaderFilter(tabulator);
    
   
    
    

  }

   formFunction(applicationId, topicID, formID, type, url=''){
    if(type==="copy_application"){
        bootbox.dialog({
            onEscape: true,
            title: "Copy Application",
            message:'<div class="row">'+
                    '<div class="col-sm-12">'+
                    '<form class="form-horizontal" id="quickFrm" action="{{url("getSave")}}">'+
                    '<input type="hidden" name="form_type" value="copy_application" /><input type="hidden" name="form_id" value="'+applicationId+'" />'+
                    '<div class="form-group"><label class="control-label col-sm-4">Application name :</label><div class="col-sm-6"><input type="text" name="form_name" id="frmName" class="form-control"></div></div>'+
                    '<div class="form-group"><div class="col-sm-offset-4 col-sm-8">'+
                    '<button class="btn btn-primary">Save</button> &nbsp;'+
                    '<button class="btn btn-default" data-dismiss="modal">Cancel</button></div></div></form>'+
                    '</div></div>'
        });
    }
    if(type==="copy_form"){
        var redirect="{{url('getSave')}}";
        $.ajax({
            type:"post",
            url:url,
            success:function(data){
                data=JSON.parse(data);
                if(data){
                    bootbox.dialog({
                        onEscape: true,
                        //title: "Copy Form",
                        message:'<div class="row">'+
                                '<div class="col-sm-12">'+
                                '<ul class="nav nav-tabs" role="tablist">'+
                                '<li class="nav-item active"><a class="nav-link" data-toggle="tab" href="#home" role="tab">Quick Form</a></li>'+
                                '<li class="nav-item"><a class="nav-link" data-toggle="tab" href="#profile" role="tab">Advance Form</a></li>'+
                                '</ul><div class="tab-content">'+
                                '<div class="tab-pane active" id="home" role="tabpanel">'+
                                '<form class="form-horizontal" id="quickFrm" action="'+redirect+'">'+
                                '<div class="col-sm-12 form-group"><input type="hidden" name="btnType" value="copy_btn" /><input type="hidden" name="copyFormId" value="'+formID+'" />'+
                                '<div class="col-sm-4"><label class="control-label">Enter Form Name :</label><input type="hidden" name="form_type" value="quick" /></div>'+
                                '<div class="col-sm-8"><input type="text" name="form_name" id="frmName" class="form-control"></div></div>'+
                                '<div class="col-sm-12 form-group">'+
                                '<div class="col-sm-4"></div>'+
                                '<div class="col-sm-8"><label><input type="checkbox" name="check_value" checked/> Put the Form in \"General Application\"</label></div></div>'+
                                '<div class="col-sm-offset-4 col-sm-8 navbar-btn btn-sm">'+
                                '<button class="btn btn-primary">Create</button> &nbsp;'+
                                '<button class="btn btn-default" data-dismiss="modal">Cancel</button></div></form></div>'+
                                '<div class="tab-pane" id="profile" role="tabpanel">'+
                                '<form class="form-horizontal" id="advancedForm" action="'+redirect+'">'+
                                '<div class="col-sm-12 form-group"><input type="hidden" name="form_type" value="advanced" />'+
                                '<div class="col-sm-4"><input type="hidden" name="btnType" value="copy_btn" /><input type="hidden" name="copyFormId" value="'+formID+'" />'+
                                '<label class="control-label">Enter Form Name :</label></div>'+
                                '<div class="col-sm-8">'+
                                '<input type="text" class="form-control" name="form_name" id="frmName" /></div></div>'+
                                '<div class="col-sm-12 form-group">'+
                                '<div class="col-sm-4"><label class="control-label">Select Application :</label></div>'+
                                '<div class="col-sm-8">'+data.appOption+'</div></div>'+
                                '<div class="col-sm-12 form-group">'+
                                '<div class="col-sm-4"></div>'+
                                '<div class="col-sm-8"><a href="javascript:;" onclick="app_link()"><i class="fa fa-plus"></i> Add Application</a></div></div>'+
                                '<div class="col-sm-12 form-group">'+
                                '<div class="col-sm-4"><label class="control-label">Select Topic :</label></div>'+
                                '<div class="col-sm-8">'+data.topicOption+'</div></div>'+
                                '<div class="col-sm-12 form-group">'+
                                '<div class="col-sm-4"></div>'+
                                '<div class="col-sm-8"><a href="javascript:;" onclick="topic_link(\'advancedForm\')"><i class="fa fa-plus"></i> Add Topic</a></div></div>'+
                                '<div class="col-sm-offset-4 col-sm-8 navbar-btn btn-sm"><button class="btn btn-primary">Create</button>&nbsp;'+
                                '<button class="btn btn-default" data-dismiss="modal">Cancel</button></div>'+
                                '</form></div></div></div></div>'
                    });
                }
            },
            error:function(error){console.log(error);}
        });
    }
}


manageApplication(data: any): void {
  this.commonservice.manageApplication(data).subscribe(
    dataList => {   
      if(data.action==6){
        if(dataList.length>0)
        this.applicationData=dataList[0];
        this.applicationDataTemp = {...this.applicationData};    
        $("#publicTemplate").prop("checked",this.applicationData.publicTemplate);
        $("#protectedApplication").prop("checked",this.applicationData.protectedApplication);
      } else{    
      this.exists = _.findWhere(dataList, { res: 1 });
      if (this.exists) {
        alert(this.exists.Message)
      }else{
        this.exists = _.findWhere(dataList, { res: -1 });
        alert(this.exists.Message)
      }
    }
    },
    err => console.log(err)
  );
}


onUpdate(){
  if(!this.applicationData.applicationTitle){
    alert('Please Enter Title')
    return;
  }
  this.applicationData.action=actionType.updateByRecord;
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

 getFunction(url, applicationID, method){
  method = (method !== undefined ? method : 'default');
  
  // if(method === 'add-form')
  //  //   addForm(url, applicationID);
  // if(method === 'add-queue')
  //   //  addQueue(url, applicationID);
  // else
   if(method === "copy-application"){
      bootbox.dialog({
          onEscape: true,
          title: "Copy Application",
          message:'<div class="row">'+
                  '<div class="col-sm-12">'+
                  '<form class="form-horizontal" id="quickFrm" action="{{url("getSave")}}">'+
                  '<input type="hidden" name="form_type" value="copy_application" /><input type="hidden" name="form_id" value="'+applicationID+'" />'+
                  '<div class="form-group"><label class="control-label col-sm-4">Application Name :</label><div class="col-sm-6"><input type="text" name="form_name" class="form-control"></div></div>'+
                  '<div class="form-group"><label class="control-label col-sm-4">Application Tag :</label><div class="col-sm-6"><input type="text" name="app_tag" class="form-control"></div></div>'+
                  '<div class="form-group"><div class="col-sm-offset-4 col-sm-8">'+
                  '<button class="btn btn-primary">Save</button> &nbsp;'+
                  '<button class="btn btn-default" data-dismiss="modal">Cancel</button></div></div></form>'+
                  '</div></div>'
      });
  }
  else if(method === 'delete-app'){
      if(confirm('Are you sure you want to delete it?')){
          window.location.href = url + "/" + applicationID;
      }
  }
  else if(method === "app-roles"){
      window.location.href = url + "/" + applicationID;
      return false;
  }
  return false;
}
openAddNewForm(){
  var diff=""

  bootbox.dialog({
    onEscape: true,
    className: 'add-new-form-modal',
    message:'<div class="container pad-0">'+
            '<div class="panel-blue pad-0">'+
            '<div class="panel-body">'+
            '<div class="row">'+
            '<div class="col-sm-6">'+
   '<div class="tab-pane" id="profile" role="tabpanel">'+
    '<form class="form-horizontal" id="advancedForm" action="{{url("getSave")}}">'+

    '<div class="col-sm-12 form-group">'+
    '<div class="col-sm-4"><label class="control-label">Select Application :</label></div>'+
    '<div class="col-sm-8">'+this.applicationDataTemp.applicationTitle+'</div></div>'+  
    '<div class="col-sm-12 form-group">'+
    '<div class="col-sm-4"><label class="control-label">Select Topic :</label></div>'+
    '<div class="col-sm-8">+data.topicOption+</div></div>'+
    '<div class="col-sm-12 form-group">'+
    '<div class="col-sm-4"></div>'+
    '<div class="col-sm-8"><a href="javascript:;" onclick="topic_link(\'advancedForm\')"><i class="fa fa-plus"></i> Add New Topic</a></div></div>'+
    '<div class="col-sm-12 navbar-btn btn-sm text-center"><button class="btn btn-primary">Create '+(diff=="check" ? "Queue" : "Form")+'</button>&nbsp;'+
    '<button class="btn btn-default" data-dismiss="modal">Cancel</button></div>'+
    '</form></div>'+
    '</div></div></div></div></div>'
});
}

addNewTopic(){
  var formName="";
  bootbox.prompt({
    title: 'Add New Topic',
    placeholder: 'Enter Topic Name',
    value: $.trim(formName),
    buttons: {
        confirm: {
            label: 'Submit'
        }
    },
    callback: function(value){
        if(value){
          
        }
    }
});
}

}
