_import.widget.AdapterView=null;
class ListView extends AdapterView{
constructor(Activity, type="ul", style=null){
super(Activity, type, style);
this._o_=1;
super._addClass(Hessin.DEFAULTVAR+"ListView");
Activity._addStyle("."+Hessin.DEFAULTVAR+"ListView{background:red;}");
}

_setOnItemMoveListener(OnItemMoveListener){ this.ml=OnItemMoveListener;}
_setOnItemClickListener(OnItemClickListener){ if(OnItemClickListener instanceof AdapterView.OnItemClickListener) this.icl=OnItemClickListener; else console.log("OnItemClickListener is not correct!"); }
_getAdapter(){ return this._.a_; }
_setAdapter(Adapter){ this._.a_=Adapter;
for(var _i_=0; _i_<Adapter._getCount(); _i_++){ 
var _v_ = Adapter._getView(_i_,null,this);
_v_._setPosition(_i_);
_v_._addClass("LVItem");
this._addView(_v_);
//if(this.ml) _v_._setOnMotionEventListener(this.l);
//if(this.icl){(function(zis,_v, p){ _v_._setOnClickListener(function(e){ zis.icl._onItemClick(_v, p); }); })(this,_v_,_i_);}
}
};

_setListViewItemsId(id){ this._.i_=id; };
_getListViewItemsId(){ return this._.i_; };

_setHeaderView(headerView){ headerView._addClass("LV_HeaderView"); this._.h_=headerView; }
_setFooterView(footerView){ footerView._addClass("LV_FooterView"); this._.f_ = footerView; }
__(){
if (this._o_ == 1){
if (this._.h_) this._addView(this._.h_);
if (this._.f_) this._addView(this._.f_);
}

var _ii_ = this._.i_, ctx= this._getContext(), clsn = "."+Hessin.DEFAULTVAR+"ListView";
if(_ii_){ var st = "#"+_ii_+"{ list-style:none; }"; ctx._addStyle(st); }
ctx._addStyle(clsn+"{max-height:480px;overflow-y:hidden;overflow-x:hidden;padding:0;margin:0;max-width:450px;}"+clsn+" li{ height:100%; width:100%; list-style:none; padding: 7px 2px 7px 2px;margin-top:1px; background:red;text-align:left;}");
ctx._addStyle("."+Hessin.DEFAULTVAR+"ListView:hover{overflow-y:auto;}");
this._o_=0;
var end = super.__();
return end;
};
}
