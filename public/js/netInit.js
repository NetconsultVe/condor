/*
* netInit.js
* @version v1.1.0
* @copyright 2018 Netconsult.com.ve.
*/
;(function(wdw){
var arrFiles = [];
var newElem = function(a){return document.createElement(a);}
var div = [newElem("div"), newElem("div"), newElem("div"), newElem("span")];
div[0].className = "preload";
div[1].id = "preload",
div[2].className = "progressLoad";
div[2].appendChild(div[3]);
div[0].appendChild(div[2]);
div[0].appendChild(div[1]);
document["body"].insertBefore(div[0], document.getElementsByTagName("script")[0]);
var addEvent = function(a, b, c){a.addEventListener(b, c, false);}
var getRandom = function(){return "?ver=" + Math.random().toFixed(6);}
var getConfig = function(){
	var xhr = wdw.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XmlHttp");
	xhr.onreadystatechange = function(){if(xhr.readyState == 4 && xhr.status == 200) getFiles(JSON.parse(xhr.responseText));}
	xhr.open("GET", "config.json" + getRandom(), true);
	xhr.send(null);
}
var getFiles = function(a){
	var d = [], f = [], g = [];
	wdw.configJSON = a;
	wdw.configJSON.locationHref = location.href;
	wdw.configJSON.frameworks.forEach(function(valor, indice, array){array[indice] = valor.toLowerCase();});
	a.css.forEach(function(v, i, array){d.push(a.dir["css"]);f.push("stylesheet");g.push(v);});
	a.js.forEach(function(v, i, array){d.push(a.dir["js"]);f.push("text/javascript");g.push(v);});
	if(g.length > 0){addFiles(d, f, g);}
}
var addFiles = function(a, b, c, i){
	var k = i == undefined ? 0 : i;
	var swUrl = c[k].match(/^(http|https|ftp)\:\/\/[a-z0-9\.-]+\.[a-z]{2,4}/gi) ? true : false;
	var ver = (wdw.configJSON.frameworks.indexOf(c[k].toLowerCase().split(".")[0]) !== -1) ? "" : getRandom();
	if(b[k] == "text/javascript"){
		var s = document.createElement("script");
		s.type = b[k];
		s.src = swUrl ? c[k] : a[k] + c[k] + ver;
		s.location = "body";
	}
	if(b[k] == "stylesheet"){
		var s = document.createElement("link");
		s.rel = b[k];
		s.href = swUrl ? c[k] : a[k] + c[k] + ver;
		s.location = "head";
	}
	arrFiles.push(s);
	k++;
	var sw = (k < c.length) ? addFiles(a, b, c, k) : insertFiles(arrFiles);
}
var insertFiles = function(a, i){
	var k = i == undefined ? 0 : i;
	if(k < a.length){		
		var h = document[a[k].location].appendChild(a[k]);
		k++;
		h.onload = function(){
			div[3]["style"]["width"] = Math.round((k / a.length) * 100) + "%";
			insertFiles(a, k);
		}
	}
}
addEvent(wdw, 'load', function(){getConfig();});
})(window);