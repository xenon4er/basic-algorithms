;(function() {
	
	function isPrimeNumber(n){
		if( n == 2 ){
			return true;
		}else if( n<=1 || n%2 == 0){
			return false;
		}else{
			let i=3;
			while(i<=Math.trunc(Math.sqrt(n)+1)){
				if(n%i == 0){
					return false;
				}
				i+=2;
			}
			return true;
			
		}

	}


	function trialDevision(n){
		var primeNumbersList = [2,3];
	
		var res = [];
		function f(n){
			if(isPrimeNumber(n)){
				res.push(n)
			}else{			
				for(let i=2; i<=Math.trunc(Math.sqrt(n)); i++ ){
					if(n%i == 0){
						if(isPrimeNumber(i)){
							res.push(i);
						}
						f(n/i);
						break;
					}
				}
			}
		}


			f(n);
		return res;
		
	}

})()