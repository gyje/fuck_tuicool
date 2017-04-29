function fuck_tuicool(){
	var changelink=document.getElementsByClassName("cut70");
	var changetxt=changelink[0].href;
	var temp=changetxt.split("?utm_source=tuicool&utm_medium=referral");
	changelink[0].href=temp[0];
}
fuck_tuicool();