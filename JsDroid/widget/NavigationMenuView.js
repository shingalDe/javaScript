class NavigationMenuView extends ScrollView{
constructor(Activity, type="div", style=null){
super(Activity, type, style);
super._addClass("NMV");
super._setId("MainNavMenu");
this._._a_=Activity;
var 
menuSymbol = new ViewGroup(Activity), title = new MenuIcon(Activity,NavigationMenuView.FORM_THREE_LINES), content= new ScrollView(Activity,"ul");
super._addView(title._toView());
content._addClass("NavMenuContent");
}

_addView(view){}
_setHeaderView(headerView){ this.header=headerView; };
_setListView(listView){ this.list=listView; this.list._addClass("navListView"); };
_setFooterView(toolbar){ this.footer=toolbar; }
toLi(view){ var li = new LinearLayout(super._getContext(),"li"); li._addView(view); this.content._addView(li); }

_setPositionStyle(position){
this.position=position;
this._._a_._addStyle("#MainNavMenu, .NMV{"+position+":15px;}.NMV a:focus+ul{"+position+":-15px;}");
this.content._addStyle(""+position+":-260px;");
}

_getPositionStyle(){ return this.position; }

__(){       
        if(this.header) this.toLi(this.header);
        if(this.list){
            this._._a_._addStyle(".navListView li{padding:10px;cursor:pointer;border-bottom:1px solid grey;} .navListView li:hover{ transform: scale(1.2);-webkit-transform: scale(1.2);-moz-transform: scale(1.2);-o-transform: scale(1.2);-ms-transform: scale(1.2);text-align:center;");
            
            this.toLi(this.list);
        }
        if(this.footer) this.toLi(this.footer);
        super._addView(this.content);
        return super.__();
    }
}
