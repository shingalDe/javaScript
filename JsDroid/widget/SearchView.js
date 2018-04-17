class SearchView extends EditText{
constructor(Activity, style=null){
super(Activity, style);
super._setId("searchViewBox");
super._addClass("searchViewBox");
super._setHint("search");
super._setInputType("search");
SearchView.OnQueryChangeListener=class{ 
_onSubmitQuery(query){}
_onSubmitQuery(query){} 
};

}
_setOnValueChangeListener(_){_=null;}

_setOnQueryChangeListener(OnQueryChangeListener){ super._setOnValueChangeListener(OnQueryChangeListener); }
___(){ return super.__(); }

__(){
var Activity = super._getContext(), 
ul = new LinearLayout(Activity, "ul"), li = new ViewGroup(Activity,"li");
ul._addClass("search_win");

Activity._addStyle("");
li.__addView(this); 
ul._addView(li);
return ul.__();
}

}
