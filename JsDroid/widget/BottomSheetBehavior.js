class BottomSheetBehavior extends LinearLayout{

constructor(Activity, type="div", style=null){
super(Activity, type, style);
super._addClass("BottomSheetBehavior");

BottomSheetBehavior.BottomSheetCallback = class{
_onStateChanged(/*View*/ bottomSheet, /*int*/ newState) {}
_onSlide(/*View*/ bottomSheet, /*float*/ slideOffset) {}

};
}
_addView(v){}
_setView(/*View*/ view){
super._clear();
super._addView(view);
}
_setPeekHeight(height){}
_setState(state){}
_setSkipCollapsed(/*boolean*/skipCollapsed){}
_setBottomSheetCallback(bottomSheetCallback){}
}
