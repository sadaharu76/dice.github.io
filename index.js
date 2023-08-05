var i= Math.ceil((Math.random())*6);
var j= Math.ceil((Math.random())*6);

{
if(i===1)
{
document.querySelector("img.img1").setAttribute("src","./images/dice1.png");
}
else if(i===2)
{
document.querySelector("img.img1").setAttribute("src","./images/dice2.png");
}
else if(i===3)
{
document.querySelector("img.img1").setAttribute("src","./images/dice3.png");
}
else if(i===4)
{
document.querySelector("img.img1").setAttribute("src","./images/dice4.png");
}
else if(i===5)
{
document.querySelector("img.img1").setAttribute("src","./images/dice5.png");
}
else
{
document.querySelector("img.img1").setAttribute("src","./images/dice6.png");
}
}
{
if(j===1)
{
document.querySelector("img.img2").setAttribute("src","./images/dice1.png");
}
else if(j===2)
{
document.querySelector("img.img2").setAttribute("src","./images/dice2.png");
}
else if(j===3)
{
document.querySelector("img.img2").setAttribute("src","./images/dice3.png");
}
else if(j===4)
{
document.querySelector("img.img2").setAttribute("src","./images/dice4.png");
}
else if(j===5)
{
document.querySelector("img.img2").setAttribute("src","./images/dice5.png");
}
else
{
document.querySelector("img.img2").setAttribute("src","./images/dice6.png");
}
}
{
if(i>j)
{
    document.querySelector("h1").innerHTML= "Player 1 wins";
}
else if(j>i)
{
    document.querySelector("h1").innerHTML= "Player 2 wins";
}
else
{
    document.querySelector("h1").innerHTML= "draw";
}
}