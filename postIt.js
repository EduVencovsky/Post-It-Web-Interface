var newX, newY, mouseX, mouseY, offsetX, offsetY, onsetX, onsetY;
var windowWidth = $(document).width();
var windowHeight = $(document).height();

let currentPostIt = null;
let postItCount = 0;

const maxPostIt = 4;

$(document).ready(function() {

	$(document).bind('mousemove',function(e){ 
		mouseX = e.pageX;
		mouseY = e.pageY;
        if (currentPostIt) {

        	newX = mouseX + offsetX;

	        if ( mouseX + onsetX >= windowWidth ) {
	          newX = windowWidth - currentPostIt.width();
	        } 

	        if ( mouseX + offsetX <= 0 ) {
	          newX = 0;
	        }
	   
	        newY = mouseY + offsetY;

	        if ( mouseY + onsetY >= windowHeight ) {
	          newY = windowHeight - currentPostIt.height();
	        } 
	        
	        if ( mouseY + offsetY <= 0 ) {
	          newY = 0;
	        }

	        console.log(windowWidth, windowHeight);
	        console.log(newX, newY);
	        console.log(currentPostIt.width(), currentPostIt.height())
	        
            $(currentPostIt).offset({left: newX, top: newY});
        } 
	}); 

	$(window).resize(function() {
	  	windowWidth = $(window).width();
		windowHeight = $(window).height();
	});

	$("#addPostIt").click(function(){
		if(postItCount < maxPostIt){
			createPostIt();
		}
	});

});

function createPostIt(){
	
	let postIt = $(document.createElement("div"))
				.addClass("postIt")
				.width(windowWidth / 5 + "px")
				.height(windowHeight / 5 + "px")
				// .height("20%")
				.offset({left: windowWidth / 2, top: windowHeight / 2});

	let postItDeleteButton = $(document.createElement("button"))
							.addClass("postItDeleteButton")
							.text("delete")
							.height("100%")
							.click(function(){
								deletePostIt(postIt);
							});

	let postItDragDiv = $(document.createElement("div"))
						.addClass("postItDragDiv")
						.height("15%")
						.mouseup(function(){
							console.log("Up");
					    	currentPostIt = null;
					    }).mousedown(function(e){					    	
					    	offsetX = postIt.offset().left - e.pageX;
					    	offsetY = postIt.offset().top - e.pageY;											    
							onsetX = postIt.width() + offsetX;
							onsetY = postIt.height() + offsetY;
					    	console.log("Down");
					    	currentPostIt = postIt;
					    });

	let postItTextArea = $(document.createElement("textarea"))
							.addClass("postItTextArea")
							.keyup(function(){
								checkTextAreaScrollBar(this);
							});

	postItDragDiv.append(postItDeleteButton);
	postIt.append(postItDragDiv).append(postItTextArea);
	$(document.body).append(postIt);

	postItCount++;

}

function deletePostIt(p){
	p.remove();
	postItCount--;
}

function checkTextAreaScrollBar(e){

    while(e.clientHeight < e.scrollHeight){

    	e.value = e.value.slice(0, -1);

    }

}