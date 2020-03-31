var p1=Math.floor((Math.random()*6)+1);
var p2=Math.floor((Math.random()*6)+1);


if(p1==1)
document.getElementsByClassName("dice-1")[0].setAttribute("src","images/dice1.png");
if(p1==2)
document.getElementsByClassName("dice-1")[0].setAttribute("src","images/dice2.png")
if(p1==3)
document.getElementsByClassName("dice-1")[0].setAttribute("src","images/dice3.png")
if(p1==4)
document.getElementsByClassName("dice-1")[0].setAttribute("src","images/dice4.png")
if(p1==5)
document.getElementsByClassName("dice-1")[0].setAttribute("src","images/dice5.png")
if(p1==6)
document.getElementsByClassName("dice-1")[0].setAttribute("src","images/dice6.png")

if(p2==1)
document.getElementsByClassName("dice-2")[0].setAttribute("src","images/dice1.png")
if(p2==2)
document.getElementsByClassName("dice-2")[0].setAttribute("src","images/dice2.png")
if(p2==3)
document.getElementsByClassName("dice-2")[0].setAttribute("src","images/dice3.png")
if(p2==4)
document.getElementsByClassName("dice-2")[0].setAttribute("src","images/dice4.png")
if(p2==5)
document.getElementsByClassName("dice-2")[0].setAttribute("src","images/dice5.png")
if(p2==6)
document.getElementsByClassName("dice-2")[0].setAttribute("src","images/dice6.png")

if(p1>p2)
{
  document.getElementsByClassName("player-mess")[0].textContent="🚩Player 1 wins";

}
if(p1<p2)
{
  document.getElementsByClassName("player-mess")[0].textContent="Player 2 wins🚩";
}
if(p1==p2)
{
  document.getElementsByClassName("player-mess")[0].textContent="Match Draws!!";
}
