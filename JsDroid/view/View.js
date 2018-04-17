class View{
constructor(Activity, type="div", style=null){
View.OnMotionEventListener = class{
constructor(){}
_onAction(action){}

};
this.height=0;
(function(thiz){

thiz._getType=function(){ return type.toLowerCase();};
thiz._instanceof=function(t){ return thiz._._b_ instanceof t; };
})(this);
this._ ={}; this._.id;
this._.______th_=this;
this._.__DFS=style?style:"";
this._._b_ = Hessin.E.CE.c(type);
this._.style= window.getComputedStyle(this._._b_,null);
this._._a__=Activity;
this._._pa_=-1;this._._ma_=-1;

Hessin.S.st(this._._b_, "dir","auto");
Hessin.S.st(this._._b_, "class",Hessin.DEFAULTVAR+"View");
if(style) Hessin.S.st(this._._b_, "style","position:"+style+";");
var tt=this;

};

_getRect(){ return new Rect(this);}
_setVisibility(state, Animation){ }
_getVisibility(state){ }

/********** 0 ANIMATIN ****************/
_setAnimation(){}
_getAnimation(){}
_loadAnimation(){}
_removeAnimation(){}
/********** 1 ANIMATIN ****************/
/********** 0 MEASURE ****************/
_setPadding(padding){ this._._pa_=padding; }
_setMargin(margin){ this._._ma_=margin;}
_getPadding(){ return this._._pa_; }
_getMargin(){ return this._._ma_;}
_getWidth(onlyWidth=false){ return (onlyWidth == true)? this._._b_.clientWidth:this._._b_.offsetWidth; };
_getHeight(onlyHeight=false){ return (onlyHeight == true)? this._._b_.clientHeight:this._._b_.offsetHeight; };
_setHeight(height){ this.height=height; }
_getHeight2(){ return this.height;};
/********** 1 MEASURE ****************/

_setPosition(position){ this._._p=position; }
_getPosition(){ return this._._p;}

_setId(id){ this._._id=id; Hessin.S.st(this._._b_,"id",id); }
_getId(){ return this._._id; }
_getContext(){ return this._._a__; }
_addClass(cname){ this._._b_.classList.add(cname); }
_rmClass(cname){ this._._b_.classList.remove(cname); }
_setOnClickListener(OnClickListener){ Hessin.S.stOn(this._._b_,"click",OnClickListener); }

// This function works only with a mousevent and not with a touchEvent
_setOnContextMenuListener(OnContextMenuListener){ var a = this._._a__; 
this._._b_.oncontextmenu=function(e){
if(OnContextMenuListener instanceof Function){ var cm = new ContextMenuView(a); cm._setRect(e); OnContextMenuListener(e, cm); } 
return false;
};
}
_isKeyPressed(event, key){ return ((event.which || event.keyCode) == key); }

_setOnLongClickListener(func, lpt=200){
var time=null, dauer=0, v=this;
this.onD = function (event){ time = window.setInterval(function(){ dauer++; if(dauer > 5 && time){ window.clearInterval(time); dauer=0; func(v); }}, lpt); };
this.onU=function(){  window.clearInterval(time); dauer=0; }; 

if('ontouchstart' in window){ 
this._._b_.ontouchstart=function(event){ v.onD(event); }; 
this._._b_.ontouchend=function(event){ v.onU(); };
return;
}else{ 
this._._b_.onmousedown=function(event){ if(v._isKeyPressed(event,1)) v.onD(event); }; 
this._._b_.onmouseup=function(event){ v.onU(); };
return;
}//ENDelse

}


_setOnMotionEventListener(func, lpt=300){
var time=null, dauer=0, isDown=false;;
var mev, sx=0, sy=0, mar=0, dir=0;
this._._b_.onmousemove=function(event){ if(isDown){ var xx=event.pageX; if(xx > dir){ mar +=4; }else{ mar -=4; } this.style.marginLeft=mar+"px"; dir=xx; }};
this._._b_.onmousedown=function(event){ sx= event.clientX, sy= event.clientY; mev= new MotionEvent(event);
if((event.which || event.keyCode) == 1){
isDown=true;
time = window.setInterval(function(){ dauer++;
if(dauer > 5 && time){ window.clearInterval(time); time=null; mev._setAction(MotionEvent.ACTION_PRESS_LONG); dauer=0; func(mev);

}}, lpt);
}};
this._._b_.onmouseout=function(event){ dir=0; isDown=false;};
this._._b_.onmouseup=function(event){ 
isDown=false;dir=0;
window.clearInterval(time); 
time=null;
mev= new MotionEvent(event); 
mev._setAction(MotionEvent.ACTION_UP); 
var ex = event.clientX, ey=event.clientY;
var x=(sx > ex)?(sx-ex):(ex-sx);
var y=(sy > ey)?(sy-ey):(ey-sy);

if(sx > ex && x > y){ mev._setAction(MotionEvent.ACTION_MOVE_LEFT); }else if(ex > sx && x > y){ mev._setAction(MotionEvent.ACTION_MOVE_RIGHT); }else
if(sy > ey && y > x){ mev._setAction(MotionEvent.ACTION_MOVE_UP); }else if(ey > sy && y > x){ mev._setAction(MotionEvent.ACTION_MOVE_BOTTOM);}else{
mev._setAction(MotionEvent.ACTION_CANCEL);
}

dauer=0; func(mev);
};

}

_findViewById(id){ return Hessin.E.FE.fvbi(this._._b_, id); }
_findViewByCName(cname){ return Hessin.E.FE.vcn(this._._b_, cname); }
_post(func,delay=333){ var _i_ = window.setInterval(function(){ func(); window.clearInterval(_i_); _i_=null; }, delay); }
__(){ 

//if(this._._pa_) this._._b_.style +="padding:"+this._._pa_+";";
if(this._._ma_ != -1)this._._b_.style +=";position:"+this._.__DFS+";margin:"+this._._ma_+";";

return this._._b_; }
}
