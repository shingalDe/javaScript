class AdapterView extends ViewGroup{
constructor(Activity, type="ul", style=null){
super(Activity, type, style);

AdapterView.OnItemClickListener= class{ 
constructor(){}
_onItemClick(view, pos){ console.log("on_Item"); } 

};

AdapterView.OnItemMoveListener= class{ 
_onMove(view, pos, moveDirection, MotionEvent){} 

};



}//constructor
}
