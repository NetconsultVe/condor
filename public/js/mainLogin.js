N(".preload").nodeRemove(function(){
	N(".wrapper").show(function(){
		console.log("desde N");
	}, 200)
}, 200);