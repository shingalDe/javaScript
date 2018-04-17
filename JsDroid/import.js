var _import={view:{}, widget:{}, app:{}, graphic:{}};
var ADD={};

ADD.add=function(link, path, func=null){
try{
var views = Object.keys(link), vls =Object.values(link), d={}, ti=null;
d.d= new Date(); d.s=d.d.getMilliseconds();
for(var i in views){
var fil=views[i];
var sr= Hessin.E.CE.c("link");
Hessin.S.st(sr, "rel","stylesheet");
Hessin.S.st(sr, "href","style/"+fil+".css?"+d.s);
Hessin.E.SE.shv(sr);
var sr= Hessin.E.CE.c("script");
Hessin.S.st(sr, "type","text/javascript");
Hessin.S.st(sr, "src",path+"/"+fil+".js?"+d.s);
Hessin.E.SE.shv(sr);
}//for
if(func instanceof Function){ ti = window.setInterval(function(){ if(ti) window.clearInterval(ti); ti=null; func(); },200);  }
}
catch(e){ if(ti) window.clearInterval(ti); }
};

