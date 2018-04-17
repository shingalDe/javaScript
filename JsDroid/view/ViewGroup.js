class ViewGroup extends View{
constructor(Activity, type="div", style=null){
super(Activity, type, style);
if(!this._instanceof(HTMLLIElement)) this._addClass(Hessin.DEFAULTVAR+"ViewGroup");
}

_addView(vgb){
if(vgb instanceof Object){
Hessin.E.SE.av(vgb.__(), this.__());
}
}

__addView(vgb){
if(vgb instanceof Object){
Hessin.E.SE.av(vgb.___(), this.__());
}
}

_onAddView(vgb){
 }
}
