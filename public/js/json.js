// console.log("Hello World");
function x(){
	var fn = document.querySelector('#fn').value;
	var sn = document.getElementById('sn').value;
	var sum = parseInt(fn) + parseInt(sn);
	// console.log("The sum is " + sum);
	document.querySelector('.result').innerHTML = sum;
}

$(function(){
	$.ajax({
		url:"http://www.omdbapi.com/?t=Game%20of%20Thrones"
	}).done(function(data){
		console.log(data);
		let html = `
			<a href="/">Home</a> |
			<a href="/about">About</a> |
			<a href="/json">JSON</a>
			<h1>${data.Title}</h1>
			<img src="${data.Poster}" />			
		`;
		document.querySelector('.app').innerHTML = html;

	});

})