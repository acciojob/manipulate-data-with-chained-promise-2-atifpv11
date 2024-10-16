//your JS code here. If required.
async function getArray(){
	let array = [1,2,3,4];
	return array;
}

getArray().then((array)=>{
	let evens = array.filter((i)=>i%2===0);
	setTimeout(()=>{
		let element = document.getElementById("output");
		element.innerHTML = evens.join(',');
	},1000)
	return evens;
}).then((evens)=>{
	let twos = evens.map((i)=>i*2);
	setTimeout(()=>{
		let element = document.getElementById("output");
		element.innerHTML = twos.join(',');
	},2000)
})