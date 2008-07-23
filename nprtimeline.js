// pause script to pause computer
// http://www.sean.co.uk/a/webdesign/javascriptdelay.shtm
function pausecomp(millis)
{
var date = new Date();
var curDate = null;

do { curDate = new Date(); }
while(curDate-date < millis);
} 

// from the simile cubism tutorial
// http://simile.mit.edu/timeline/examples/cubism/cubism.html
var tl;
function onLoad(newjsondata) {

	entries = newjsondata.list
	
	var eventSource = new Timeline.DefaultEventSource();

/*
	// from example here: 
	//Generate 50 random events up to 20 days in the past or the future
	for(var i=0;i<50;i++) {
	var dateEvent = new Date();
	dateEvent.setTime(dateEvent.getTime() + ((Math.floor(Math.random()*41) - 20) * 24 * 60 * 60 * 1000));
	var evt = new Timeline.DefaultEventSource.Event(
		dateEvent, //start
		dateEvent, //end
		dateEvent, //latestStart
		dateEvent, //earliestEnd
		true, //instant
		"Event " + i, //text
		"Description for Event " + i //description
		);

*/

      // start new code
      	var x;
	// for (x = 0; x < entries.count ; x++){
	for (x = 0; x < 10; x++){
		// alert(x);
		nprico = "http://npr.org/favicon.ico"
		color = "green"
		var dateEvent = new Date();
		var evt = new Timeline.DefaultEventSource.Event(
		Date.parse(entries.story[x].storyDate.$text), //start
		Date.parse(entries.story[x].storyDate.$text), //end
		Date.parse(entries.story[x].storyDate.$text), //latestStart
		Date.parse(entries.story[x].storyDate.$text), //earliestEnd
		true, //instant
		entries.story[x].title.$text, //text
		entries.story[x].teaser.$text, // description
		'', // nprico, // image
		entries.story[x].link[0].$text, // link
		nprico, // icon
		color // color
		);
		// alert(JSONstring.make(evt));

		// end new code
	eventSource.add(evt);

  }

pausecomp(1000);
// alert(JSONstring.make(eventSource));

//create the timeline
  var bandInfos = [
    Timeline.createBandInfo({
        trackGap:       0.2,
        width:          "70%",
        intervalUnit:   Timeline.DateTime.WEEK,
        intervalPixels: 100,
        eventSource: eventSource
    }),
    Timeline.createBandInfo({
        showEventText:  false,
        trackHeight:    0.5,
        trackGap:       0.2,
        width:          "30%",
        intervalUnit:   Timeline.DateTime.MONTH,
        intervalPixels: 150,
        eventSource: eventSource
    })
  ];
  bandInfos[1].syncWith = 0;
  bandInfos[1].highlight = true;
  tl = Timeline.create(document.getElementById("my-timeline"), bandInfos);

}

var resizeTimerID = null;
function onResize() {
    if (resizeTimerID == null) {
        resizeTimerID = window.setTimeout(function() {
            resizeTimerID = null;
            tl.layout();
        }, 500);
    }
}

function ws_results(obj) {
	// alert(obj.list.title.$text);
}
