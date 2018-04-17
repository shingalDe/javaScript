class HttpRequest extends XMLHttpRequest{
constructor(url, method="GET"){
var zis=this;
if(this){
this.open(method, url,false);
this.onreadystatechange=zis._doInBackground;
http.send();
}

}
_donInBackground(){
this._onPreExecute(this.readyState, this);
if(zis.status == 200){ this._onPostExecute(this.responseText); }
}
_onPreExecute(stateCode, xhr){}
_onPostExecute(result){}
_cancel(){}
}
