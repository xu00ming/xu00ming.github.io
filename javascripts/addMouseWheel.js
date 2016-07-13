// JavaScript Document
function addMouseWheel(obj,fn){
	var firefox=window.navigator.userAgent.toLowerCase().indexOf('Firefox');
	if(firefox!=-1){
		obj.addEventListener('DOMMouseScroll',fnWheel,false);	
	}else{
		obj.onmousewheel=fnWheel;			
	}
	function fnWheel(ev){
		var oEvt=ev||event;
		var down=false;
		if(oEvt.wheelDelta){
			down = oEvt.wheelDelta<0?true:false;
		}else if(oEvt.detail){
			down =	 oEvt.detail>0?true:false;
		}
		fn(down);
		if(oEvt.preventDefault){
			oEvt.preventDefault();
		}
		return false;
	}
}