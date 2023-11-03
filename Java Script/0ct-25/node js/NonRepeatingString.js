let data="swiss";
	let	ch ='';
		
		
		for(let i=0;i<data.length;i++) {
			let count=0;
			for(let j=i+1;j<data.length;j++) {
				if(data.charAt(i)==data.charAt(j)) {
					count++;
				}
			}
				if(count==0){
					ch=data.charAt(i);
					break;
				}
		}
        console.log(ch)