var tm;
var cars;
var cx;
var gameBegin;

function go()
{
   if(gameBegin==1)	return;
   gameBegin = 1;
   cars = new Array();
   
   for(var i=0; i<5; i++)
   {
	 cars[i] = document.getElementById("p"+i);
	 cars[i].style.border = "none";
   }
   cx = new Array();
   for(var i=0; i<5; i++)
	   {
	   cx[i] = 1720;
	   }
   tm = window.setInterval(timerGo, 50);
}
function timerGo()
{
 for(var i=0; i<5; i++)
	 {
	   cx[i] = cx[i] - Math.floor((Math.random()*10+3.3));
	   
	   if(cx[i]<=0)
		   {
		     window.clearInterval(tm);
		     gameBegin = 0;
		     cars[i].style.border = "5px ridge yellow";
		     return;
		   }
	   cars[i].style.left =""+cx[i]+"px";
	   
	 }
}