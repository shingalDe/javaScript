function MotionEvent(me){
this.toString=function(){ return me.toString(); };
};
MotionEvent.ACTION=-5;
MotionEvent.ACTION_DOWN=10;
MotionEvent.ACTION_UP=12;
MotionEvent.ACTION_MOVE=13;
MotionEvent.ACTION_OUTSIDE=14;
MotionEvent.ACTION_SCROLL=15;
MotionEvent.ACTION_CANCEL=-1;
MotionEvent.ACTION_X=1;
MotionEvent.ACTION_Y=2;

MotionEvent.ACTION_PRESS=11;
MotionEvent.ACTION_PRESS_LONG=22;
MotionEvent.ACTION_MOVE_LEFT=33;
MotionEvent.ACTION_MOVE_RIGHT=44;
MotionEvent.ACTION_MOVE_UP=5;
MotionEvent.ACTION_MOVE_DOWN=66;

MotionEvent.prototype._setAction=function(ACTION){ MotionEvent.ACTION=ACTION;};
MotionEvent.prototype._getAction=function(){ return MotionEvent.ACTION; };
MotionEvent.prototype._getDownTime=function(){};
MotionEvent.prototype._getPointerCount=function(){};
MotionEvent.prototype._getPointerId=function(pointerIndex){};
MotionEvent.prototype._getPointerProperties=function(pointerIndex, outPointerProperties){};
MotionEvent.prototype._getX=function(){};
MotionEvent.prototype._getY=function(){};
MotionEvent.prototype._getRect=function(){};

