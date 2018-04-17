class ContextMenuView extends ViewGroup{
constructor(Activity, type="div"){
super(Activity, type);
this._addClass("ContextMenuView");
}
_setTitle(title){}
_setView(view){}
_setRect(MotionEvent){
var act = this._getContext();
act._addStyle(".ContextMenuView{ position:absolute; width:250px;height:250px;z-index:5000; left:"+MotionEvent.clientX+"px;top:"+MotionEvent.clientY+"px; background:yellow;}");
act._setContentView(this);
}
__(){
return super.__();
}
}
