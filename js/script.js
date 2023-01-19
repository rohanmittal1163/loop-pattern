// for loop to print the n numbers
function prit() {
	var a = parseInt(prompt('enter the number (upto which to print): '));
	if (a > 0) {
		for (var i = 1; i <= a; i = i + 1) {
			document.write('<b>' + i + '</b> , ');
		}
	} else {
		document.write('invalid input');
	}
}

//for loop to print the table
function table() {
	var a = parseInt(prompt('enter the number:'));

	for (var i = 1; i <= 10; i++) {
		document.write(a + '*' + i + ' = ' + a * i + ' .<br />');
	}
}

//for loop to print the even numbers
function even() {
	var a = parseInt(prompt('enter the number:'));
	if (a >= 0) {
		for (var i = 0; i <= a; i += 2) {
			document.write('<b>' + i + '</b> , ');
		}
	} else {
		document.write('<b> invalid input </b>');
	}
}

//for loop to print the odd numbers
function odd() {
	let a = parseInt(prompt('enter the number :'));
	if (a >= 1) {
		for (let i = 1; i <= a; i = i + 2) {
			document.write('<b>' + i + '</b> , ');
		}
	} else {
		document.write('<b>invalid input</b>');
	}
}

//for loop to print the nth power of numbers
function pow_fixed() {
	var a = parseInt(prompt('enter the frequency:'));
	if (a > 0) {
		b = parseInt(prompt('enter the power(fixed)'));
		for (var i = 1; i <= a; i++) {
			document.write(i + '^' + b + ' = ' + Math.pow(i, b) + '<br />');
		}
	} else {
		document.write('invalid input');
	}
}

//for loop to print the exponential of a number
function exp() {
	let a = parseInt(prompt('enter the base(fixed):'));
	b = parseInt(prompt('enter the frequency:'));
	for (let i = 1; i <= b; i++) {
		document.write(a + '^' + i + ' = ' + Math.pow(a, i) + '<br />');
	}
}

//for loop to print the sum of n numbers
function sum() {
	var a = parseInt(prompt('Enter the number:'));
	if (a >= 0) {
		var b = 0;
		for (var i = 1; i <= a; i = i + 1) {
			b += i;
		}
		document.getElementById('main').innerHTML =
			'the sum of ' + a + ' numbers is:  ' + b;
	} else {
		document.write('invalid input');
	}
}

//for loop to print the factorial of a number
function fact() {
	var a = parseInt(prompt('Enter the number:'));
	if (a >= 0) {
		var b = 1;
		for (var i = 1; i <= a; i++) {
			b = b * i;
		}
		document.write('the factorial of ' + a + ' is : ' + b);
	} else {
		document.write('invalid input');
	}
}

//for loop to print sum of square numbers
function $sq_sum() {
	var a = parseInt(prompt('enter the number'));
	if (a >= 0) {
		var b = 0;
		for (var i = 1; i <= a; i++) {
			b = b + Math.pow(i, 2);
		}
		document.write('the sum of square numbers till ' + a + '^2 is = ' + b);
	} else {
		document.write('<b> invalid input</b>');
	}
}

//for loop to create pattern series
function pat() {
	var a = parseInt(prompt('enter the number:'));
	var b = 0;
	for (var i = 1; i <= a; i = i + 1) {
		document.write(b + ' , ');
		b = b + i;
	}
}

//for loop to print the fibonaaci series
function fibo() {
	const a = parseInt(prompt('enter the number:'));
	if (a > 0) {
		let b = 0;
		let c = 1;
		let d = 0;
		for (var i = 1; i <= a; i++) {
			document.write(b + ', ');
			d = b + c;
			b = c;
			c = d;
		}
	} else {
		document.write('invalid input');
	}
}

//for loop to find the Nth value in fibonacci series
function Nfibo() {
	var a = parseInt(prompt('enter the number:'));
	if (a > 0) {
		var b, c, d;
		b = 0;
		c = 1;
		d = 0;
		for (var i = 1; i <= a; i++) {
			d = b + c;
			if (i == a) {
				document.write('<b>' + b + '</b>, ');
			}
			b = c;
			c = d;
		}
	} else {
		document.write('invalid input');
	}
}

//for loop to count the digits in a number
function count() {
	var a = parseInt(prompt('enter the number:'));
	if (a > 0) {
		var b = 0;
		for (var i = 1; i <= a; ) {
			a = Math.floor(a / 10);
			b++;
		}
		document.write(b);
	} else if (a == 0) {
		document.write('1');
	} else {
		document.write('invalid input');
	}
}

//for loop to print the sum of digits
function sod() {
	var a = parseInt(prompt('enter the number:'));
	if (a >= 0) {
		var b = 0;
		var c;
		for (var i = 1; i <= a; ) {
			c = a % 10;
			b = b + c;
			a = parseInt(a / 10);
		}
		document.write(b);
	} else {
		document.write('invalid input');
	}
}

// while loop starts here
//while loop to print the numbers
function wh_prit() {
	var a = parseInt(prompt('enter the number:'));
	var i = 1;
	if (a > 0) {
		while (i <= a) {
			document.write('<b>' + i + '</b> ,');
			i++;
		}
	} else {
		document.write('<b>invalid input</b>');
	}
}

//while loop to print the table
function wh_table() {
	var a = parseInt(prompt('enter the number:'));
	var i = 1;
	while (i <= 10) {
		document.write(a + ' x ' + i + ' = ' + a * i + '<br />');
		i++;
	}
}

//while loop to print the even numbers
function wh_even() {
	var a = parseInt(prompt('enter the number :'));
	if (a >= 0) {
		var i = 0;
		while (i <= a) {
			document.write('<b>' + i + '</b>' + ' , ');
			i = i + 2;
		}
	} else {
		document.write('invalid input');
	}
}

//while loop to print the odd numbers
function wh_odd() {
	var a = parseInt(prompt('enter the number :'));
	if (a >= 0) {
		var i = 1;
		while (i <= a) {
			document.write('<b>' + i + '</b>' + ' , ');
			i = i + 2;
		}
	} else {
		document.write('invalid input');
	}
}

//while loop to print the sum of square of the number
function $wh_sqsum() {
	var a = parseInt(prompt('enter the number : '));
	if (a >= 0) {
		var i = 1;
		var b = 0;
		while (i <= a) {
			b = b + Math.pow(i, 2);
			i++;
		}
		document.write('the sum of square till ' + a + '^2 is : ' + b);
	} else {
		document.write('invalid input');
	}
}

//while loop to print the nth power (power fixed)
function nth_fixed() {
	var a = parseInt(prompt('enter the frequency : '));
	if (a > 0) {
		var b = parseInt(prompt('enter the power (fixed) : '));
		var i = 1;
		while (i <= a) {
			document.write(i + '^' + b + ' = ' + Math.pow(i, b) + '<br>');
			i++;
		}
	} else {
		document.write('invalid input');
	}
}

//while loop to print the base fixed power
function wh_bafix() {
	var a = parseInt(prompt('enter the base (fixed): '));
	var b = parseInt(prompt('enter the power'));
	if (a != 0) {
		var i = 1;
		while (i <= b) {
			document.write(a + '^' + i + '=' + Math.pow(a, i) + '<br / >');
			i++;
		}
	} else {
		document.write(0);
	}
}

//while loop to print the sum of n numbers
function wh_sum() {
	const a = parseInt(prompt('enter the number :'));
	if (a > 0) {
		let b = 0;
		let i = 1;
		while (i <= a) {
			b = b + i;
			i++;
		}
		document.write('the sum of ' + a + ' numbers is : ' + b);
	} else if (a == 0) {
		document.write(0);
	} else {
		document.write('invalid input');
	}
}

//while loop to print the factorial of number
function wh_fact() {
	const a = parseInt(prompt('enter the factorial number:'));
	if (a >= 0) {
		let i = 1;
		let b = 1;
		while (i <= a) {
			b = b * i;
			i++;
		}
		document.write(a + ' ! = ' + b);
	} else {
		document.write('invalid input');
	}
}

//while loop to print the gapping series
function wh_pat() {
	var a = parseInt(prompt('enter the frequency:'));
	var i = 1;
	var b = 0;
	while (i <= a) {
		document.write(b + ', ');
		b = b + i;
		i++;
	}
}

// while loop to print the fibonacci series
function wh_fibo() {
	const a = parseInt(prompt('enter the number:'));
	if (a > 0) {
		let i, b, c, d;
		i = 1;
		b = 0;
		c = 1;
		d = 0;
		while (i <= a) {
			i++;
			document.write(b + ' , ');
			d = b + c;
			b = c;
			c = d;
		}
	} else {
		document.write('invalid input');
	}
}

//while loop to print the nth term of fibonacci series
function wh_Nfibo() {
	var a = parseInt(prompt('enter the number'));
	if (a > 0) {
		var b, c, d, i;
		b = 0;
		c = 1;
		d = 0;
		i = 1;
		while (i <= a) {
			d = b + c;
			if (i == a) {
				document.write(b);
			}
			b = c;
			c = d;
			i++;
		}
	} else {
		document.write('invalid input');
	}
}

//while loop to count the digits in a number
function wh_count() {
	var a = parseInt(prompt('enter the number:'));
	if (a > 0) {
		var b = 0;
		while (a >= 0) {
			if (a == 0) {
				document.write(b);
				break;
			}
			a = Math.floor(a / 10);
			b++;
		}
	} else if (a == 0) {
		document.write('1');
	} else {
		document.write('invalid input');
	}
}

// while loop to print the sum of digits
function wh_sod() {
	var a = parseInt(prompt('enter your number:'));
	if (a > 0) {
		var b = 0;
		var c;
		while (a > 0) {
			c = a % 10;
			b = b + c;
			if (a <= 9) {
				document.write(b);
				break;
			}
			a = parseInt(a / 10);
		}
	} else if (a == 0) {
		document.write('0');
	} else {
		document.write('invalid input');
	}
}
//do while loop starts here
// do while loop to print the n numbers
function d_prit() {
	const a = parseInt(prompt('enter the number: '));
	if (a > 0) {
		let i = 1;
		do {
			document.write(i + ', ');
			i++;
		} while (i <= a);
	} else {
		document.write('invalid input');
	}
}

// do while loop to print the table of a number
function d_table() {
	const a = parseInt(prompt('enter the number:'));
	if (a != 0) {
		let i = 1;
		do {
			document.write(a + ' x ' + i + ' = ' + a * i + '.<br>');
			i++;
		} while (i <= 10);
	} else {
		document.write('0');
	}
}

// do while to print the even numbers
function d_even() {
	const a = parseInt(prompt('enter the number:'));
	if (a >= 0) {
		let i = 0;
		do {
			document.write(i + ', ');
			i = i + 2;
		} while (i <= a);
	} else {
		document.write('invalid input');
	}
}

// do while to print the odd numbers
function d_odd() {
	const a = parseInt(prompt('enter the number:'));
	if (a >= 1) {
		let i = 1;
		do {
			document.write(i + ', ');
			i = i + 2;
		} while (i <= a);
	} else {
		document.write('invalid input');
	}
}

//do while loop to print the sum of square numbers
function d_$sq_sum() {
	const a = parseInt(prompt('enter the number:'));
	if (a > 0) {
		let i = 1;
		let b = 0;
		do {
			b = b + i ** 2;
			i++;
		} while (i <= a);
		document.write('the sum of square numbers till ' + a + ' ^2 is ' + b);
	} else if (a == 0) {
		document.write('the sum of square numbers till ' + a + ' ^2 is 0');
	} else {
		document.write('invalid input');
	}
}

//do while loop to print fibonacci series
function d_fibo() {
	const a = parseInt(prompt('enter the number'));
	if (a > 0) {
		let i, b, c, d;
		i = 1;
		b = 0;
		c = 1;
		d = 0;
		do {
			document.write(b + ',');
			i++;
			d = b + c;
			b = c;
			c = d;
		} while (i <= a);
	} else {
		document.write('invalid input');
	}
}

//do while loop to print the nth power(power fixed)
function d_pow_fixed() {
	var a = parseInt(prompt('enter the frequency'));
	if (a > 0) {
		var b = parseInt(prompt('enter the power(fixed)'));
		var i = 1;
		do {
			document.write(i + '^' + b + ' = ' + Math.pow(i, b) + '. <br>');
			i++;
		} while (i <= a);
	} else if (a <= 0) {
		document.write('invalid input ');
	} else {
		document.write('0');
	}
}

//do while loop to print the nth power(base fixed)
function d_exp() {
	const a = parseInt(prompt('enter the base (fixed)'));
	const b = parseInt(prompt('enter the frequency'));
	let i = 1;
	do {
		document.write(a + ' ^ ' + i + ' = ' + Math.pow(a, i) + '. <br>');
		i++;
	} while (i <= b);
}

//do while loop to print the sum of even numbers
function d_sum() {
	const a = parseInt(prompt('enter the numbers'));
	if (a >= 0) {
		let i = 0;
		let b = 0;
		do {
			b = b + i;
			i = i + 2;
		} while (i <= a);
		document.write('the sum of even numbers till ' + a + ' is: ' + b);
	} else {
		document.write('invalid input');
	}
}

//do while loop to print the factorial of a nunmber
function d_fact() {
	const a = parseInt(prompt('enter the numbers'));
	if (a >= 0) {
		let i = 1;
		let b = 1;
		do {
			b = b * i;
			i++;
		} while (i <= a);
		document.write(a + ' ! = ' + b);
	} else {
		document.write('invalid input');
	}
}

//do while loop to print the gapping series
function d_pat() {
	const a = parseInt(prompt('enter the frequency'));
	if (a > 0) {
		let i = 1;
		let b = 0;
		do {
			document.write(b + ' ,');
			b = i + b;
			i = i + 1;
		} while (i <= a);
	} else {
		document.write('invalid input');
	}
}

//do-while loop to print the nth term of fibonacci series
function d_Nfibo() {
	var a = parseInt(prompt('enter the number:'));
	if (a > 0) {
		var b, c, d, i;
		b = 0;
		c = 1;
		d = 0;
		i = 1;
		do {
			d = b + c;
			if (i == a) {
				document.write('<b>' + b + '</b>');
			}

			b = c;
			c = d;
			i++;
		} while (i <= a);
	} else {
		document.write('invalid input');
	}
}

//do-while loop to count the digit in a number
function d_count() {
	var a = parseInt(prompt('enter the number:'));
	if (a > 0) {
		var b = 0;
		do {
			a = Math.floor(a / 10);
			b++;
			if (a == 0) {
				document.write(b);
				break;
			}
		} while (a >= 0);
	} else if (a == 0) {
		document.write('1');
	} else {
		document.write('invalid input');
	}
}

//do-while loop to print the sum of digits
function d_sod() {
	let a = parseInt(prompt('enter the number:'));
	if (a >= 0) {
		let d = a;
		let b = 0;
		let i = 1;
		do {
			c = a % 10;
			b = b + c;
			a = parseInt(a / 10);
			i++;
		} while (i <= d);
		document.write(b);
	} else {
		document.write('invalid input');
	}
}

//patterns starts here

//for loop to create a pattern
function p_1() {
	var a = parseInt(prompt('enter the number:'));
	if (a % 10 == 0) {
		for (var i = 1; i <= a; i = i + 10) {
			for (var j = i; j <= i + 9; j = j + 1) {
				document.write(j + ' ');
			}
			document.write('<br>');
		}
	} else {
		document.write('<b>invalid input</b>');
	}
}

//for loop to create a pattern
function p_2() {
	var t = parseInt(prompt('enter the number:'));
	if (t > 0) {
		for (var a = 1; a <= t; a++) {
			for (var b = 1; b <= a; b++) {
				document.write(b + ' ');
			}
			document.write('<br>');
		}
	} else {
		document.write('<b>invalid input </b>');
	}
}

//for loop to create pattern
function p_3() {
	var t = parseInt(prompt('enter the number:'));
	if (t > 0) {
		for (var a = 1; a <= t; a++) {
			for (var b = 1; b <= a; b++) {
				document.write(a + ' ');
			}
			document.write('<br>');
		}
	} else {
		document.write('<b>invalid input </b>');
	}
}

//for loop to create pattern
function p_4() {
	var t = parseInt(prompt('enter the number:'));
	if (t > 0) {
		for (var a = t; a >= 1; a--) {
			for (var b = 1; b <= a; b++) {
				document.write(a + ' ');
			}
			document.write('<br>');
		}
	} else {
		document.write('<br>');
	}
}

//for loop to create pattern
function p_5() {
	var t = parseInt(prompt('enter the number:'));
	if (t > 0) {
		for (var a = t; a >= 1; a--) {
			for (var b = a; b >= 1; b--) {
				document.write(b + ' ');
			}
			document.write('<br />');
		}
	} else {
		document.write('<b>invalid input</b>');
	}
}

//for loop to create rectangular star pattern
function p_6() {
	var p = parseInt(prompt('enter no. of rows'));
	var q = parseInt(prompt('enter no. of cols'));
	if (p > 0 && q > 0) {
		for (var a = 1; a <= p; a++) {
			for (var b = 1; b <= q; b++) {
				document.write('<b> * </b>');
			}
			document.write('<br>');
		}
	} else {
		document.write('invalid input');
	}
}

//for loop to create left traiangle star pattern
function p_7() {
	var t = parseInt(prompt('enter the number:'));
	if (t > 0) {
		for (var a = 1; a <= t; a++) {
			for (var b = 1; b <= a; b++) {
				document.write(' * ');
			}
			document.write('<br>');
		}
	} else {
		document.write('<b>invalid input</b>');
	}
}

// for loop to print the triangular pattern
function p_8() {
	var t = parseInt(prompt('enter the number of rows:'));
	if (t > 0) {
		for (var a = 1; a <= t; a++) {
			for (var b = a; b < t; b++) {
				document.write(' &nbsp; ');
			}
			for (var c = a; c <= 3 * a - 2; c++) {
				document.write(' * ');
			}
			for (var b = a; b < t; b++) {
				document.write(' &nbsp; ');
			}
			document.write('<br>');
		}
	} else {
		document.write('invalid input');
	}
}

//for loop to print L
function p_9() {
	var t = parseInt(prompt('enter the number:'));
	if (t > 0) {
		for (var a = 1; a <= t; a++) {
			if (a != t) {
				for (var b = a; b <= a; b++) {
					document.write(' * ');
				}
			} else {
				for (var b = 1; b <= t; b++) {
					document.write(' * ');
				}
			}
			document.write('<br>');
		}
	} else {
		document.write('invalid input');
	}
}
