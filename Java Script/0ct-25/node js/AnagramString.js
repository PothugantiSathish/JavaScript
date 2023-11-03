let data = "listen";
let data1 = "silent";
let isAnagram = true;
if(data.length==data1.length) {
	for (let i = 0; i < data.length; i++) {
		let isfound = false;
		for (let j = 0; j < data1.length; j++) {
			if (data.charAt(i) == data1.charAt(j)) {
				isfound = true;
				break;
		}
	}
	if (isfound ==false) {
	    isAnagram = false;
			break;
	}
}
if(isAnagram==true) {
	console.log("is Anagram")
}else {
    console.log("not Anagram");
}
}
else {
    console.log("not a Anagram");
}