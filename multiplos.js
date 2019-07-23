function start(){
	for(var i = 0; i <= 100; i++){
		let multiplo3 = i%3 === 0;
		let multiplo5 = i%5 === 0;
		
		if(!(multiplo3 || multiplo5)){
			console.log(i);
		}else{
			 if(multiplo3 && multiplo5) {
				 console.log('CoBlue');
			 }else{
				if(multiplo3) console.log('Co');
	                        if(multiplo5) console.log('Blue')	 
			 }
		}

	}
}
start();
