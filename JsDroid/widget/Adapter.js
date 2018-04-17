class Adapter{

constructor(Activity){}

_getView(position, avp, parent){
var li=new ViewGroup(avp._getContext(),"li");
li._addView(avp);
return li;
}
_getCount(){ return 0; }
_getItem(position){ return null; }
_getItemList(){ return null;}
}
