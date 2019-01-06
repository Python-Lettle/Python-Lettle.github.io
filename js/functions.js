window.onload=function(){
	if(typeof(Storage)!=="undefined"){
	var vConsole = new VConsole();
	//localStorage.clear();
	
	if(localStorage.i==1){
		money=JSON.parse(localStorage.money);gold=JSON.parse(localStorage.gold);ore = JSON.parse(localStorage.ore);iron=JSON.parse(localStorage.iron);
	}else{
		localStorage.clear();
		localStorage.money=JSON.stringify(1000);localStorage.gold=JSON.stringify(0);localStorage.iron=JSON.stringify(0);localStorage.ore=JSON.stringify(0);localStorage.i=JSON.stringify(1);
		money=JSON.parse(localStorage.money);gold=JSON.parse(localStorage.gold);ore = JSON.parse(localStorage.ore);iron=JSON.parse(localStorage.iron);
	}

	tab_v=new Array;tab_i=new Array;tab_g=new Array;
	tab_v.push(document.getElementById("v1"));tab_v.push(document.getElementById("v2"));tab_v.push(document.getElementById("v3"));
	tab_i.push(document.getElementById("i1"));tab_i.push(document.getElementById("i2"));tab_i.push(document.getElementById("i3"));
	tab_g.push(document.getElementById("g1"));tab_g.push(document.getElementById("g2"));tab_g.push(document.getElementById("g3"));

	} else {document.getElementById("p").innerHTML="抱歉! 不支持 web 存储。";}

	refresh();
};
function save(){
	localStorage.money=JSON.stringify(money);localStorage.gold=JSON.stringify(gold);localStorage.iron=JSON.stringify(iron);localStorage.ore=JSON.stringify(ore);localStorage.i=JSON.stringify(1);
	money=JSON.parse(localStorage.money);gold=JSON.parse(localStorage.gold);ore = JSON.parse(localStorage.ore);iron=JSON.parse(localStorage.iron);

}
function refresh(){
	document.getElementById("money").innerHTML="你有:"+String(money)+"元";
	var vConsole = new VConsole();
	if(typeof(Storage)!=="undefined"){
		
	if(localStorage.i==1){
		money = JSON.parse(localStorage.money);
		iron = JSON.parse(localStorage.iron);
		gold = JSON.parse(localStorage.gold);
		ore = JSON.parse(localStorage.ore);
	}else{
		localStorage.money=JSON.stringify(1000);
		localStorage.iron=JSON.stringify(0);
		localStorage.gold=JSON.stringify(0);
		localStorage.i=JSON.stringify(1);
		localStorage.ore=JSON.stringify(0);
		money = JSON.parse(localStorage.money);
		iron = JSON.parse(localStorage.iron);
		gold = JSON.parse(localStorage.gold);
		ore = JSON.parse(localStorage.ore);
		}
	tab_n=new Array;tab_i=new Array;
	tab_n.push(document.getElementById("n1"));
	tab_n.push(document.getElementById("n2"));
	tab_n.push(document.getElementById("n3"));
	tab_i.push(document.getElementById("i1"));
	tab_i.push(document.getElementById("i2"));
	tab_i.push(document.getElementById("i3"));
	ship = document.getElementById("ship");
	warehouse = document.getElementById("warehouse");
	universe = document.getElementById("universe");
	
	tab_i[0].innerHTML="铁";
	tab_n[0].innerHTML=String(iron);
	tab_i[1].innerHTML="金";
	tab_n[1].innerHTML=String(gold);
	tab_i[2].innerHTML="砂";
	tab_n[2].innerHTML=String(ore);
	
	
	}else {document.getElementById("text").innerHTML="抱歉! 不支持 web 存储。";}
};
window.onbeforeunload = function(){
	localStorage.money=JSON.stringify(money);
	localStorage.iron=JSON.stringify(iron);
	localStorage.gold=JSON.stringify(gold);
	localStorage.ore=JSON.stringify(ore);
};
function randomNum(minNum,maxNum){ 
    switch(arguments.length){ 
        case 1:return parseInt(Math.random()*minNum+1,10); break; 
        case 2:return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); break;
		default:return 0;break; } 
} 
function clear(){ship.style = "display:none";warehouse.style = "display:none";universe.style = "display:none";}
function ship_dis(){clear();ship.style="display:block";}
function warehouse_dis(){clear();warehouse.style = "display:block";}
function universe_dis(){clear();universe.style = "display:block";}
function dig(){ore += randomNum(1,10);tab_n[2].innerHTML=String(ore);}
function screen(){
	if(ore>=10){
		ore-=10;
		if(randomNum(0,1)==1){iron+=randomNum(1,3);}
		if(randomNum(0,9)==1){gold+=1;}
		tab_n[2].innerHTML=String(ore);
		tab_n[1].innerHTML=String(gold);
		tab_n[0].innerHTML=String(iron);
	}
}
