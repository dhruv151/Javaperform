/*Name this external file gallery.js*/

function upDate(previewPic){
 /* In this function you should
    1) change the url for the background image of the div with the id = "image"
    to the source file of the preview image
    */
  document.getElementById('image').innerHTML=previewPic.alt; document.getElementById('image').style.background="url("+previewPic.src+")";

	}

	function unDo(){
     /* In this function you should
    1) Update the url for the background image of the div with the id = "image"
    back to the orginal-image.  You can use the css code to see what that original URL was
    */
    var msg="Hover over an image below to display here.";
		document.getElementById('image').innerHTML=msg;
    document.getElementById('image').style.background= "none";
	}
