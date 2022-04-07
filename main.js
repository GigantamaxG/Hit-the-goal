const { fabric } = require("./fabric");

var canvas=new fabric.Canvas ('CanvasOnRent');
// Create canvas variable
ball_x=0;
ball_y=0;
hole_x=1100
hole_y=250
//Set initial positions for ball and hole images.


block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h.png",function(Img){
	hole.obj = Img;
	hole.obj.scaletoWidth(50);
	hole.obj.scaletoHeight(50);
	hole.obj.set({
		top:hole_y,
		left:hole_x
	});
	canvas.add(hole_obj);
});
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png",function(Img){
		ball.obj = Img;
		ball.obj.scaletoWidth(50);
		ball.obj.scaletoHeight(50);
		ball.obj.set({
			top:ball_y,
			left:ball_x
		});
		canvas.add(ball_obj);
	});	// write code to Upload ball image on canvas
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And if coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
if((ball_x==hole_x)&&(ball_y==hole_y))
{
	canvas.remove(ball.obj);
	console.log("You Have Hit The Goal");
	document.getElementById("hd3").innerHTML="You have Hit the Goal!!!";
	document.getElementById("CanvasOnRent").style.borderColor="red";
}	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ball_y >=5)
		{
			ball_y = ball_y - block_image_height;
			console.log("block image height = " + block_image_height);
			console.log("When Up arrow key is pressed, X =  " + ball_x + " , Y = "+ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}
	}

	function down()
	{
		f(ball_y <=450)
		{
			ball_y = ball_y + block_image_height;
			console.log("block image height = " + block_image_height);
			console.log("When Down arrow key is pressed, X =  " + ball_x + " , Y = "+ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	

	function left()
	{
		if(ball_x >5)
		{
			if(ball_x >5)
		{
			ball_x = ball_x - block_image_width;
			console.log("block image width = " + block_image_width);
			console.log("When Left arrow key is pressed, X =  " + ball_x + " , Y = "+ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			
		{
			ball_x = ball_x + block_image_width;
			console.log("block image width = " + block_image_width);
			console.log("When Right arrow key is pressed, X =  " + ball_x + " , Y = "+ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}
	}
	
}

