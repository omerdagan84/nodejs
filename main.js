console.log('directory name :' + __dirname );
console.log('file name and path : ' + __filename);

function printHello(){
	   console.log( "Hello, World!");
}
// Now call above function after 2 seconds
var t = setTimeout(printHello, 2000);
console.log('setting interval');

setInterval(printHello, 2000);




