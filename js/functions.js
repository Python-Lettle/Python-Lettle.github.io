window.onload=function(){
<<<<<<< HEAD
<<<<<<< HEAD
	id_list = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60","61","62","63","64","65","66","67","68","69","70","71","72","73","74","75","76","77","78","79","80","81","82","83","84","85","86","87","88","89","90","91","92","93","94","95","96","97","98","99","100","101","102","103","104","105","106","107","108","109","110","111","112","113","114","115","116","117","118","119","120","121","122","123","124","125","126","127","128","129","130","131","132","133","134","135","136","137","138","139","140","141","142","143","144","145","146","147","148","149","150","151","152","153","154","155","156","157","158","159","160","161","162","163","164","165","166","167","168","169","170","171","172","173","174","175","176","177","178","179","180","181","182","183","184","185","186","187","188","189","190","191","192","193","194","195","196","197","198","199","200","201","202","203","204","205","206","207","208","209","210","211","212","213","214","215","216","217","218","219","220","221","222","223","224","225","226","227","228","229","230","231","232","233","234","235","236","237","238","239","240","241","242","243","244","245","246","247","248","249","250","251","252","253","254","255","256","257","258","259","260","261","262","263","264","265","266","267","268","269","270","271","272","273","274","275","276","277","278","279","280","281","282","283","284","285","286","287","288","289","290","291","292","293","294","295","296","297","298","299","300","301","302","303","304","305","306","307","308","309","310","311","312","313","314","315","316","317","318","319","320","321","322","323","324","325","326","327","328","329","330","331","332","333","334","335","336","337","338","339","340","341","342","343","344","345","346","347","348","349","350","351","352","353","354","355","356","357","358","359","360","361","362","363","364","365","366","367","368","369","370","371","372","373","374","375","376","377","378","379","380","381","382","383","384","385","386","387","388","389","390","391","392","393","394","395","396","397","398","399","400","401","402","403","404","405","406","407","408","409","410","411","412","413","414","415","416","417","418","419","420","421","422","423","424","425","426","427","428","429","430","431","432","433","434","435","436","437","438","439","440","441","442","443","444","445","446","447","448","449","450","451","452","453","454","455","456","457","458","459","460","461","462","463","464","465","466","467","468","469","470","471","472","473","474","475","476","477","478","479","480","481","482","483","484","485","486","487","488","489","490","491","492","493","494","495","496","497","498","499","500","501","502","503","504","505","506","507","508","509","510","511","512","513","514","515","516","517","518","519","520","521","522","523","524","525","526","527","528","529","530","531","532","533","534","535","536","537","538","539","540","541","542","543","544","545","546","547","548","549","550","551","552","553","554","555","556","557","558","559","560","561","562","563","564","565","566","567","568","569","570","571","572","573","574","575","576","577","578","579","580","581","582","583","584","585","586","587","588","589","590","591","592","593","594","595","596","597","598","599","600","601","602","603","604","605","606","607","608","609","610","611","612","613","614","615","616","617","618","619","620","621","622","623","624","625","626","627","628","629","630","631","632","633","634","635","636","637","638","639","640","641","642","643","644","645","646","647","648","649","650","651","652","653","654","655","656","657","658","659","660","661","662","663","664","665","666","667","668","669","670","671","672","673","674","675","676","677","678","679","680","681","682","683","684","685","686","687","688","689","690","691","692","693","694","695","696","697","698","699","700","701","702","703","704","705","706","707","708","709","710","711","712","713","714","715","716","717","718","719","720","721","722","723","724","725","726","727","728","729","730","731","732","733","734","735","736","737","738","739","740","741","742","743","744","745","746","747","748","749","750","751","752","753","754","755","756","757","758","759","760","761","762","763","764","765","766","767","768","769","770","771","772","773","774","775","776","777","778","779","780","781","782","783","784","785","786","787","788","789","790","791","792","793","794","795","796","797","798","799","800","801","802","803","804","805","806","807","808","809","810","811","812","813","814","815","816","817","818","819","820","821","822","823","824","825","826","827","828","829","830","831","832","833","834","835","836","837","838","839","840","841","842","843","844","845","846","847","848","849","850","851","852","853","854","855","856","857","858","859","860","861","862","863","864","865","866","867","868","869","870","871","872","873","874","875","876","877","878","879","880","881","882","883","884","885","886","887","888","889","890","891","892","893","894","895","896","897","898","899","900","901","902","903","904","905","906","907","908","909","910","911","912","913","914","915","916","917","918","919","920","921","922","923","924","925","926","927","928","929","930","931","932","933","934","935","936","937","938","939","940","941","942","943","944","945","946","947","948","949","950","951","952","953","954","955","956","957","958","959","960","961","962","963","964","965","966","967","968","969","970","971","972","973","974","975","976","977","978","979","980","981","982","983","984","985","986","987","988","989","990","991","992","993","994","995","996","997","998","999","1000","1001","1002","1003","1004","1005","1006","1007","1008","1009","1010","1011","1012","1013","1014","1015","1016","1017","1018","1019","1020","1021","1022","1023","1024","1025","1026","1027","1028","1029","1030","1031","1032","1033","1034","1035","1036","1037","1038","1039","1040","1041","1042","1043","1044","1045","1046","1047","1048","1049","1050","1051","1052","1053","1054","1055","1056","1057","1058","1059","1060","1061","1062","1063","1064","1065","1066","1067","1068","1069","1070","1071","1072","1073","1074","1075","1076","1077","1078","1079","1080","1081","1082","1083","1084","1085","1086","1087","1088","1089","1090","1091","1092","1093","1094","1095","1096","1097","1098","1099","1100","1101","1102","1103","1104","1105","1106","1107","1108","1109","1110","1111","1112","1113","1114","1115","1116","1117","1118","1119","1120","1121","1122","1123","1124","1125","1126","1127","1128","1129","1130","1131","1132","1133","1134","1135","1136","1137","1138","1139","1140","1141","1142","1143","1144","1145","1146","1147","1148","1149","1150","1151","1152","1153","1154","1155","1156","1157","1158","1159","1160","1161","1162","1163","1164","1165","1166","1167","1168","1169","1170","1171","1172","1173","1174","1175","1176","1177","1178","1179","1180","1181","1182","1183","1184","1185","1186","1187","1188","1189","1190","1191","1192","1193","1194","1195","1196","1197","1198","1199","1200","1201","1202","1203","1204","1205","1206","1207","1208","1209","1210","1211","1212","1213","1214","1215","1216","1217","1218","1219","1220","1221","1222","1223","1224","1225","1226","1227","1228","1229","1230","1231","1232","1233","1234","1235","1236","1237","1238","1239","1240","1241","1242","1243","1244","1245","1246","1247","1248","1249","1250","1251","1252","1253","1254","1255","1256","1257","1258","1259","1260","1261","1262","1263","1264","1265","1266","1267","1268","1269","1270","1271","1272","1273","1274","1275","1276","1277","1278","1279","1280","1281","1282","1283","1284","1285","1286","1287","1288","1289","1290","1291","1292","1293","1294","1295","1296","1297","1298","1299","1300","1301",]
	word_list = ["abandon","ability","aboard","abroad","abrupt","absolute","absorb","abstract","abundant","accent","access","accommodate","accompany","accomplish","account","accumulate","accuracy","accuse","accustom","ache","achieve","acknowledge","acquaintance","acquire","activity","actual","adapt","addicted","addition","address","adequate","adjust","administration","admission","adopt","advance","advantage","adventure","advertise","advocate","affair","affect","afford","afterwards","agency","agent","aid","alarm","alike","alive","allowance","alternative","amateur","ambassador","ambition","ambulance","amuse","analysis","ancestor","ancient","anniversary","announce","annoy","annual","anxiety","anxious","apart","apartment","apologize","appeal","appearance","applicant","application","appoint","appointment","appreciate","approach","appropriate","approval","approve","arrange","arrangement","arrest","artificial","ashamed","aspect","assist","associate","association","assume","athlete","atmosphere","attach","attack","attempt","attend","attitude","attract","audience","author","authority","automatic","available","avenue","average","award","aware","awful","awkward","background","backward","baggage","bake","balance","ball","ban","band","banquet","bar","bare","bargain","base","basic","battery","battle","behalf","behavior","belief","belong","bend","beneath","beneficial","benefit","beyond","bid","bill","biography","biology","bite","bitter","blame","blank","block","board","bomb","bond","bonus","border","bother","bottle","bottom","boundary","bow","breakthrough","brief","broad","broadcast","budget","burden","burglar","burst","bury","cage","calculate","camp","campaign","campus","cancel","candidate","case","cash","casual","catalogue","cattle","cause","cautious","cave","ceiling","celebrity","cell","certificate","chain","challenge","channel","chaos","character","charge","charity","charm","chase","cheat","check","chemical","chief","circumstance","citizen","civil","civilization","claim","clap","clarify","classic","classify","clear","click","clone","coast","colleague","combine","comedy","comfort","comment","commercial","commit","committee","common","companion","comparison","competition","complain","complete","complex","comprehension","compulsory","concentrate","concept","concern","conclude","condition","conduct","conference","confirm","conflict","confuse","consequence","considerate","consist","constant","construct","consult","consumer","contain","contemporary","content","contrary","control","controversial","convenient","conversation","convince","cottage","count","counter","course","court","crash","credit","crime","criticize","cruel","cure","curious","currency","current","curriculum","cushion","custom","customer","customs","daily","damage","damp","database","dawn","deal","debate","debt","decade","decision","declare","decline","deed","defeat","defend","define","definite","degree","delay","delegate","delicate","delighted","deliver","demonstrate","department","departure","description","deserve","desire","desperate","destination","detective","determine","differ","digest","dignity","diploma","direction","disabled","disaster","discipline","discount","discourage","discriminatio","disgusting","display","dismiss","distinction","distinguish","distribute","disturb","dive","diverse","divorce","dominate","donate","dozen","draft","drama","draw","drawback","drill","drown","drug","due","dull","dusty","dynamic","dynasty","eager","easy","economic","economy","edge","effort","elect","electricity","elegant","embassy","emerge","emergency","emotion","encounter","encourage","energetic","energy","engage","enlarge","enormous","ensure","enterprise","entertainment","enthusiastic","entire","entrance","entry","environment","envy","equipment","escape","especially","essay","essential","establish","estimate","ethnic","evaluate","event","eventually","evolution","exact","examine","exceptional","exchange","exhausted","exist","expand","expense","expert","explanation","exploit","explore","export","expose","express","extend","extra","extraordinary","extreme","extremely","factor","fail","fair","fairly","familiar","fantasy","fare","fault","favour","fax","feed","female","figure","fill","firm","fit","fix","flat","flavour","flee","flexible","float","fluent","focus","forbid","force","forecast","forever","forgive","form","formal","fortune","fountain","frankly","freedom","frequent","fresh","frighten","fuel","fund","furniture","gain","gallery","gap","garbage","gas","gather","gene","generation","generous","genius","gentle","gesture","gift","glance","global","goal","goods","govern","grab","gradual","gradually","grain","grand","grasp","grateful","grocer","guarantee","guide","guideline","guilty","hall","hammer","handy","handle","hang","harbor","harm","hardship","harmony","harvest","hatch","hesitate","hide","highlight","hit","hobby","hold","honest","honor","hopeless","hospitable","host","hostess","hug","humor","hunt","hurt","ideal","identify","identity","ignore","illegal","image","imagine","immediate","immigration","impact","imply","import","impress","improve","incident","include","income","increase","indeed","independence","independent","indicate","individual","industry","infer","influence","influential","inform","informal","information","innocent","insist","inspect","inspire","instant","instruction","insurance","intelligence","intend","interest","international","interpret","interrupt","interval","introduce","introduction","invade","iron","ironic","issue","item","jam","jar","jewellery","jog","judge","judgment","justice","keen","kid","labor","lack","last","lately","latter","launch","lay","lead","leak","leap","legal","leisure","length","lesson","liberty","license","lift","linguistics","limit","link","liquid","literature","litter","lively","load","loaf","locate","logo","long","loose","luggage","mad","magic","main","major","majority","manage","manner","march","mark","market","marriage","marry","mass","massive","master","match","material","mature","mayor","means","meanwhile","measure","medical","medium","memory","mend","mental","mention","mercy","merely","mess","metal","method","mild","military","minimum","minority","miserable","mission","mobile","model","modest","monitor","mood","moral","motivate","motor","motto","multiply","murder","muscle","mysterious","mystery","narrow","nationality","native","natural","nature","navy","neat","necessary","negative","negotiate","neighbourhood","nephew","noble","nod","none","nonsense","normal","notice","nowadays","nuclear","nursery","nutrition","obey","observe","obvious","occasion","occupy","occupation","occur","offer","official","operate","operation","opportunity","oppose","opposite","optimistic","optional","ordinary","organization","origin","original","otherwise","ought","outcome","outdoor","outgoing","outline","output","outstanding","overcome","overhear","overlook","overweight","owe","own","pace","pack","packet","pain","pale","paragraph","parcel","pardon","participate","particular","partner","parttime","passage","passerby","passion","patience","patient","pattern","peace","peaceful","peak","pension","percentage","perfect","perform","performance","perhaps","period","permanent","permit","permission","personal","petrol","phenomenon","philosophy","physical","pie","pile","pilot","pipe","plain","plastic","platform","please","pleased","pleasure","plenty","plot","point","poison","position","positive","possess","possession","possibility","possibly","post","poster","pot","potential","pound","pour","poverty","powder","power","powerful","practical","praise","pray","precious","predict","prefer","pregnant","prepare","present","presentation","preserve","president","press","pressure","pretend","price","pride","primary","principle","print","prisoner","private","privilege","prize","probably","problem","procedure","process","produce","product","production","profession","profit","project","promote","proper","propose","prospect","protest","prove","provide","province","psychology","pub","public","publish","pull","pulse","pump","punish","purchase","pure","purple","purpose","purse","pursue","pursuit","push","puzzle","qualification","qualified","quality","quantity","quarrel","quarter","queen","question","queue","quit","race","rainfall","raise","random","range","rank","rapid","rare","rate","rather","ray","react","ready","realistic","reality","realize","reasonable","recall","receipt","recent","reception","recipe","recognize","recommend","record","recover","recreation","recycle","reduce","refer","referee","reference","reflect","reform","refreshing","refuse","regard","regardless","region","register","regret","regular","regulation","reject","relate","relation","relative","relax","relevant","reliable","relief","religion","rely","remain","remark","remarkable","remind","remote","remove","rent","repeat","replace","reply","represent","representative","reputation","request","require","rescue","research","resemble","reserve","resident","resign","resist","resource","respect","respond","response","responsibility","restriction","retell","retire","review","revision","revolution","reward","rhythm","ridiculous","ripe","rise","risk","rob","role","roll","roof","root","rough","routine","royal","rubbish","rude","ruin","rush","sacrifice","safety","sail","sailor","salad","salary","sale","salute","sample","satellite","satisfy","saying","scale","scene","scenery","schedule","scholar","scholarship","scientific","score","scream","sculpture","search","seat","secret","secretary","section","secure","security","seed","seek","seize","seldom","select","selfish","semester","senior","sense","sensitive","sentence","separate","series","serious","serve","service","settle","settlement","severe","shabby","shadow","shake","shame","shape","share","sharp","sharpen","shave","sheet","shelf","shelter","shock","shoot","shore","shortly","shortcoming","shot","shoulder","shower","shut","shy","sick","sigh","sign","signal","signature","significance","silent","silly","similar","simple","sincerely","single","sink","sit","site","situated","situation","skeptical","skillful","skyscraper","slave","sleeve","slide","slight","slightly","slim","slip","smart","smooth","soap","sob","social","soft","software","soil","solar","soldier","solid","solution","solve","somehow","sorrow","sort","soul","soup","source","souvenir","sow","space","special","specialist","specific","spirit","spit","splendid","sponsor","spot","spread","spy","stable","stadium","staff","stage","stand","standard","stare","start","state","statement","statesman","steady","steal","steam","steel","steep","stick","stomach","store","storm","straight","straightforward","strategy","strawberry","stream","strength","strengthen","stress","strict","strike","structure","struggle","stubborn","studio","stupid","style","subject","subjective","submit","suburb","successful","suddenly","suffer","suit","suitable","summary","super","superior","supply","support","suppose","surface","surgeon","surprise","surround","survive","swallow","sweat","sweep","swift","swing","switch","symbol","sympathy","symphony","system","table","tail","tale","talent","tap","target","taxpayer","teamwork","tear","tease","technique","temperature","tend","tense","tent","term","terminal","terrify","theater","theft","theme","theory","therefore","thick","thief","thin","thinking","thirsty","thorough","thought","thread","threat","throat","through","throughout","thunderstorm","thus","tidy","tie","tiger","tin","tiny","tip","toast","tolerate","tongue","tooth","topic","total","tough","tour","tourism","toward","track","trade","traffic","tragedy","training","transform","transport","trial","treasure","treat","tremble","trend","trick","troop","truth","tube","type","typical","tyre","ugly","ultimately","unconscious","underground","underline","undertake","union","unique","unite","united","universal","universally","universe","university","unknown","unlike","unusual","upper","upset","upstairs","upwards","urban","urge","urgent","vacant","vacation","vain","valid","valuable","value","variety","various","vast","vehicle","version","via","victim","view","violate","violence","violent","virtue","virus","visa","visual","vital","volcano","volunteer","vote","voyage","wage","waist","wander","warn","waste","wave","weakness","wealth","wealthy","weapon","website","weep","weigh","weight","welfare","wet","wheel","while","whisper","whistle","whole","wide","widespread","wile","wildlife","willing","wind","wing","wipe","wisdom","wise","withdraw","witness","wonder","wood","wooden","word","worldwide","worn","worth","worthwhile","worthy","yard","yell","youth","zone",]
	document.getElementById("word").innerHTML = word_list[randomNum(0,word_list.length-1)];
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
	word = document.getElementById("word").innerHTML;
	chinese = document.getElementById("Chinese").value;
	document.getElementById("logs").innerHTML += String(indexof(word_list,word)+1) + "-" + word + "-" + chinese + "<br>";
	document.getElementById("word").innerHTML = word_list[randomNum(0,word_list.length-1)];
};
=======
=======
>>>>>>> parent of 1e95ccf... Word Worker
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
	solution = 0;
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
<<<<<<< HEAD
>>>>>>> parent of 1e95ccf... Word Worker
=======
>>>>>>> parent of 1e95ccf... Word Worker
function randomNum(minNum,maxNum){ 
    switch(arguments.length){ 
        case 1:return parseInt(Math.random()*minNum+1,10); break; 
        case 2:return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); break;
		default:return 0;break;} 
} 
<<<<<<< HEAD
<<<<<<< HEAD
function logs(){
	document.getElementById("play").style="display:none";
	document.getElementById("log").style="display:block";
}
function back(){
	document.getElementById("log").style="display:none";
	document.getElementById("play").style="display:block";
}
=======
=======
>>>>>>> parent of 1e95ccf... Word Worker
function clear(){ship.style = "display:none";warehouse.style = "display:none";universe.style = "display:none";}
function ship_dis(){clear();ship.style="display:block";}
function warehouse_dis(){clear();warehouse.style = "display:block";}
function universe_dis(){clear();universe.style = "display:block";}
function dig(){ore += randomNum(1,10);tab_n[2].innerHTML=String(ore);}
function add(){
	if(solution <= 5 && ore>=10){
	solution += 1;
	ore-=10;
	tab_n[0].innerHTML=String(iron);tab_n[1].innerHTML=String(gold);tab_n[2].innerHTML=String(ore);
	sol=document.getElementById("solution");
	if(solution==1){
		sol.style="background-color:#CC9966;"+"height:"+String(50+10*solution)+"px";
	}else if(solution==2){
		sol.style="background-color:#996600;"+"height:"+String(50+10*solution)+"px";
	}else{
		sol.style="background-color:#663300;"+"height:"+String(50+10*solution)+"px";
	}}
}
function screen(){
	while(solution>0){
		if(randomNum(0,1)==1){iron+=randomNum(1,3);}
		if(randomNum(0,9)==1){gold+=1;}
		solution -= 1;
		sol.style="width:100px;height:50px;";
		tab_n[2].innerHTML=String(ore);
		tab_n[1].innerHTML=String(gold);
		tab_n[0].innerHTML=String(iron);
	}
}
<<<<<<< HEAD
>>>>>>> parent of 1e95ccf... Word Worker
=======
>>>>>>> parent of 1e95ccf... Word Worker
