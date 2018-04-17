class MenuIcon{
constructor(Activity, iconForm=MenuIcon.FORM_3P){
var menuIcon=null, isOk = true, header, list, footer, content, id, position;
        menuIcon = new LinearLayout(Activity,"a");
	Hessin.S.st(menuIcon.__(),"href","#");
        menuIcon._setId("menuIcon");
        var ul = new ViewGroup(Activity,"ul");
        for (var i=0, items= ["MNUItem","MNUItem","MNUItem"]; i < items.length; i++){
           var mnuItem = new LinearLayout(Activity,"li");
            mnuItem._setId(items[i]+"_"+i);
            mnuItem._addClass(items[i]);
            ul._addView(mnuItem);
        }
menuIcon._addView(ul);
this.style="a#menuIcon{text-decoration:none;outline:none;z-index:5;margin:0;padding:0;}a#menuIcon ul{margin:0;padding:0;}#menuIcon li{list-style:none;}#menuIcon li.MNUItem{background:#777777;padding:0;height:5px;margin:5px 0;";
this._setOnClickListener=function(lis){ menuIcon._setOnClickListener(lis); };
this._toView=function(w=35){
if (iconForm == MenuIcon.FORM_3P || w < 5) w=5;
Activity._addStyle(this.style+"width:"+w+"px;}");
return menuIcon;
};
this.setOnFocusListener=function(){};
}

static get FORM_3L(){ return "3vl"; }
static get FORM_3P(){ return "3vp"; }
}
