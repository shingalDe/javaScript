class ArrayAdapter extends Adapter{
constructor(Activity, items){
super(Activity);
this._v_={};
this._v_.items =items;
this._v_.Activity=Activity;
}

_getView(position, view, parent){
view = new TextView(this._v_.Activity,"span");
view._setText(this._v_.items[position]);
var _v_=super._getView(position,view,parent);
return _v_;
}
_getItemList(){ return this._v_.items; }
_getCount(){ return this._v_.items.length; }
}
