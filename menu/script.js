document.getElementById('nav').onmouseover = function(event) {
	var target = event.target;
	if (target.className == 'line-menu-one'){
		var s = target.getElementsByClassName('menu-split');
		closeMeny();
		s[0].style.display='block';

	}
}

document.onmouseover=function (event) {
	var targer = event.targer;
	console.log(event.target);
	if (target.className!='line-menu-one' && target.className!='menu-split'){
		closeMenu();



	}
}

function closeMenu() {
	var menu =  document.getElementById('nav');
	var subm=document.getElementsByClassName('menu-split');
	for (far i=o; i <subm.length; i++) {
		subm[i].style.display="none";
	}
}