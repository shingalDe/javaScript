class LinearLayout extends ViewGroup{
constructor(Activity, type="div", style=null){
super(Activity, type, style);
super._addClass("LinearLayout");
}

static get VERTICAL(){ return 1; }
static get HORIZONTAL(){ return 0; }
}
