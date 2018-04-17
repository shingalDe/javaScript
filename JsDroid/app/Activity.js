var LOCATION={}; LOCATION.LEFT=0; LOCATION.RIGHT=1; LOCATION.BOTTOM=2; LOCATION.TOP=3;
class Activity{
constructor(){
var that=this;
this._={};
ADD.add(_import.view,"view",function(){
ADD.add(_import.widget,"widget",function(){
ADD.add(_import.graphic,"graphic",function(){
var iv=null;
that.style=".visible{ visibility:visible;}.invisible{visibility:hidden;}", that._._cv_cv_=null;
that._.__po__={0:"relative",1:"absolute",2:"fixed"};
try{
iv = that._post(function(){ that._onCreate(that); },111);
}//try
catch(e){ that._close(iv); }//catch(e)
finally{

}
});
});
});
}

_onCreate(bundle){ return this;}
_addStyle(str){ this.style +=str; };
_setContentView(view,func=null){

var cv= view.__();
Hessin.E.SE.rcv(this._._cv_cv_);
Hessin.E.SE.scv(cv);
this._._cv_cv_ = cv;
if(func instanceof Function){
func();
if(this.style){Hessin.E.FE.h.innerHTML +="<style>"+this.style+"</style>";}
}
}

POSITION(pos){ return this._.__po__[pos]; }
_post(func, delay=200){ var t=this, win = window.setInterval(function(){ t._close(win); func(); return win; }, delay); return win(); }
_close(ti){ if(ti){ window.clearInterval(ti); ti=null; } }

}
