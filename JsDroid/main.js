var Hessin={}; Hessin.d = document; Hessin.E={}; Hessin.E.FE={}, Hessin.E.CE={}; Hessin.E.SE={}; Hessin.S={};Hessin.DEFAULTVAR="shingal_";
Hessin.E.FE.gbi= function(id){ return Hessin.d.getElementById(id); }; 
Hessin.E.FE.gbt= function(tn){ return Hessin.d.getElementsByTagName(tn); };
Hessin.E.FE.h = Hessin.E.FE.gbt("head")[0]; 
Hessin.E.FE.qs= function(v,srch){ return v.querySelector(srch); }; 
Hessin.E.FE.fvbi= function(v,id){ return Hessin.E.FE.qs(v,"#"+id); }; 
Hessin.E.FE.vcn= function(v,cn){ return Hessin.E.FE.qs(v,"."+cn); }; 
Hessin.E.FE.vtn= function(v,tn){ return Hessin.E.FE.qs(v,tn); }; 
Hessin.E.CE.c= function(tn){ return Hessin.d.createElement(tn); }; 
Hessin.E.TXT= function(txt){ return Hessin.d.createTextNode(txt); }; 

Hessin.E.SE.sv= function(v, w){ Hessin.E.SE.av(v, w); }; 
Hessin.E.SE.shv= function(v){ Hessin.E.SE.sv(v, Hessin.E.FE.h); }; 
Hessin.E.SE.scv= function(v){ if(v) v.classList.add("SCV"); Hessin.E.SE.sv(v, Hessin.E.FE.b); }; 
Hessin.E.SE.rcv= function(v){ if(v) Hessin.E.SE.rv(v, Hessin.E.FE.b); }; 
Hessin.E.SE.av=function(v, w){ if(v instanceof Object) w.appendChild(v); };
Hessin.E.SE.rv=function(v, w){ w.removeChild(v); };
Hessin.S.st= function(v, n, vl){ v.setAttribute(n,vl); };
Hessin.S.stOn = function(v, e, l){
var func = function(ev){ l(this,ev); return false; };
if(e == "click"){ v=v.onclick = func; }else 
if(e == "up") { v=v.onmouseup = func; }else 
if(e == "down") { v=v.onmousedown = func; }else
if(e == "over") { v=v.onmouseover = func; }else 
if(e == "out") { v=v.onmouseout = func; }else 
if(e == "move"){  v=v.onmousemove = func; }
};

