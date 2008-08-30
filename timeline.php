<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html lang="en">
<head>
<title>SIMILE Timeline of Stories from NPR</title>

<script src="http://simile.mit.edu/timeline/api/timeline-api.js" type="text/javascript"></script>
<script src="http://npr-simile-timeline.googlecode.com/svn/trunk/nprtimeline.js" type="text/javascript"></script>

</head>
<body onresize="onResize();" >
<div id="my-timeline" class="timeline-default" style="height: 350px;">

<script type="text/javascript" language="JavaScript">
/*
document.write('<sc'+'ript');
document.write(' type="text/javascript"');
document.write(' language="JavaScript"');
document.write(' src="http://api.npr.org/query');
document.write('?id='+ parent.topFrame.document.selectionForm.topicList.value +'&apiKey=MDAxNzgwMDQ5MDEyMTQ4NzYyMjU4YmY1Yw004&output=JSON&callback=parseJSON">');
document.write('</sc'+'ript>');
// alert(' src="http://api.npr.org/query' + '?id='+ parent.topFrame.document.selectionForm.topicList.value +'&apiKey=MDAxNzgwMDQ5MDEyMTQ4NzYyMjU4YmY1Yw004&output=JSON&callback=parseJSON">');
*/
</script>



<?php $id = $_GET['id']; echo("<script src=\"http://api.npr.org/query?id={$id}&apiKey=MDAxNzgwMDQ5MDEyMTQ4NzYyMjU4YmY1Yw004&output=JSON&callback=parseJSON\" type=\"text/javascript\"></script>");?>
</body>
</html>
