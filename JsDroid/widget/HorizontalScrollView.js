class HorizontalScrollView extends LinearLayout{

constructor(Activity, type="div"){
super(Activity, type);
var isAdded=false;
super._addClass("HSV");
if (!isAdded){ Activity._addStyle(".HSV { white-space:nowrap;overflow-x:auto;overflow-y:hidden;display:table; }"); }
isAdded=true;
}
    
_addView(view){ view._addClass("HSV_item"); super._addView(view); }
_addView2(SearchView){ SearchView._addClass("HSV_item"); super._addView2(SearchView); }
}
