window.onload=function(){
	now=0;
	min=1;
	max=168;
	log_n=0;
	document.getElementById("que").innerHTML = "点击提交按钮开始答题";
};
function indexof(arr,item){
    if (Array.prototype.indexOf){//判断浏览器是否支持indexof属性
    	return arr.indexOf(item);
    }else{
    	for(var i=0;i<=arr.length;i++){
   			if(arr[i]===item){
    			return i;
    		}
        }
    }
};
function submit(){
	min = Number(document.getElementById("from").value);
	max = Number(document.getElementById("to").value);
	if(now!=0){
		ques = document.getElementById("que").innerHTML;
		answ = document.getElementById("ans").value;
		if(log_n=15){log_n=0;cleanlog();}
		document.getElementById("logs").innerHTML += String(now) + "-" + ques + "-" + answ + "<br/>";
	};
	now = randomNum(min,max);
	document.getElementById("que").innerHTML = data[now-1]["que"];
	document.getElementById("ans").value = "";
	log_n++
	console.log(log_n)
};
function randomNum(minNum,maxNum){ 
    switch(arguments.length){ 
        case 1:return parseInt(Math.random()*minNum+1,10); break; 
        case 2:return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); break;
		default:return 0;break;} 
} 

function logs(){
	document.getElementById("play").style="display:none";
	document.getElementById("log").style="display:block";
}
function back(){
	document.getElementById("log").style="display:none";
	document.getElementById("play").style="display:block";
}
function cleanlog(){
	document.getElementById("logs").innerHTML = "";
	log_n=0;
}