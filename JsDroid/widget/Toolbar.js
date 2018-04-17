class Toolbar extends ViewGroup{
constructor(Activity, style="fixed"){
super(Activity,"ul", style);
this.context = Activity;
this._setId("Toolbar");
this._addClass("Toolbar");
this.center="display:inline-block;";
this.Tab=function(){
var plogo=null, pname=null, ptitle=null, subLV=null;
var tab = new ViewGroup(Activity,"li"); tab._addClass("tab"); tab._setId("tab");
var ul = new ViewGroup(Activity,"ul"),li = new ViewGroup(Activity,"li"), sl = new ViewGroup(Activity,"li");
sl._addClass("subListMenu");
ul._addView(li); ul._addView(sl); tab._addView(ul);
var lb = new TextView(Activity);
var img = new ImageView(Activity);

this._isMatch=function(str){ return str.match("/^[A-Za-z0-9]+/"); };
this._getLogo=function(){ return plogo; };
this._setLogo=function(logo){ plogo = logo; };
this._getName=function(){ return pname; };
this._setName=function(name){ pname = name; };
this._getTitle=function(){ return ptitle; };
this._setTitle=function(title){ ptitle = title; };
this._setSubListView=function(listView){ subLV=listView; };

this.__=function(){
if(plogo){ img._setImage(plogo); li._addView(img);}
if(pname){ lb._setText(pname); li._addView(lb); }
if(subLV && subLV instanceof ListView){  sl._addView(subLV); }

return tab; 
};
};

}

_setMenuIcon(menuIcon){ 
var tab = new ViewGroup(this.context,"li"); tab._addClass("tab"); tab._addClass("meno"); tab._setId("tab");
var ul = new ViewGroup(this.context,"ul"),li = new ViewGroup(this.context,"li");
li._addView(menuIcon._toView());
ul._addView(li); tab._addView(ul);
super._addView(tab);
}
_setSearchView(searchView, location=0){
console.log("LOc LEFT"+ location);
var tab = new ViewGroup(this.context,"li"); tab._addClass("tab"); tab._addClass("searchViewinsideTB"); tab._setId("tab");
var ul = new ViewGroup(this.context,"ul"),li = new ViewGroup(this.context,"li");
li._addView(searchView);
ul._addView(li); tab._addView(ul);


super._addView(tab); 
}

_setCenter(){ this.center="display:inline-block;"; }

_addTab(tab){ super._addView(tab.__());}

_addTabArray(tabsArray){ 
for(var key in tabsArray){
var img= tabsArray[key];
if(key || img){ 
var tab = new this.Tab(); 
if(key) tab._setName(key); 
if(img) tab._setLogo(img); 
this._addTab(tab); 
}
}

}
_rmTab(position){}
_rpTab(oldTab, newTab){}
_rpTab(newTab, Position){ }
    

_setOnTabClickListener(func){}
_setOnTabLongClickListener(func){}
__(){ this.context._addStyle(".Toolbar li#tab{"+this.center+"}"); return super.__(); }

}
