(function(){
	'use strict'
	//New solution. Best when you need next one value
	function* fibonacciGen (){
		var a =1,
			b = 1;

			yield a;
			yield b;
		while(true){
			b = a + b;
			a = b - a;
			yield b;
		}
	}

	function fibonacciGenTest(n){
		let seq = [];
		var fGen = fibonacciGen();
		for(let i=0; i<n; i++){
			seq.push(fGen.next().value);
		}

		return seq;
	}


	//Bad solution... But you may store like object and get value for some index.
	function fibonacciReq(n){
		if( 'number' === typeof(n) ){
			let res = {};

			let f = (a)=>{
				var val;
				if(res.hasOwnProperty(a)){
					val = res[a]
				}else{				
					if(a <= 2){
						val = 1;
					}else{
						val = f(a-1) + f(a-2);
					}
				}
				res[a] = val;
				return val;
			}

			f(n);
			return Object.keys(res).map(key=>res[key]);
		}else{
			console.error("Invalid typeof argiment!");
		}
	}

	//Simple value. Best for speed when you need a sequence.
	function fibonacciSimple(n){
		let res = [];
		let a = 1,
			b = 1;
		for(let i=1; i<=n; i++){
			if(i<=2){
				res.push(a);
			}else{
				b = a + b;
				a = b - a;
				res.push(b);
			}
		}
		return res;
	}


	let fibonacciTest = (n)=>{
		console.log("fibonacciTest run");
			console.time();
				console.log("fibonacciReq("+n+")",fibonacciReq(n));
			console.timeEnd()
			console.time();
				console.log("fibonacciGenTest("+n+")",fibonacciGenTest(n));
			console.timeEnd()
			console.time();
			console.log("fibonacciSimple("+n+")",fibonacciSimple(n));
			console.timeEnd()
			
		console.log("fibonacciTest stop");
		
	}

	fibonacciTest(250);
	

})();