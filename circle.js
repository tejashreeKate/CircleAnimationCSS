window.onload = (function(){
	console.log("dom loaded")
	var slider = document.getElementById("myRange");
	//document.getElementById("animationVal").innerHTML = slider.value+'s';

	$(".circle").mouseleave(function(elem){
		event.target.innerHTML = ""
	})

})

function clickMe(){
	$(".buttonContainer").hide();
	$(".stage").show();
	var circles = document.getElementsByClassName("circle");
	for(let i=0;i<circles.length;i++){
	    (function(i) {
	        setTimeout(function() { 
	        	var deg = Math.floor(Math.random() * 360) + 1;
	        	circles[i].style.transform = "rotate("+deg+"deg)"
	        	circles[i].classList.remove("hide")
				circles[i].classList.add("zoomInUp")
	        }, i * 1000);
	    })(i);
	}
	changeSlider();
	showLeftPanel();
}

function showLeftPanel(){
	$(".control-panel").removeClass("hide")
	$(".control-panel").addClass("slideInLeft")
}

function changeSlider(elem){
	var slider = document.getElementById("myRange");
	//document.getElementById("animationVal").innerHTML = slider.value+'s';
    var circles = document.getElementsByClassName("circle");

    var newTime, duration;

    for(var i=0;i<circles.length;i++){
   		duration = window.getComputedStyle(circles[i], null).getPropertyValue("animation-duration");
   		if(slider.value!=0){
   			newTime =10-parseFloat(slider.value)+i*2
   		}
   		else{
   			newTime = 0;
   		}
   		circles[i].classList.add("rotate")
   		circles[i].style.animationDuration = newTime+'s'
    }
}

function showId(elem){
	elem.innerHTML = elem.id
	setTimeout(function(){
		elem.innerHTML = ""
	},1000)
}

function deleteNode(elem){
	var deletemode = document.getElementById("deleteMode").checked;

	if(deletemode){
		var node = document.createElement("LI");                 
		var textnode = document.createTextNode("You just deleted "+elem.id+" !!"); 

		node.appendChild(textnode);                              
		document.getElementById("deletedNodes").appendChild(node)
		elem.remove();
	}
}

function toggleDelete(elem){
	if(elem.checked){
		$(".deleteContainer").show();
		document.getElementById("myRange").value = 0;
		document.getElementById("myRange").onchange();
		$(".center-circle").addClass("deleteCenter")
		$(".circle").addClass("deleteClass")
	}
	else{
		$(".deleteContainer").hide();
		document.getElementById("myRange").value = 2;
		document.getElementById("myRange").onchange();
		$(".center-circle").removeClass("deleteCenter")
		$(".circle").removeClass("deleteClass")
	}
}