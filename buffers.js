console.log( __filename );
console.log( __dirname );
buf = new Buffer(26);
for (var i = 0 ; i < 26 ; i++) {
	  buf[i] = i + 97;
}

console.log( buf.toString('ascii'));       // outputs: abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii',0,5));   // outputs: abcde
console.log( buf.toString('utf8',0,5));    // outputs: abcde
console.log( buf.toString(undefined,0,5)); // encoding defaults to 'utf8', outputs abcde

var buffer1 = new Buffer('TutorialsPoint ');
var buffer2 = new Buffer('Simply Easy Learning');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3 content: " + buffer3.toString());


var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer('ABCD');
var result = buffer1.compare(buffer2);

if(result < 0) {
	   console.log(buffer1 +" comes before " + buffer2);
}else if(result == 0){
	   console.log(buffer1 +" is same as " + buffer2);
}else {
	   console.log(buffer1 +" comes after " + buffer2);
}
