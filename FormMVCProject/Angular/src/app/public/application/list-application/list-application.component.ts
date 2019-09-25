import { Component, OnInit } from '@angular/core';
import Tabulator from 'tabulator-tables';
import { ApplicationTable } from 'src/app/Models/FormGenerator';
import { CommonServiceService } from 'src/app/services/common-service.service';
//import * as bootbox from 'bootbox'
declare var bootbox:any;
import { _ } from "underscore";
import { actionType } from 'src/app/enum/common-enum.enum';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-list-application',
  templateUrl: './list-application.component.html',
  styleUrls: ['./list-application.component.css']
})
export class ListApplicationComponent implements OnInit {

    applicationData=new ApplicationTable();

      exists: any;
    
      constructor(private commonservice: CommonServiceService,public translate: TranslateService) { }
  
    ngOnInit() {
    //   //called after the constructor and called  after the first ngOnChanges()
    //   var tableData = [
    //     { id: 1, name: "Billy Bob", age: "12", gender: "male", height: 1, col: "red", dob: "", cheese: 1 },
    //     { id: 2, name: "Mary May", age: "1", gender: "female", height: 2, col: "blue", dob: "14/05/1982", cheese: true },
    //   ]
  
    //   var table = new Tabulator("#application-table", {
    //    // data: tableData, //set initial table data
    //    ajaxURL: "https://localhost:44303/api/FormAPI/GetApplicationList",
    //  //  ajaxParams:{key1:"value1", key2:"value2"}, //ajax parameters
    //   //ajaxConfig:"post", //ajax HTTP request type
    //     columns: [
    //       { title: "applicationTitle", field: "applicationTitle" },
         
    //     ],
    //     ajaxResponse:function(url, params, response){
    //       //url - the URL of the request
    //       //params - the parameters passed with the request
    //       //response - the JSON object returned in the body of the response.
    
    //       return response; //pass the data array into Tabulator
    //    },
    //   });
  
    var status_value = 0, tabulator, tabulatorChildren = [];
    var formTypes   = ['', 'Personal', 'Private', 'Public', 'Open'];
    var formStatus  = ['', 'Draft', 'Active', 'Inactive', 'Template'];
    //custom formatter definition
    var arrowIcon = function(cell, formatterParams){
        return "<i class='glyphicon glyphicon-chevron-right'></i>";
    };
    //custom formatter definition
    var actionIcon = function(cell, formatterParams){
        if(formatterParams.type === 1)
            return '<img src="../Bundles/AngularOutput/assets/images/settings.png" width="20">';
        else
            return '<i class="fa fa-cogs" aria-hidden="true"></i>';
    };
  
   // var tabulator = $("input[name=tabulator]").val();
    var itemName = tabulator + 'Actions';
    var actionObj = JSON.parse(localStorage.getItem(itemName));
  
    if(actionObj && actionObj['responsive']){
        $(window).resize(function(){
            tabulator.redraw();
        });
    }
    tabulator =new Tabulator('#application-table', {
        placeholder:"No application.",
        selectable:true,
        movableRows: true,
        responsiveLayout: (actionObj ? actionObj['responsive'] : false),
        persistenceID: "E",
        //index:"applicationId",
        columns:[ //Define Table Columns            
            {title:"Actions",field:"parentActions",formatter:actionIcon, formatterParams:{type:1}, width:50, frozen: true, headerSort:false, align:"center", cellClick:function(e, cell){
                var applicationId = cell.getRow().getData().applicationId;
                var applicationName = cell.getRow().getData().applicationTitle;
                var applicationStatus = cell.getRow().getData().status;
                var applicationCycle = cell.getRow().getData().cycle;
                var applicationPrivacy = cell.getRow().getData().protected;
                var applicationRole = typeof cell.getRow().getData().role != 'undefined' ? cell.getRow().getData().role : 3;
                
                var prototypeActions = '';
                
                var actionsPopup = '<div class="panel-blue">'+    
                            '<div class="row">'+
                            '<div class="col-sm-12">'+                            
                            '<form class="form-inline app-pdf-search mb-0" autocomplete="off">'+
                                '<div class="input-group mb-10">'+
                                    '<input type="hidden" id="applicationId" class="form-control" value="' + applicationId + '">'+
                                    '<input type="text" id="keyword" class="form-control" placeholder="Search in pdf attachments...">'+
                                    '<span class="input-group-btn">'+
                                        '<button class="btn btn-default" type="submit"><i class="fa fa-search" aria-hidden="true"></i> Search</button>'+
                                    '</span>'+
                                '</div>'+
                                '<button type="button" onclick="groupBy(\'formTag\', ' + applicationId + ')" name="group-rows" class="btn btn-danger mb-10 formTag"> <span class="show-rating"><i class="fa fa-object-group"></i> Group Forms by Tags</span> <span class="hide-rating"><i class="fa fa-object-ungroup"></i> Remove Group</span> </button>'+
                                '<button type="button" class="btn btn-success btn-md mb-10" onClick="getFunction()"><i class="fa fa-plus"></i> Add Form</button>\n\
                                <a href="" class="btn btn-warning btn-md mb-10"><i class="fa fa-download"></i> Download attachments</a>';
  
                                if(applicationPrivacy == 'No'){ actionsPopup += '<button type="button" class="btn btn-primary btn-md mb-10" onClick="getFunction()"><i class="fa fa-clone"></i> Copy Application</button>'; }
                                if(applicationRole == 3){
                                    actionsPopup += '<button type="button" class="btn btn-default btn-md mb-10" onClick="getFunction()"><i class="fa fa-users"></i> Application Roles</button>'+
                                                    '<button type="button" class="btn btn-danger btn-md mb-10" onclick="getFunction()"><i class="fa fa-trash"></i> Delete Application</button>';
                                }
                    actionsPopup += prototypeActions + '</form>'+
                            '</div></div></div></div>';
                    
                bootbox.dialog({
                    backdrop: true,
                    onEscape: true,
                    title: applicationName + " - Actions",
                    //size: 'small',
                    message: actionsPopup
                });
                
            }},
            {title:"Move Row",field:"rowHandle", rowHandle:true, formatter:"handle", headerSort:false, width:35, minWidth:30},            
            {title:"Expand Row",field:"subItems", formatter:arrowIcon, width:35, headerSort:false, align:"center", cellClick:function(e, cell){
                var applicationId = cell.getRow().getData().applicationId;
                if($(cell.getElement()).is('.active')) {
                    $(cell.getRow().getElement()).find('.table-wrapper').slideUp();
                    $(cell.getElement()).removeClass('active');
                } else {
                    $(cell.getRow().getElement()).find('.table-wrapper').slideDown();
                    $(cell.getElement()).addClass('active');
                    
                    var table = tabulatorChildren[applicationId];
                    if(cell.getRow().getData().otherApp){
                        table.setData("{{ url('otherAppRecords') }}/" + applicationId);
                    }else{
                        table.setData("{{ url('appRecords') }}/" + applicationId);
                    }
                }
                
                             
            }},
            {title:"Application Id",field:"applicationId",visible:false},
            {title:"Application Title", field:"applicationTitle",formatter:"html", align:"left",headerFilter:true, cellClick:function(e, cell){
                if(!cell.getRow().getData().otherApp){
                    var applicationId = cell.getRow().getData().applicationId;
                   // alert(applicationId);
                    window.location.href ='application/edit/'+applicationId;
                }
            }},
            {title:"Application Tag", editor:"textarea", field:"applicationTag", align:"left",headerFilter:"input"},
            {title:"Public Template", field:"publicTemplateText",editor:"select", editorParams:{values:['Yes', 'No']}, headerFilter:"select", headerFilterParams:{values:['', 'Yes', 'No']}},
            {title:"Status",field:"StatusName",editor:"select", editorParams:{values:['Draft', 'Active', 'Inactive', 'Template']}, headerFilter:"select", headerFilterParams:{values:formStatus}},
            {title:"Created At",field:"created_at",headerFilter:true,sorter:'datetime', sorterParams:{format:"{{config('app.datetime_format_js')}}",alignEmptyValues:"bottom"}}
        ],
        cellEdited:function(cell){
            //This callback is called any time a cell is edited
            var input = []; var json={}; var columnName = cell.getColumn().getField();
            json[columnName] = (columnName === "StatusName" ? formStatus.indexOf(cell.getValue()) : cell.getValue());
            //input['url'] = "{{url('update_custom')}}";            
            ///input['data'] = {'table':'application','update':json,'where' : {applicationId : cell.getRow().getData().applicationId}};
            var appid=cell.getRow().getData().applicationId;
            var publicTemplate= (columnName === "publicTemplateText" ? (cell.getValue()=="Yes"?true:false):(cell.getRow().getData().publicTemplateText=="Yes"?true:false));
            var StatusName= (columnName === "StatusName" ? formStatus.indexOf(cell.getValue()) :cell.getRow().getData().status) ;
            var applicationTag= (columnName === "applicationTag" ? cell.getValue():cell.getRow().getData().applicationTag);
            $.ajax({
                type: "POST",
                url: 'https://localhost:44303/api/FormAPI/ManageApplication',
                data: {action: 2,applicationId:appid,applicationTag:applicationTag,publicTemplate:publicTemplate,status:StatusName},
                beforeSend: function() {
                   // showLoader("#application-table");
                   console.log('its Moving')
                },
                complete: function() {
                    console.log('its Moved')
                   // $("#application-table").unblock(); 
                }
            });
           
        },
        rowMoved:function(row){
            //row - row component
           var rowIndex=row.getPosition();
           rowIndex+=1;
          var appid=row.getData().applicationId;
            $.ajax({
                type: "POST",
                url: 'https://localhost:44303/api/FormAPI/ManageApplication',
                data: {action: 3,rowOrder:rowIndex,applicationId:appid},
                beforeSend: function() {
                   // showLoader("#application-table");
                   console.log('its Moving')
                },
                complete: function() {
                    console.log('its Moved')
                   // $("#application-table").unblock(); 
                }
            });
        },
        rowFormatter:function(row){
            var applicationId = row.getData().applicationId;
            //define a table layout structure and set width of row
            var table = $("<table>",{'class':'table table-bordered', 'id':'application-' + applicationId});
            //append newly formatted contents to the row
            $(row.getElement()).append($('<div>',{'class':'table-wrapper',"style":"padding-left: 3%"}).append(table));
            var childTabulator = new Tabulator("#application-" + applicationId, {
                //height:'50%',
                layout:"fitDataFill",
                placeholder:"No form in this application...",
                //selectable:1,
                tooltips:true,
                tooltipsHeader:true,
                responsiveLayout:true,
                //persistentLayout: true,
                //persistenceID: "E2",
                groupStartOpen:false,
                groupToggleElement:"header",
                pagination:"local",
                paginationSize:10,
                columns:[ //set column definitions for imported table data                    
                    {title:"Actions",field:"childActions",formatter:actionIcon, formatterParams:{type:2}, width:'7%', headerSort:false, align:"center", cellClick:function(e, cell){
                        var rowData = cell.getRow().getData();
                        var topicID = rowData.topicID;
                        var formID = rowData.formID;
                        var appRole = typeof rowData.appRole != 'undefined' ? rowData.appRole : 3;
                        
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
                                        '<a href="javascript:;" onClick="formFunction(' + applicationId + ',' + topicID + ',' + formID + ',\'copy_application\',\'\')" class="btn btn-primary" title="Copy Application"><i class="fa fa-copy"></i> Copy Application</a>'+
                                        '<div class="form-group more_setup-wrap mt-15 mb-10"><input type="checkbox" class="show-more-settings" id="more_setup" name="more_setup">&nbsp;<label for="more_setup">Administrator Settings</label></div>'+
                                        '<div class="form-group">'+
                                        '<a class="btn btn-primary btn-md" href="' + formEditUrl + '"><i class="fa fa-edit" aria-hidden="true"></i> Edit Form</a>&nbsp;&nbsp;'+
                                        '<a class="btn btn-default btn-md" href="' + formFilterUrl + '"><i class="fa fa-filter" aria-hidden="true"></i> Filter Criteria</a>&nbsp;&nbsp;'+
                                        '<a class="btn btn-default btn-md" href="' + formRoleUrl + '"><i class="fa fa-user-tag" aria-hidden="true"></i> Form Roles</a>&nbsp;&nbsp;'+
                                        '<button class="btn btn-danger btn-md" onClick="return formClear(\'' + formClearUrl + '\');"><i class="fa fa-eraser" aria-hidden="true"></i> Clear Records</button>&nbsp;&nbsp;'+
                                        '<button class="btn btn-danger btn-md" onClick="return formDel(\'' + formDeleteUrl + '\');"><i class="fa fa-trash" aria-hidden="true"></i> Delete Form</button></div>'+
                                        '<div class="form-group advance_setup-wrap mt-15 mb-10"><input type="checkbox" class="show-advance-settings" id="advance_setup" name="advance_setup">&nbsp;<label for="advance_setup">Advance Settings</label></div>'+
                                        '<div class="form-group">'+
                                        '<a href="forms/edit" class="btn btn-primary btn-md"><i class="fa fa-edit" aria-hidden="true"></i> Edit Topic</a>&nbsp;&nbsp;'+
                                        '<button class="btn btn-danger btn-md" title="Delete Menu" onClick="return topicDel(' + topicID + ');"><i class="fa fa-trash" aria-hidden="true"></i> Delete Topic</button>&nbsp;&nbsp;'+
                                        '<button class="btn btn-info btn-md" title="Quick Edit Form" onClick="getFunction()"><i class="fa fa-pen"></i> Quick Edit Form</button>&nbsp;&nbsp;'+
                                        '<br/><a href="forms/download" class="btn btn-warning" title="Export to JSON"><i class="fa fa-download"></i> Export to JSON</a>&nbsp;&nbsp;'+
                                        '<a href="forms/exportFormExcel" class="btn btn-warning" title="Export to Excel (Full)"><i class="fa fa-download"></i> Export to Excel (Full)</a>&nbsp;&nbsp;'+
                                        '<a href="forms/exportFormExcel" class="btn btn-warning" title="Export to Excel (Basic)"><i class="fa fa-download"></i> Export to Excel (Basic)</a>&nbsp;&nbsp;'+
                                        '</div></div></div></div></div>';
                        }else{
                            var actions = '<div class="panel-blue text-center">'+    
                                        '<div class="row">'+
                                        '<div class="col-sm-12">'+
                                        '<a class="btn btn-success btn-md entry-button" href="' + formEntryUrl + '"><i class="fa fa-plus" aria-hidden="true"></i> Entry</a>&nbsp;&nbsp;'+
                                        '<a class="btn btn-info btn-md" href="' + formRecordUrl + '"><i class="fa fa-list-ol" aria-hidden="true"></i> Records</a>&nbsp;&nbsp;'+
                                        '<a class="btn btn-default btn-md" href="' + formSummaryUrl + '"><i class="fa fa-th-list" aria-hidden="true"></i> Summary</a>&nbsp;&nbsp;'+                                        
                                        '<a href="javascript:;" onClick="formFunction(' + applicationId + ',' + topicID + ',' + formID + ',\'copy_form\',\'{{$url}}\')" class="btn btn-primary" title="Copy Form"><i class="fa fa-copy"></i> Copy Form</a>&nbsp;&nbsp;'+
                                        '<a href="javascript:;" onClick="formFunction(' + applicationId + ',' + topicID + ',' + formID + ',\'copy_application\',\'\')" class="btn btn-primary" title="Copy Application"><i class="fa fa-copy"></i> Copy Application</a>'+
                                        '<a href="" class="btn btn-warning" title="Download"><i class="fa fa-download"></i> Download Form</a>&nbsp;&nbsp;'+
                                        '<a href="" class="btn btn-warning" title="Export Form Excel"><i class="fa fa-download"></i> Export Form Excel</a>&nbsp;&nbsp;'+
                                        '<a href="javascript:;" onClick="formFunction(' + applicationId + ',' + topicID + ',' + formID + ',\'import_form\',\'\')" class="btn btn-success" title="Import Form Excel"><i class="fa fa-upload"></i> Import Form Excel</a>&nbsp;&nbsp;'+
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
                    {title:"Topic Name", field: 'topicTitle', headerFilter: true},
                    //{title:"Topic Description", width:'33%'},
                    {title:"Form Name", field: 'title', headerFilter: true, formatter: 'html', cellClick:function(e, cell){
                        var rowData = cell.getRow().getData();
                        window.location.href = "{{ url('records') }}/" + rowData.formID;
                    }},
                    {title:"Form Tags", field: 'formTag', headerFilter: true, sorter:"string", sorterParams:{alignEmptyValues:"bottom"}},
                    {title:"Form Type", field: 'formType', headerFilter:"select", headerFilterParams:{values:formTypes}},
                    {title:"Form Status", field: 'status', headerFilter:"select", headerFilterParams:{values:formStatus}},
                    {title:"Last Activity", field:"lastActivityDate",headerFilter:true, sorter:'datetime', sorterParams:{format:"{{config('app.datetime_format_js')}}",alignEmptyValues:"bottom"}},
                    {title:"Number of Records", field:"totalRecords",headerFilter:true, sorter:"number", align:'right'}
                ]
            });
            tabulatorChildren[applicationId] = childTabulator;
            $(".table-wrapper").hide();
        },
        ajaxFiltering:true,
        ajaxURL: "https://localhost:44303/api/FormAPI/GetApplicationList",
        //ajaxURL: "http://geligulu.augursapps.com/api/FormAPI/GetApplicationList",
        
        ajaxProgressiveLoad: "scroll",
        paginationSize: 50,
        ajaxResponse:function(url, params, response){
                //url - the URL of the request
                //params - the parameters passed with the request
                //response - the JSON object returned in the body of the response.
          
                return response; //pass the data array into Tabulator
             },
    });
  
  //  setTabulatorHeaderFilter(tabulator);
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


  }
  
  