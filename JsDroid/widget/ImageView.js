class ImageView extends View{
constructor(Activity, ImageStyle=null, alt="image")
{
        super(Activity,"img");
	 this.dy = new ViewGroup(Activity);
	 this.im="";
         this.w=50; 
	 this.h=50;
         this.style=ImageStyle?ImageStyle:"float:left;background-size:cover;background-position:center center;";
        
    }


_getImage() { return this.im; }
_setImage(image){ Hessin.S.st(this.__(), "src", image);
Hessin.S.st(this.__(),"style", "z-index:1000;background:transparent;width:"+this.w+"px;height:"+this.h+"px;");
this.im = image; 
}

_setSize(width=150, height=0) { this.w=width; if (height>0){ this.h=height; } }


_setWidth(width){ Hessin.S.st(this.__(), "width", width); }
_setHeight(height){ Hessin.S.st(this.__(), "height", height); }
_getTypeScale(){ return this._ts; }
_setTypeScale(typeScale){ this._ts = typeScale; }    

}
   
