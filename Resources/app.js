var win = Ti.UI.createWindow({
	title:"finger swipe and two-finger tap",
	backgroundColor:"#ffffff",
	exitOnClose:true
});

var label = Ti.UI.createLabel({
	text:"",
	textAlign:"center",
	height:36,
	height:"auto",
	width:"auto"
});

win.addEventListener("swipe", function(e){
	label.text = "swipe to the " + e.direction;
})

win.addEventListener("twofingertap", function(e){
	label.text = "double tap";
})


win.add(label);
win.open();
