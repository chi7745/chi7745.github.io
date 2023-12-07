(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"作業07_atlas_1", frames: [[0,617,475,180],[0,0,615,615]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.書影像 = function() {
	this.initialize(ss["作業07_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.背景影像 = function() {
	this.initialize(ss["作業07_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.補間動畫3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("Au9CvQBuhqBnhWQCvh4DfgcQB/gRB5APQBQAOA6AbQB7gqCXACQCRADB3AqQBhAfBaA8QAsAeAbAVQA+A1A8A5QibiMi5g1QiLgpitAJQhvAJhZAXIhCAVQgwgwjegHQjfgHh6AsQiSApiEBmQgnAeglAjIgcAaIAAAAg");
	this.shape.setTransform(0.0125,-0.0067);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8AC457").s().p("Au9CvQBuhqBnhWQCvh4DfgcQB/gRB5APQBQAOA6AbQB7gqCXACQCRADB3AqQBhAfBaA8QAsAeAbAVQA+A1A8A5QibiMi5g1QiLgpitAJQhvAJhZAXIhCAVQgwgwjegHQjfgHh6AsQiSApiEBmQgnAeglAjIgcAaIAAAAg");
	this.shape_1.setTransform(0.0125,-0.0067);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.8,-17.5,191.7,35);


(lib.元件1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("AqphEQjFhDjkg1Ii+goIC6i2QKzDAEgC/QBaA6AmA1QATAaABAOQDQjnHfiVQDvhLDGgcICcBnQpuB9mIEbQh7BZhVBeQgqAvgSAdQhEkLp0jUg");
	this.shape.setTransform(129.675,41.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件1, new cjs.Rectangle(0,0,259.4,82.2), null);


// stage content:
(lib.作業07 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 遮色片 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_4 = new cjs.Graphics().p("AtqHWIAAurIbVAAIAAOrg");
	var mask_graphics_5 = new cjs.Graphics().p("AtqHWIAAurIbVAAIAAOrg");
	var mask_graphics_6 = new cjs.Graphics().p("AtqHWIAAurIbVAAIAAOrg");
	var mask_graphics_7 = new cjs.Graphics().p("AtqHWIAAurIbVAAIAAOrg");
	var mask_graphics_8 = new cjs.Graphics().p("AtqHWIAAurIbVAAIAAOrg");
	var mask_graphics_9 = new cjs.Graphics().p("AtqHWIAAurIbVAAIAAOrg");
	var mask_graphics_10 = new cjs.Graphics().p("AtqHWIAAurIbVAAIAAOrg");
	var mask_graphics_11 = new cjs.Graphics().p("AtqHWIAAurIbVAAIAAOrg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(4).to({graphics:mask_graphics_4,x:290.5,y:151.05}).wait(1).to({graphics:mask_graphics_5,x:234.5,y:135.05}).wait(1).to({graphics:mask_graphics_6,x:200.5,y:105.05}).wait(1).to({graphics:mask_graphics_7,x:166.5,y:81.05}).wait(1).to({graphics:mask_graphics_8,x:133.5,y:74.05}).wait(1).to({graphics:mask_graphics_9,x:96.5,y:62.05}).wait(1).to({graphics:mask_graphics_10,x:96.5,y:62.05}).wait(1).to({graphics:mask_graphics_11,x:96.5,y:62.05}).wait(9));

	// 圖層_6
	this.instance = new lib.補間動畫3("synched",0);
	this.instance.setTransform(297,159.05,0.8286,0.8286);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(1).to({x:234,y:121.05},0).wait(1).to({x:204,y:98.05},0).wait(1).to({regX:0.1,regY:0.1,scaleX:0.8497,scaleY:0.8497,x:176.1,y:78.15},0).wait(1).to({regX:0.2,scaleX:0.504,scaleY:0.504,x:139.15,y:50.1},0).wait(1).to({regY:0.2,scaleX:0.4518,scaleY:0.4518,x:92.15,y:50.15},0).wait(1).to({x:60.15,y:21.15},0).wait(1).to({x:7.2,y:-10.85},0).wait(9));

	// 圖層_4
	this.instance_1 = new lib.元件1();
	this.instance_1.setTransform(324.05,427.05,1,1,0,0,0,129.7,41.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:382.05,y:344.05},0).wait(1).to({x:422.05,y:291.1},0).wait(1).to({scaleX:0.7567,scaleY:0.7567,x:465.05,y:249.1},0).to({_off:true},1).wait(16));

	// 背景_影像
	this.instance_2 = new lib.書影像();
	this.instance_2.setTransform(78,434.95);

	this.instance_3 = new lib.背景影像();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(20));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(307.5,307.5,307.5,307.5);
// library properties:
lib.properties = {
	id: '021BDE60AF5ED54FB813FF9127807C36',
	width: 615,
	height: 615,
	fps: 10,
	color: "#0000FF",
	opacity: 1.00,
	manifest: [
		{src:"images/作業07_atlas_1.png", id:"作業07_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['021BDE60AF5ED54FB813FF9127807C36'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;