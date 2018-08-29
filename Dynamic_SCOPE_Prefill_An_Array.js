function prefill(number, value) {
    var nn = Number(number);
    var nv = value || undefined;
    if (Object.prototype.toString.call(number).indexOf('Number') != -1 || Object.prototype.toString.call(number).indexOf('String') != -1) {
		if (!(number % 2 == 0 || number % 2 == 1) || number<0) {
			throw new TypeError(number+" is invalid");
		}
	} else {
		throw new TypeError(number+" is invalid");
	}
    return nn ? Array(nn).join().split(',').map(function(){return nv;}): [];
}
console.log(prefill(3,1)); //returns [1,1,1]
console.log(prefill(2,'abc')); //returns ['abc','abc']
console.log(prefill("1",1)); //returns ['abc','abc']
console.log(prefill(3, prefill(2,'2d'))); //returns [['2d','2d'],['2d','2d'],['2d','2d']]
console.log(prefill("xyz",1)); //returns throws TypeError with message "xyz is invalid"
