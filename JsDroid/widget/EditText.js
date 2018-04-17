var KEY={}; KEY.Enter=13; KEY.Space=32; KEY.isLetter=function(k){ return (k.length === 1 && k.match(/[a-zA-Zäüö]/i)); }; 
KEY.isNr=function(k){ return ((k > 47 && k < 58) || (k > 95 && k < 106)); };
class EditText extends View{

constructor(Activity, style=null){
        super(Activity, "input",style);
	this.htm = super.__();
	Hessin.S.st(this.htm, "type", "text");
	this.htm.name="et";
    }

_setOnKeyListener(OnKeyListener){ this._._b_.onkeyup=function(e){ var k = (e.which || e.keyCode); OnKeyListener(e, k);};  };
_setInputType(inputType="text"){ Hessin.S.st(this.htm, "type", inputType); }
_setOnValueChangeListener(onChangeValueListener){
if(onChangeValueListener instanceof OnChangeValueListener){
var ov="";(function(zis){
zis._setOnKeyListener(function(keyEv, key){ 
var txt= zis._getText();
if(key == KEY.Enter){
onChangeValueListener._onSubmit(txt);
}
else if(txt != ov && key != KEY.Space){ov=txt;
var len= txt.length, lst= txt.charAt(len-1);
onChangeValueListener._onChangeQuery(txt, len, lst);
}
});
})(this);
}
}
_setText(text){ this.text=text; }
_getText(){ return this.htm.value; };
_setHint(hint){ Hessin.S.st(this.htm,"placeholder",hint); this.hint = hint; }
_setName(name){ this.htm.name=name }
_setHintTextColor(color){}
}
class OnChangeValueListener{
_onSubmit(text){}
_onChangeQuery(txt){}
}


