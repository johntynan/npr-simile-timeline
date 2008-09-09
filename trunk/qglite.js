function getTopicsList(obj) {

listSource = new Array();
/*
This function gets a list of topics from the NPR xml feed, in json format (via yahoo pipes), then adds them to the listSource array.
Next, this sends the contents of the listSource array to the createTopicsList function
*/

	// alert(JSONstring.make(obj.value.items[0]));
	// alert(JSONstring.make(obj.value.items[0].item[0].title));
	// alert(obj.value.items[0].item[0].title);
	// alert (obj.value.items[0].count);
	
	for (x = 0; x < obj.value.items[0].item.length; x++){
	
		listSource [x]=new Array(2)
		// alert(JSONstring.make(obj.value.items[0].item[x].id));
		listSource[x][0]= (obj.value.items[0].item[x].id);
		listSource[x][1]= (obj.value.items[0].item[x].title);
		// addOption(document.selectionForm.topicsList, obj.value.items[0].item[x].id, obj.value.items[0].item[x].title);
	}

// alert(listSource[5]);

createTopicsList(listSource)

}

function getProgramsList(obj) {
listSource = new Array();
/*
This function gets a list of programs from the NPR xml feed, in json format (via yahoo pipes), then adds them to the listSource array.
Next, this sends the contents of the listSource array to the createProgramsList function
*/

	// alert(JSONstring.make(obj.value.items[0]));
	// alert(JSONstring.make(obj.value.items[0].item[0].title));
	// alert(obj.value.items[0].item[0].title);
	
	for (x = 0; x < obj.value.items[0].item.length; x++){
		listSource [x]=new Array(2)
		// alert(JSONstring.make(obj.value.items[0].item[x].id));
		listSource[x][0]= (obj.value.items[0].item[x].id);
		listSource[x][1]= (obj.value.items[0].item[x].title);
		// addOption(document.selectionForm.topicsList, obj.value.items[0].item[x].id, obj.value.items[0].item[x].title);
	}

// alert(listSource[5]);

createProgramstList(listSource)

}

function getSeriesList(obj) {
listSource = new Array();
/*
This function gets a list of series from the NPR xml feed, in json format (via yahoo pipes), then adds them to the listSource array.
Next, this sends the contents of the listSource array to the createSeriesList function
*/
	// alert(JSONstring.make(obj.value.items[0]));
	// alert(JSONstring.make(obj.value.items[0].subcategory[0]));
	// alert(JSONstring.make(obj.value.items[0].subcategory[0].item[0].id));
	// alert(JSONstring.make(obj.value.items[0].subcategory[0].item[0].title));
	// alert(JSONstring.make(obj.value.items[0].subcategory.length));
	groupLength = obj.value.items[0].subcategory.length
	// alert(groupLength);
	
	// alert(JSONstring.make(obj.value.items[0].subcategory[0].item.length));
	for (x = 0; x < groupLength; x++){
		// alert(JSONstring.make(obj.value.items[0].subcategory[x].item));
		subGroupLength = obj.value.items[0].subcategory[x].item.length
		// alert(subGroupLength);
		if ((subGroupLength ==0) || (subGroupLength ==null)) {
			}else{
			for (y = 0; y < subGroupLength; y++){
				listSource [y]=new Array(2)
				listSource[y][0]= (obj.value.items[0].subcategory[x].item[y].id);
				listSource[y][1]= (obj.value.items[0].subcategory[x].item[y].title);
			}
		}
	}
// alert(listSource[0]);
// alert(listSource[groupLength]);
createSeriesList(listSource)

}

function getColumnsList(obj) {
listSource = new Array();
/*
This function gets a list of series from the NPR xml feed, in json format (via yahoo pipes), then adds them to the listSource array.
Next, this sends the contents of the listSource array to the createColumnsList function
*/
	// alert(JSONstring.make(obj.value.items[0]));
	// alert(JSONstring.make(obj.value.items[0].subcategory[0]));
	// alert(JSONstring.make(obj.value.items[0].subcategory[0].name));
	// alert(JSONstring.make(obj.value.items[0].subcategory[0]['item']));
	// alert(JSONstring.make(obj.value.items[0].subcategory[0]['item']['title']));
	// alert(JSONstring.make(obj.value.items[0].subcategory[0]['item']['id']));
	// alert(JSONstring.make(obj.value.items[0].subcategory.length));
	groupLength = obj.value.items[0].subcategory.length
	groupLength = groupLength - 1
	// alert(groupLength);
	
	// alert(JSONstring.make(obj.value.items[0].subcategory[0].item.length));
	for (x = 0; x < groupLength; x++){
		// alert(x);
		subGroupLength = obj.value.items[0].subcategory[x].item.length
		// alert(subGroupLength);
		// alert(JSONstring.make(obj.value.items[0].subcategory[x]['item']['title']));
		if ((subGroupLength ==null) || (subGroupLength ==undefined)) {
			}else{
			for (y = 0; y < subGroupLength; y++){
				// alert(subGroupLength);
				// listSource [y]=new Array(2)
				// listSource[y][0]= (obj.value.items[0].subcategory[x].item[y].id);
				// listSource[y][1]= (obj.value.items[0].subcategory[x].item[y].title);
				
			}
		}
	}
// alert(listSource[0]);
// alert(listSource[groupLength]);
// createColumnsList(listSource)

}

function createTopicsList(listSource){
	// alert(listSource);
	for (var i=0; i < listSource.length;++i){
	addOption(document.selectionForm.topicsList, listSource[i][0], listSource[i][1]);
	}
}

function createProgramstList(programSource){
	// alert(listSource);
	for (var i=0; i < programSource.length;++i){
	addOption(document.selectionForm.programsList, programSource[i][0], programSource[i][1]);
	}
}

function createSeriesList(listSource){
	// alert(listSource);
	for (var i=0; i < listSource.length;++i){
	addOption(document.selectionForm.seriesList, listSource[i][0], listSource[i][1]);
	}
}

function createColumnsList(listSource){
	// alert(listSource);
	for (var i=0; i < listSource.length;++i){
	addOption(document.selectionForm.columnsList, listSource[i][0], listSource[i][1]);
	}
}

function addOption(selectbox,value,text) {
	var optn = document.createElement("OPTION");
	optn.value = value;
	optn.text = text;
	selectbox.options.add(optn);
}

function getSelectedTopics(obj) {

// http://www.digitalamit.com/blog/blog/23.html
// while (obj.selectedIndex != -1) { if (obj.selectedIndex != 0) arSelected.push(obj.options[obj.selectedIndex].value); obj.options[obj.selectedIndex].selected = false; } 
selected = new Array(); 
for (var i = 0; i < obj.options.length; i++) 
	if (obj.options[ i ].selected)
	selected.push(obj.options[ i ].value);

document.selectionForm.selectedTopics.value = selected

createQueryString();

}

function getSelectedPrograms(obj) {

selected = new Array(); 
for (var i = 0; i < obj.options.length; i++) 
	if (obj.options[ i ].selected)
	selected.push(obj.options[ i ].value);

document.selectionForm.selectedPrograms.value = selected

createQueryString();

}

function getSelectedSeries(obj) {

selected = new Array(); 
for (var i = 0; i < obj.options.length; i++) 
	if (obj.options[ i ].selected)
	selected.push(obj.options[ i ].value);

document.selectionForm.selectedSeries.value = selected

createQueryString();

}

function getSelectedColumns(obj) {

selected = new Array(); 
for (var i = 0; i < obj.options.length; i++) 
	if (obj.options[ i ].selected)
	selected.push(obj.options[ i ].value);

document.selectionForm.selectedColumns.value = selected

createQueryString();

}


function createQueryString(){

// alert(document.selectionForm.selectedTopics.value);
// alert(document.selectionForm.selectedSubjects.value);

// document.selectionForm.queryBox.value = 'http://api.npr.org/query?id=' + document.selectionForm.selectedTopics.value + ','  +  document.selectionForm.selectedPrograms.value  + '&searchTerm=' + escape(document.selectionForm.searchTerm.value)  + '&startNum=' + escape(document.selectionForm.startNum.value) + '&numResults=' + document.selectionForm.numResults.value + '&date=' + document.selectionForm.pDate.value + '&startDate=' + document.selectionForm.pSDate.value + '&endDate=' + document.selectionForm.pEDate.value;


selectedTopicsString = ""
if ((document.selectionForm.selectedTopics.value.length == 0) || ( document.selectionForm.selectedTopics.value == null)) {
	selectedTopicsString = ""
	}
       else if ((document.selectionForm.selectedPrograms.value.length =! 0) || ( document.selectionForm.selectedPrograms.value =! null))
       {
       selectedTopicsString = document.selectionForm.selectedTopics.value + ','
       }
       else if ((document.selectionForm.selectedSeries.value.length =! 0) || ( document.selectionForm.selectedSeries.value == null))
       {
       selectedTopicsString = document.selectionForm.selectedTopics.value + ','
       }
       else
       {
       selectedTopicsString = document.selectionForm.selectedTopics.value
       }
       /* else if ((document.selectionForm.selectedColumns.value.length==0) || ( document.selectionForm.selectedColumns.value==null))
       {
       selectedTopicsString = document.selectionForm.selectedTopics.value
       } */

selectedProgramsString = ""
if ((document.selectionForm.selectedPrograms.value.length == 0) || ( document.selectionForm.selectedPrograms.value == null)) {
	selectedProgramsString = ""
	}
	else if ((document.selectionForm.selectedSeries.value.length =! 0) || ( document.selectionForm.selectedSeries.value =! null))
       {
       selectedProgramsString = document.selectionForm.selectedPrograms.value + ','
       }
       else {
       selectedProgramsString = document.selectionForm.selectedPrograms.value

       }
       
	/* else if ((document.selectionForm.selectedColumns.value.length==0) || ( document.selectionForm.selectedColumns.value==null))
       {
       selectedProgramsString = document.selectionForm.selectedPrograms.value
       } */
       
selectedSeriesString = ""
if ((document.selectionForm.selectedSeries.value.length==0) || ( document.selectionForm.selectedSeries.value==null)) {
	selectedSeriesString = ""
       }
       else {
       selectedSeriesString = document.selectionForm.selectedSeries.value
       }
	// selectedSeriesString = document.selectionForm.selectedSeries.value  + ','
       /* else if ((document.selectionForm.selectedColumns.value.length==0) || ( document.selectionForm.selectedColumns.value==null))
       {
       selectedSeriesString = document.selectionForm.selectedSeries.value
       } */


selectedColumnsString = ""
if ((document.selectionForm.selectedColumns.value.length==0) || ( document.selectionForm.selectedColumns.value==null)) {
	selectedColumnsString = ""
       }
       else {
       selectedColumnsString = document.selectionForm.selectedColumns.value
       }

searchTermString = ""
if ((document.selectionForm.searchTerm.value.length==0) || ( document.selectionForm.searchTerm.value==null)) {
	searchTermString = ""
	}
       else {
       searchTermString = '&searchTerm=' + escape(document.selectionForm.searchTerm.value);
       }

startNumString = ""
if ((document.selectionForm.startNum.value.length==0) || ( document.selectionForm.startNum.value==null)) {
	startNumString = ""
	}
       else {
       startNumString = '&startNum=' + escape(document.selectionForm.startNum.value);
       }
 
numResultsString = ""
if ((document.selectionForm.numResults.value.length==0) || ( document.selectionForm.numResults.value==null)) {
	numResultsString = ""
	}
       else {
       numResultsString = '&numResults=' + document.selectionForm.numResults.value;
       } 

pDateString = ""
if ((document.selectionForm.pDate.value.length==0) || ( document.selectionForm.pDate.value==null)) {
	pDateString = ""
	}
       else {
       pDateString = '&date=' + document.selectionForm.pDate.value;
       }

pSDateString = ""
if ((document.selectionForm.pSDate.value.length==0) || ( document.selectionForm.pSDate.value==null)) {
	pSDateString = ""
	}
       else {
       pSDateString = '&startDate=' + document.selectionForm.pSDate.value;
       }

pEDateString = ""
if ((document.selectionForm.pEDate.value.length==0) || ( document.selectionForm.pEDate.value==null)) {
	pEDateString = ""
	}
       else {
       pEDateString = '&endDate=' + document.selectionForm.pEDate.value;
       }

document.selectionForm.queryBox.value = 'http://api.npr.org/query?id=' + selectedTopicsString  +  selectedProgramsString  + selectedSeriesString  + searchTermString + startNumString+ numResultsString+ pDateString + pSDateString + pEDateString;


// alert(document.selectionForm.queryBox.value);

document.selectionForm.newURL.value ='timeline_new.html?id=' + document.selectionForm.queryBox.value + '&output=JSON' + '&apiKey=MDAxNzgwMDQ5MDEyMTQ4NzYyMjU4YmY1Yw004' + '&callback=parseJSON';

// alert(document.selectionForm.newURL.value);
}

<!-- end javascript for query string/url -->

<!-- begin additional javascript for scal -->
    // the following javascript was taken from the jscal demo:
    // 
    
    //Extend the scal library to add draggable calendar support.
    //This script block can be added to the scal.js file.
    Object.extend(scal.prototype,
    {
        toggleCalendar: function()
        {
            var element = $(this.options.wrapper) || this.element;
            this.options[element.visible() ? 'onclose' : 'onopen'](element);
            this.options[element.visible() ? 'closeeffect' : 'openeffect'](element, {duration: 0.5});
        },

        isOpen: function()
        { 
            return ( $(this.options.wrapper) || this.element).visible();
        }
    });
    
    //this is a global variable to have only one instance of the calendar
    var calendar = null;
    
    //@element   => is the <div> where the calender will be rendered by Scal.
    //@input     => is the <input> where the date will be updated.
    //@container => is the <div> for dragging.
    //@source    => is the img/button which raises up the calender, the script will locate the calenar over this control.
    function showCalendar(element, input, container, source)            
    {
        if (!calendar)
        {
            container = $(container);
            //the Draggable handle is hard coded to "rtop" to avoid other parameter.
            new Draggable(container, {handle: "rtop", starteffect: Prototype.emptyFunction, endeffect: Prototype.emptyFunction});
            
            //The singleton calendar is created.
            calendar = new scal(element, $(input), 
            {
                updateformat: 'mm/dd/yyyy', 
                closebutton: '&nbsp;', 
                wrapper: container
            }); 
        }
        else
        {
            calendar.updateelement = $(input);
        }

        var date = new Date($F(input));
        calendar.setCurrentDate(isNaN(date) ? new Date() : date);
        
        //Locates the calendar over the calling control  (in this example the "img").
        if (source = $(source))
        {
            Position.clone($(source), container, {setWidth: false, setHeight: false, offsetLeft: source.getWidth() + 2});
        }
        
        //finally show the calendar =)
        calendar.openCalendar();
    };
    
    var imgCalendar_Click = function(e, input)
    {
        showCalendar("calendar", input, "calendar-container", Event.element(e));
    };
    
    Event.observe(window, "load", function(e)
    {
        Event.observe("imgDate", "click", imgCalendar_Click.bindAsEventListener(this, "pDate"));
	Event.observe("imgSDate", "click", imgCalendar_Click.bindAsEventListener(this, "pSDate"));
        Event.observe("imgEDate", "click", imgCalendar_Click.bindAsEventListener(this, "pEDate"));

    });    
<!-- end additional javascript for scal -->
