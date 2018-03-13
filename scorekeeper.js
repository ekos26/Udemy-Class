var p1Button = document.querySelector("#p1");
var p2Button = document.getElementbyId("p1");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", function(){
	if(!gameOver){
		p1Score++;
		if(p1Score === winningScore){
			console.log("GAME OVER!!");
		}
	p1Display.textcontent = p1Score;
}	
});

p2Button.addEventListener("click", function(){
	if(!gameOver){
		p2Score++;
		if(p2Score === winningScore){
			console.log("GAME OVER!!");
		}
	p2Display.textcontent = p2 Score;
}	
});