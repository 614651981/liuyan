$(function(){
	let textarea1=$('textarea')[0];
	let textarea2=$('textarea')[1];
	let button=$('button')[0];
	let write=$('.write')[0];
	let span=$('span')[0];
	let Max=textarea1.maxLength;
	// console.log(write);
	textarea1.onkeyup=function(){
		let neirong=textarea1.value;
		span.innerText=`${Max-neirong.length}`;
	}
	textarea1.onkeydown=function(e){
		if(e.keyCode==13){
			textarea2.innerText=textarea1.value;
			textarea1.value=null;
			
		}
	}
	button.onclick=function(){
		textarea2.innerText=textarea1.value;
		textarea1.value=null;
	
	}
 	
 })