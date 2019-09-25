function autoCalcSetup() {
    $('form#customForm').jAutoCalc('destroy');
    $('form#customForm').jAutoCalc({
        keyEventsFire: true,
        decimalPlaces: 2,
        emptyAsZero: true,
        smartIntegers: true,
        thousandOpts: [''],
        readOnlyResults: false,
        funcs: {
            'CONCAT': {rgx: 'concat\\({([^}]+)}\\)', exec: function (field, ctx) {
                m = '';
                m = $("input[name='" + field + "']").map(function() {
                    return this.value.toString();
                }).get().join('');
                return m;
            }},
            'diff': {rgx: 'diff\\({([^}]+)}\\)', exec: function (field, ctx) {
                console.log(field);
            }}
        }
    });
}
function hide_for_navigation() {
    $("button.btn.next").nextUntil($('button.btn.previous'), 'div.borderSet').hide();
    $("button.btn.next").eq( 0 ).nextAll(".btn").hide();
}
$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();
    
    hide_for_navigation();
    
    // Next button function
    $(document).on('click', 'button.btn.next', function(){
        var $this = $(this);
        // Hide all previous divs with class "borderSet"
        $this.prevAll('div.borderSet').hide();     
        // Show all next divs with class "borderSet"
        $this.nextUntil("button.btn.next").addBack().show();
        // Show next "Next button"
        $this.nextAll("button.btn.next").first().show();
        // Always show first header
        $('.header:eq(0)').parent().show();        
        // Get previous "Previous button"
        var $previousPreviousButton = $this.prevAll( '.btn.previous' ).first();
        // Hide previous "Previous button"
        $previousPreviousButton.hide();
        // Get closest "Submit buttons" and hide them
        $this.prevAll( 'button[type="submit"]' ).first().hide();
        // Get closest "Reset buttons" and hide them
        $this.prevAll( 'button[type="reset"]' ).first().hide();
        // Get closest "Exit buttons" and hide them
        $this.prevAll( 'a.exit' ).first().hide();
        // Hide current "Next button"
        $this.hide();
    });
    // Previous button function
    $(document).on('click', '.btn.previous', function(){
        var $this = $(this);
        // Hide all divs with class "borderSet"
        $('div.borderSet').hide();
        // Always show first header
        $('.header:eq(0)').parent().show();
        
        // Get previous "Next button"
        var $previousNextButton = $this.prevAll( '.btn.next' ).first();
        // Show previous "Next button"
        $previousNextButton.show();
        // Show all divs before this previous "Next button"
        $previousNextButton.prevUntil($('.btn.next'), 'div.borderSet').show();
        // Get previous "Previous button"
        var $previousPreviousButton = $this.prevAll( '.btn.previous' ).first();
        // Hide previous "Previous button"
        $previousPreviousButton.show();
        
        // Get next "Next button"
        var $nextNextButton = $this.nextAll( '.btn.next' ).first();
        // Hide next "Next button"
        $nextNextButton.hide();
        
        // Get closest "Submit buttons" and hide them
        $this.nextAll( 'button[type="submit"]' ).hide();
        $this.prevAll( 'button[type="submit"]' ).first().hide();
        // Get closest "Reset buttons" and hide them
        $this.nextAll( 'button[type="reset"]' ).hide();
        $this.prevAll( 'button[type="reset"]' ).first().hide();
        // Get closest "Exit buttons" and hide them
        $this.nextAll( 'a.exit' ).hide();
        $this.prevAll( 'a.exit' ).first().hide();
        
        // Hide current "Previous button"
        $this.hide();
    });
    
    var  loadedMaps = [];
    $(document).on('click', '.nav-tabs li a', function(){       
        var targetTab = $(this).attr('href');
        if($(this).parent().index() > 0  && $(targetTab).find('.map-control').length > 0){
            var mapDiv = $(targetTab).find('.map-control').attr('id');
            var mapLatLng = $('#map_' + mapDiv).val();
            var mapLatitude = (mapLatLng !== '' || mapLatLng !== ',') ? mapLatLng.split(',')[0] : '';
            var mapLongitude = (mapLatLng !== '' || mapLatLng !== ',') ? mapLatLng.split(',')[1] : '';
            
            if($.inArray( mapDiv, loadedMaps ) === -1) {
                initMap(mapDiv, 'map_' + mapDiv, mapLatitude, mapLongitude);
                loadedMaps.push(mapDiv);
            }
        }
    });
    
    // Set default datetime with time duration added (Calendar Control)
//    $('body').on('change', 'input[name="start"]', function(){
//        var $timeDurationField = $('input[name="defaultTimedEventDuration"]');
//        if($timeDurationField.length){
//            var startTime = Date.parse($(this).val());
//            var defaultDuration = moment.duration($timeDurationField.val());
//            var endTime = startTime.add(defaultDuration);
//            alert(startTime);
//            alert(defaultDuration);
//            alert(endTime);
//        }
//    });
    
    /* Ajax request for getting the default values */
    $(document).on("change", ".call_default_values", function(){
        pickDefaultValues($(this));
    });
    
    autoCalcSetup();
    
    $('#customForm')
        .on('init.field.fv', function(e, data) {
            // data.fv      --> The FormValidation instance
            // data.field   --> The field name
            // data.element --> The field element

            var $parent = data.element.parents('.form-group'),
                $icon = $parent.find('.form-control-feedback[data-fv-icon-for="' + data.field + '"]');
            // You can retrieve the icon element by
            // $icon = data.element.data('fv.icon');

            $icon.on('click.clearing', function() {
                // Check if the field is valid or not via the icon class
                if ($icon.hasClass('glyphicon-remove')) {
                    // Clear the field
                    data.fv.resetField(data.element);
                }
            });
        })
        .formValidation({
            framework: 'bootstrap',
            excluded: [':disabled'],
            icon: {
                valid: '',
                invalid: '',
                validating: 'fa fa-sync fa-pulse'
            }
        })
        // Called when a field is invalid
        .on('err.field.fv', function(e, data) {
            // data.element --> The field element

            var $tabPane = data.element.parents('.tab-pane'),
                tabId = $tabPane.attr('id');
                
            $('a[href="#' + tabId + '"][data-toggle="tab"]')
                    .parent()
                    .find('i')
                    .removeClass('fa-check')
                    .addClass('fa-times');
            // Get the first invalid field
            var $invalidFields = data.fv.getInvalidFields().eq(0);
            // Get the tab that contains the first invalid field
            var $tabPane = $invalidFields.parents('.tab-pane'),
                invalidTabId = $tabPane.attr('id');
            // If the tab is not active
            if (!$tabPane.hasClass('active')) {
                // Then activate it
                $tabPane.parents('.tab-content')
                    .find('.tab-pane')
                    .each(function(index, tab) {
                        var tabId = $(tab).attr('id'),
                            $li = $('a[href="#' + tabId + '"][data-toggle="tab"]').parent();
                        if (tabId === invalidTabId) {
                            // activate the tab pane
                            $(tab).addClass('active');
                            // and the associated <li> element
                            $li.addClass('active');
                        } else {
                            $(tab).removeClass('active');
                            $li.removeClass('active');
                        }
                    });
                // Focus on the field
                $invalidFields.focus();
            }
            if (data.fv.getSubmitButton()) {
                data.fv.disableSubmitButtons(false);
            }
        })
        // Called when a field is valid
        .on('success.field.fv', function(e, data) {
            // data.fv      --> The FormValidation instance
            // data.element --> The field element

            var $tabPane = data.element.parents('.tab-pane'),
                tabId = $tabPane.attr('id'),
                $icon = $('a[href="#' + tabId + '"][data-toggle="tab"]')
                    .parent()
                    .find('i')
                    .removeClass('fa-check fa-times');
            // Check if all fields in tab are valid
            var isValidTab = data.fv.isValidContainer($tabPane);
            if (isValidTab !== null) {
                $icon.addClass(isValidTab ? 'fa-check' : 'fa-times');
            }
            if (data.fv.getSubmitButton()) {
                data.fv.disableSubmitButtons(false);
            }
        })
        // Called when a form is valid
        .on('success.form.fv', function(e, data) {
            // data.fv      --> The FormValidation instance
            // data.element --> The field element
            if($("input[name=one_to_many_form]").length){
                var tabulatorID = $("#tabulatorModal input[name='tabulator-id']").val();
            
                if(tabulatorID !== ""){
                    var warn = 0, incompleteRecords = [], requiredColumns = [];
                    var $tabulator = tabulators[tabulatorID];
                    var tabulatorData = $tabulator.getData();
                    
                    // Get required columns
                    var colDefs = $tabulator.getColumnDefinitions();
                    //console.log(colDefs);
                    colDefs.forEach(function(column){
                        if(typeof column.validator !== 'undefined'){
                            //console.log(typeof column.validator);
                            if((typeof column.validator === 'object' && column.validator[0] === 'required') ||
                                (typeof column.validator === 'string' && column.validator === 'required')){
                                requiredColumns.push(column.field);
                            }
                        }
                    });
                    //console.log(requiredColumns);
                    // Traverse the data to get if required column value is empty
                    tabulatorData.forEach(function(data){
                        var rowId = data.id;
                        
                        /*if(data.userID){
                            if(rowId.length === 16 && data.userID === 0){
                                incompleteRecords.push(rowId);
                                warn++;
                            }
                        }*/                        
                        
                        $.each(data, function(field, value){
                            if(typeof field !== 'undefined'){
                                if(value === "" && $.inArray(field, requiredColumns) >= 0){
                                    incompleteRecords.push(rowId);
                                    warn++;
                                }
                            }
                        });
                    });                    
                    //console.log(tabulatorData);
                    //console.log(incompleteRecords);
                    //return false;
                    if(warn){
                        if(incompleteRecords.length > 0){
                            incompleteRecords.forEach(function(rowID){
                                if(rowID !== ""){
                                    var row = $tabulator.getRow(rowID);
                                    row.getElement().css({"background-color":"#FFCCCC", "border-bottom":"1px solid #e5e5e5"});
                                }
                            });
                        }
                        alert("Please complete all records in the tabulator !!");
                        return false;
                    }else{
                        $("#" + tabulatorID).parent().find('textarea').val(JSON.stringify(tabulatorData));
                    }
                    //return false;
                }
//                else{
//                    alert("Please fill records in the tabulator !!");
//                    return false;
//                }
            }
        });
        
    $("#get-tabulator-values").click(function(){
        var formID = $("#tabulatorModal input[name=formID]").val();
        var oneToMany = $("#tabulatorModal input[name='modal-one-to-many']").val();
        var selectedRows = popupTabulator.getSelectedRows();
        //console.log(selectedRows);
        if(selectedRows.length >0){
            var selectedData = popupTabulator.getSelectedData();
            //console.log(selectedData);
            if(oneToMany === '1'){
                var tabulatorId = $("#tabulatorModal input[name='tabulator-id']").val();
                var fieldMap = JSON.parse($("#tabulatorModal input[name='modal-field-map']").val());
                //console.log(fieldMap);
                var cols = getTabulatorColDefs(tabulators[tabulatorId], 1);
                //console.log(cols);
                var recordArr = [];
                selectedData.forEach(function(data){
                    var record = {};
                    for(var i=0; i< cols.length; i++){
                        // master column
                        var master_column = 'RowID-' + cols[i];
                        if($.inArray(master_column, cols) !== -1){
                            record[master_column] = data.id;
                        }
                        
                        if(typeof fieldMap[cols[i]] !== 'undefined'){
                            record[cols[i]] = data[fieldMap[cols[i]]];
                        }else{
                            record[cols[i]] = (typeof record[cols[i]] === 'undefined') ? "" : record[cols[i]];
                        }
                    }
                    
                    record['id'] = makeid(16);                    
                    record['created_at'] = formatTime();
                    record['updated_at'] = formatTime();
                    record['edit_row'] = "<img src='" + ASSET_URL + "assets/images/pencil.png' width='15'>";
                    recordArr.push(record);
                });
                savePopUpRecords(recordArr);
                tabulators[tabulatorId].addData(recordArr);
                tabulators[tabulatorId].redraw();
                tabulators[tabulatorId].scrollToRow(recordArr[0].id);
                //console.log(recordArr);
                setTabulatorCalc(tabulatorId);
            }else{
                var recordArr = getTabulatorColDefs(popupTabulator, 2);
                selectedData.forEach(function(data){
                    $.each(data, function(key, value){
                        if(key === 'id'){
                            recordArr[key] = value;
                        }else{
                            if(typeof recordArr[key] !== 'undefined'){
                                if(typeof recordArr[key]['data'] === 'undefined'){
                                    recordArr[key]['data'] = [];
                                    recordArr[key]['data'].push(value);
                                }else{
                                    recordArr[key]['data'].push(value);
                                }
                            }
                        }
                    });
                });
                
                var records = {};
                for (var field in recordArr) {
                    if(selectedRows.length > 1){                        
                        if($.inArray( recordArr[field].type, ['text', 'autocomplete', 'date', 'select', 'radio-group', 'checkbox-group', 'file'] ) !== -1) {
                            records[field] = recordArr[field].data.join(' | ');
                        }
                        else if(recordArr[field].type === 'textarea'){
                            records[field] = recordArr[field].data.join('\n\n');
                        }
                        else if(recordArr[field].type === 'number'){
                            records[field] = recordArr[field].data.reduce(getSum);
                        }
                    }else{
                        if(typeof recordArr[field] === 'string'){
                            records[field] = recordArr[field];
                        }else{
                            records[field] = recordArr[field].data[0];
                        }
                    } 
                }
                //console.log(records);
                $.each(records, function(i, value){
                    if($("input#RowID-" + i).length){
                        $("input#RowID-" + i).val($.trim(records['id']));
                    }
                    $("input[data-derived='" + i + "']").val(value).change();
                    $("input[data-referral-form-field-name='" + i + "']").val(value);
                    $('#customForm').formValidation('revalidateField', $("input[data-derived='" + i + "']").attr('name'));
                    $('#customForm').formValidation('revalidateField', $("input[data-referral-form-field-name='" + i + "']").attr('name'));
                    if($("div#" + i).length){
                        file_default_value(i, value, uploadPath);
                    }
                    set_reference_field(formID, i, value);
                });
            }
            
            $('#tabulatorModal').modal('hide');
        }else{
            alert("Please select some records in tabulator!!");
        }
    });
    // Add new row in table
    // Not working with table has headings and subheadings
    $(document).on('click', 'a.irow', function(){
        var tableID = $(this).parent().find('div.table-responsive').attr('id');
        var $table = $(this).parent().find('table');
        
        var originalRadios = [];
        $table.find('tbody tr:last td').each(function(){
            $(this).find('input[type=radio]').each(function(){
                if($(this).is(':checked'))
                    originalRadios.push($(this));
            });
        });
        $table.find('tbody').append($table.find("tbody tr:last").clone());
        var rowIndex = $table.find('tbody tr:last').index();        
        
        $table.find('tbody tr:last td').each(function(){
            var tdIndex = $(this).index();
            
            var $inputElm = $(this).find('input');
            if(!$inputElm.length){ $inputElm = $(this).find('select'); }            
            
            // check for checkbox/radio
            if($(this).find('div.checkbox').length || $(this).find('div.radio').length){
                $inputElm.attr('name', tableID+'[column-'+tdIndex+'][row-'+rowIndex+'][]');
                $(this).find('div').each(function(){
                    var $choiceElm = $(this).find('input');
                    
                    var random_id = Math.floor(Math.random() * 99999) + 100;
                    $choiceElm.attr('id', random_id);
                    $choiceElm.parent().attr('for', random_id);
                    
                    $choiceElm.prop('checked', false);
                });
            }else{
                $inputElm.attr('name', tableID+'[column-'+tdIndex+'][row-'+rowIndex+']');
                $inputElm.val('');
            }
            
            var dataxlsx = $inputElm.attr('data-xlsxfield');
            if(dataxlsx){
                var dataxlsxVal = dataxlsx.replace ( /[^\d.]/g, '' );
                var indexOf = dataxlsx.indexOf(dataxlsxVal);
                var xlsxName = dataxlsx.substr(0,indexOf)+(parseInt(dataxlsxVal)+1);
                $inputElm.attr('data-xlsxfield', xlsxName);

                var dataClass = $inputElm.attr('class');
                var className = "";
                if(dataClass !== undefined){
                    var dataClassVal = dataClass.replace ( /[^\d.]/g, '' );
                    var indexOfClass = dataClass.indexOf(dataClassVal);
                    className = (indexOfClass == 0) ? dataClass : dataClass.substr(0,indexOfClass)+(parseInt(dataClassVal)+1);
                }
                $inputElm.attr('class', className);
            }
            $('#customForm').formValidation('addField', tableID+'[column-'+tdIndex+'][row-'+rowIndex+']');
        });
        if (originalRadios.length) {
            originalRadios.forEach(function(original){
                original.prop('checked',true);
            });
        }
        autoCalcSetup();
    });
    // Delete row from table
    $(document).on('click', 'a.drow', function(){        
        var $table = $(this).parent().find('table');
        var defaultRows = parseInt($(this).attr('data-numrows'));
        if($table.find('tbody tr').length > defaultRows){
            $table.find('tbody tr:last input').each(function(){
                if($(this).attr('data-fv-field'))
                    $('#customForm').formValidation('removeField', $(this).attr('name'));
            });
            $table.find('tbody tr:last select').each(function(){
                if($(this).attr('data-fv-field'))
                    $('#customForm').formValidation('removeField', $(this).attr('name'));
            });
            $table.find('tbody tr:last').remove();
            autoCalcSetup();
        }
    });
    /* Function to populate the radio choice fields */
    $('input[type=radio][data-choices]').each(function(){
        var choices = $.trim($(this).data('choices'));
        if(choices !== '') {
            var choices_arr = choices.split(',');
            choices_arr.forEach(function(choice_field){                
                $('[name="' + choice_field + '"]').parents('.form-group').addClass('hidden');
                $('[name="' + choice_field + '"]').prop('disabled', true);
            });
        }
        if($(this).is(':checked')){
            var targetName  = $(this).attr('name');
            var value       = $.trim($(this).val());
            var choices     = $.trim($(this).data('choices'));

            populateChoices(targetName, value, choices);
        }
    });
    $('input[type=radio][data-choices]').on("click", function(){
        var targetName  = $(this).attr('name');
        var value       = $.trim($(this).val());
        var choices     = $.trim($(this).data('choices'));

        populateChoices(targetName, value, choices);
    });
});

function CountCharacters(element) {
    var body = tinymce.get(element).getBody();
    var content = tinymce.trim(body.innerText || body.textContent);
    return content.length;
};

// populate choices fields
function populateChoices(targetName, option, myFields){
    var options = {
        True: 'False',
        Yes: 'No',
        False: 'True',
        No: 'Yes'
    };
    var otherFields = $('input[type=radio][name="' + targetName + '"][value="' + options[option] + '"]').data('choices');
    
    if(typeof myFields !== 'undefined' && myFields !== '') {
        var choices_arr = myFields.split(',');
        if(choices_arr.length) {
            choices_arr.forEach(function(choice_field){                
                $('[name="' + choice_field + '"]').parents('.form-group').removeClass('hidden');
                $('[name="' + choice_field + '"]').prop('disabled', false);
            });
        }        
    }
    
    if(typeof otherFields !== 'undefined' && otherFields !== '') {
        var choices_arr = otherFields.split(',');
        if(choices_arr.length) {
            choices_arr.forEach(function(choice_field){                
                $('[name="' + choice_field + '"]').parents('.form-group').addClass('hidden');
                $('[name="' + choice_field + '"]').prop('disabled', true);
            });
        }        
    }
}

// Get values to populate the dropdown values
function populateFields($this, ajaxUrl){
    var form_id = $this.attr("data-referral-form-id"),
        field_name = $this.attr("data-referral-form-field-name"),
        dependent_fields = $this.attr("data-dependent_field_names"),
        input_value = $this.val();

    if(dependent_fields !== ''){
        var dependent_fields_arr = dependent_fields.split(',');
        if (input_value !== ''){
            $.ajax({
                url: ajaxUrl,
                type: "POST",
                data: {formID: form_id, fieldName: field_name, fieldDataText: input_value, dependentFields:dependent_fields_arr},
                dataType: "json",
                beforeSend: function(){
                    dependent_fields_arr.forEach(function(dependent_field){
                        $('#' + dependent_field).val('');
                        $('#' + dependent_field).attr('disabled', 'disabled');
                    });                
                },
                success: function(result){
                    if(result.success){
                        dependent_fields_arr.forEach(function(dependent_field){
                            var referral_field_name = $('#' + dependent_field).attr('data-referral-form-field-name');
                            $('#' + dependent_field + ' option').each(function(){
                                var optionValue = $(this).attr('value');
                                if(optionValue !== ''){
                                    if(($.inArray( optionValue, result[referral_field_name] ) === -1)){
                                        $(this).prop('disabled', true);
                                        $(this).hide();
                                    }else{
                                        $(this).prop('disabled', false);
                                        $(this).show();
                                    }
                                }
                            });
                        });
                    }
                },
                complete: function(){ 
                    dependent_fields_arr.forEach(function(dependent_field){
                        $('#' + dependent_field).removeAttr('disabled');
                    });
                }
            });
        }else{
            dependent_fields_arr.forEach(function(dependent_field){
                $('#' + dependent_field + ' option').each(function(){
                    $(this).prop('disabled', false);
                    $(this).show();
                });
            });
        }
    }
}

// Set calculated value into corresponding form field
function setTabulatorCalc(tabulatorId){
    var columns = getTabulatorColDefs(tabulators[tabulatorId], 1);

    columns.forEach(function(column){
        if($("input[data-derived='" + column + "']").length){ 
            var total = $("#" + tabulatorId).find(".tabulator-footer .tabulator-calcs-holder .tabulator-calcs .tabulator-cell[tabulator-field='" + column + "']").attr('title');
            $("input[data-derived='" + column + "']").val(total).change(); 
            $('#customForm').formValidation('revalidateField', $("input[data-derived='" + column + "']").attr('name'));
        }
    });
}

// Get Tabulator column definitions
// type 1: return column field name
// type 2: return column field name + field type
function getTabulatorColDefs(tabulator, type){
    var result = [];
    var colDefs = tabulator.getColumnDefinitions(); //get column definition array
    
    if(type === 1){
        $.each(colDefs, function(index, column){
            if(typeof column.field !== 'undefined')
                result.push(column.field);
        });
    }else if(type === 2){
        $.each(colDefs, function(index, column){
            result[column.field] = {};
            result[column.field]['type'] = column.columnType;
        });
    }
    
    return result;
}

// return sum with array stored value
function getSum(total, num) {
    num = (num === '' ? 0 : num);
    return parseInt(total) + parseInt(num);
}

// fetch default value for file types
function file_default_value(defaultField, defaultValue, uploadPath){
    if(defaultValue !== "" && typeof defaultValue !== "undefined"){
        $("input[data-filedefault='" + defaultField + "']").val(defaultValue);
    
        var preview = document.getElementById(defaultField);
        preview.innerHTML = "";

        var images = defaultValue.split(' | '), img = [];
        for(var i=0, j=0; i<images.length; i++){
            if(images[i] !== ''){
                var imageUrl = uploadPath + '/' + images[i];

                if (/\.(jpe?g|png|gif)$/i.test(images[i])) {
                    img[j] = imageUrl;
                    j++;
                }else{
                    preview.innerHTML += "<a href='" + imageUrl + "' download><b>" + images[i] + "</b></a>&nbsp;&nbsp;";
                }
            }        
        }

        if(img.length){
            loadImage(img)
            .then(function (allImgs) {
                //console.log(allImgs.length, 'images loaded!', allImgs);
                for(var i=0; i<allImgs.length; i++){
                    //console.log(allImgs[i].src)
                    var img = document.createElement("img");
                    img.setAttribute("height", '100');
                    img.setAttribute("src", allImgs[i].src);
                    preview.appendChild(img);
                }
            })
            .catch(function (err) {
                    console.error('One or more images have failed to load :(');
                    console.error(err.errored);
                    console.info('But these loaded fine:');
                    console.info(err.loaded);
            });
        }
    }
}

// set values on the reference code select field
function set_reference_field(formID, formField, formValue){
    var $elem = $("[data-referral-form-id='" + formID + "'][data-referral-form-field-name='" + formField + "']");
    
    if($elem.is('select')) {  
        var values = formValue.split(' | ');
        $elem.val(values);
        //console.info(values);
    }
    if($elem.is('input')) {
        var values = formValue.split(' | ');
        $elem.val(values[0]);
        //console.info(values);
    }
}

// Generate a random n length string
function makeid(length) {
    var text = "";
    var possible = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (var i = 0; i < length; i++){
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    
    return text;
}

function cameraCapture(id){
    $('#'+id.split('_')[2]).trigger('click');
}

function getPicture(id){
    $('#'+id).parent().find('span.content').remove();
    var oFReader = new FileReader();
    var files=document.getElementById(id).files[0];
    oFReader.readAsDataURL(files);
    if(files.type.match('image.*')){
        oFReader.onload = function (oFREvent) {
            document.getElementById("uploadPreview_" + id).src = oFREvent.target.result;
            $("#uploadPreview_" + id).removeClass("hidden");
        };
    }else{
        $('#uploadPreview_'+id).addClass('hidden').removeAttr('src');
        $('#'+id).parent().append('<span class="content"><i class="far fa-file-alt fa-2x"></i> <b>'+files.name+'</b></span>');
    }
}

function previewFiles(id) {
    var preview = document.querySelector('#shw_profile_'+id);
//    preview.innerHTML="";
    var files = document.querySelector('#'+id).files;
    function readAndPreview(file) {
        // Make sure `file.name` matches our extensions criteria
        if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
            var reader = new FileReader();
            reader.addEventListener("load", function () {
                var image = new Image();
                image.height = 100;
                image.title = file.name;
                image.src = this.result;
                var e = document.createElement('div');
                e.setAttribute('class', "form-group saveData");
                var f = document.createElement('span');
                f.setAttribute('class', "img-wrapclose saveForm");
                f.setAttribute('id', "removeXL");
                f.innerHTML = '×';
                preview.appendChild(e);
                e.appendChild(image);
                e.appendChild(f);
            }, false);
            reader.readAsDataURL(file);
        }
    }
    if (files) {
        [].forEach.call(files, readAndPreview);
    }
}

function getSingleFile(id){
    //$('#' + id).parents('.form-group').find('.attachments span.file-attachments').remove();
    var oFReader = new FileReader();
    var files = document.getElementById(id).files[0];
    oFReader.readAsDataURL(files);
    if(files.type.match('image.*')){
        oFReader.onload = function (oFREvent) {
            document.getElementById("uploadPreview_" + id).src = oFREvent.target.result;
            $("#uploadPreview_" + id).parent().removeClass("hidden");
            $("#uploadPreview_" + id).parent().find('.file-title').html('');
        };
    }else{
        $('#uploadPreview_'+id).removeAttr('src');$('#uploadPreview_'+id).parent().addClass('hidden');
        var fileAttachments = $('#' + id).parents('.form-group').find('.attachments .file-attachments');
        fileAttachments.find('p').append('<b>'+files.name+'</b>');
        fileAttachments.removeClass("hidden");
    }
}

function getMultipleFiles(id) {
    var files = document.querySelector('#'+id).files;
    function readAndPreview(file) {
        var div = $('<div />', {class:'figure'});
        div.appendTo($('#shw_profile_'+id+' > div.fileData'));
        if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
            var reader = new FileReader();
            reader.addEventListener("load", function () {
                var img = $('<img />', { 
                    class: 'scaled',
                    height: '100',
                    src: this.result,
                    alt: file.name
                });
                img.appendTo(div);
                
                var p = $('<p />').html(file.name);
                p.appendTo(div);
                
                var span = $('<span />').attr('class', 'img-wrapclose img-close multiple-files').html('×');
                span.appendTo(div);
            }, false);
            reader.readAsDataURL(file);
        }else{
            div.append('<i class="far fa-file-alt fa-2x"></i>');
            
            var p = $('<p />').attr('class', 'file-attachments').html('<b>' + file.name + '</b>');
            p.appendTo(div);
            
            div.append('<span class="img-wrapclose file-close multiple-files">×</span>');
        }
    }
    if (files) {
        [].forEach.call(files, readAndPreview);
    }
}

// CheckBox group other option
function activate_checkbox_other_option(element){    
    element = element.trim();
    $("body").on("click", "#" + element + "-other", function(){
        if ($(this).is(':checked')){
            $("#" + element + "-other-value").removeClass("other-val-hide").addClass("other-val-show");
            $("#" + element + "-other-value").prop("disabled", false);
        } else{
            $("#" + element + "-other-value").removeClass("other-val-show").addClass("other-val-hide");
            $("#" + element + "-other-value").prop("disabled", true);
        }
    });
}
// Radio group other option
function activate_radio_other_option(element){
    element = element.trim();
    $("body").on("click", "." + element, function(){
        if ($(this).attr('id') == element + "-other"){
            $("#" + element + "-other-value").removeClass("other-val-hide").addClass("other-val-show");
            $("#" + element + "-other-value").prop("disabled", false);
        } else{
            $("#" + element + "-other-value").removeClass("other-val-show").addClass("other-val-hide");
            $("#" + element + "-other-value").prop("disabled", true);
        }
    });
}

function derive_table_values(derivative, response){
    var data = JSON.parse(response);
    var $table = $("table[data-derived='" + derivative + "']");
    if(Object.keys(data).length){
//        console.log(Object.keys(data).length, data)
        var columns = Object.keys(data).length;
        // calculate the rows
        var rowCount = [];
        for(var key in data){
            if(data.hasOwnProperty(key)){
                rowCount.push(parseInt(Object.keys(data[key]).length));
            }
        }
        var numRows = Math.max.apply(null, rowCount);
        var tableID = $("table[data-derived='" + derivative + "']").parent().attr('id');
        for(var i=1; i<=numRows; i++){
            // columns
            for(var j=0; j<columns; j++){
                if(data["column-"+j]["row-"+i]){
                    // Check for extra row exists
                    if(!$("table[data-derived='" + derivative + "'] tr:eq("+ i +")").length){
                        $table.append($('<tr/>'));
                    }
                    // Create input element inside extra row
                    if(!$("table[data-derived='" + derivative + "'] tr:eq("+ i +") td:eq("+ j +")").length){
                        var $input = $("table[data-derived='" + derivative + "'] tr:eq("+ (i-1) +") td:eq("+ j +") input").clone();
                        
                        var dataxlsx = $input.attr('data-xlsxfield');
                        if(dataxlsx){
                            var dataxlsxVal=dataxlsx.replace ( /[^\d.]/g, '' );
                            var indexOf=dataxlsx.indexOf(dataxlsxVal);
                            var xlsxName=dataxlsx.substr(0,indexOf)+(parseInt(dataxlsxVal)+1);
                            $input.attr('data-xlsxfield', xlsxName);
                            
                            var dataClass=$input.attr('class');
                            var dataClassVal=dataClass.replace ( /[^\d.]/g, '' );
                            var indexOfClass=dataClass.indexOf(dataClassVal);
                            var className=dataClass.substr(0,indexOfClass)+(parseInt(dataClassVal)+1);                            
                            $input.attr('class', className);
                        }
                        $input.attr('name', tableID+'[column-'+j+'][row-'+i+']');
                        
                        $table.find('tbody tr:last').append($('<td/>').append($input));

                        $('#customForm').formValidation('addField', tableID+'[column-'+j+'][row-'+i+']');
                    }
                    $table.find("input[name='" + tableID + "[column-" + j + "][row-"+ i +"]']").val(data["column-"+j]["row-"+i]);
                }
            }
        }
    }
}