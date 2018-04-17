class TextView extends View{
constructor(Activity, type="span"){
super(Activity, type);
this._.t_="";
this._addClass(Hessin.DEFAULTVAR+"TextView");
}

_setText(text){ this._.t_=text;
var tv = Hessin.d.createTextNode(text);
Hessin.E.SE.sv(tv, this.__());
}


_setTextColor(color){}
_getTextColor(){}
_setFontSize(size){}
_getFontSize(){}

_getText(){ return this._.t_; }

}
