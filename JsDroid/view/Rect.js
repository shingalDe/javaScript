class Rect{
constructor(view){
var v= view.__();
this.r=v.getBoundingClientRect();
}

_getX(){ return this.r.x; }
_getY(){ return this.r.y; }
_getLeft(){ return this.r.left; }
_getTop(){ return this.r.top; }
_getRight(){ return this.r.right; }
_getBottom(){ return this.r.bottom; }

}
