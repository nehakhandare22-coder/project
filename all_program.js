var a =parseInt(prompt("enter the number:- "));
var rev=0;
var l=0;
var tem=a;
var arm=a;
while(a>0){
    l+=1;
	a=parseInt(a/10);
}
document.write("length of number is:- " + l +"</br>");
while(tem>0){
	last=tem%10;
	rev+=last**l;
	tem=parseInt(tem/10);
}
if(arm==rev){
	document.write("the number is armstrong");
}
else{
	document.write("number is not armstrong");
}
document.write("</br>");
var n = parseInt(prompt("Enter how many terms you want: "));
var a = 0;
var b = 1;

document.write("Fibonacci Series: <br>");
document.write(a + " " + b + " ");

for (var i = 2; i < n; i++) {
    var c = a + b;
    document.write(c + " ");
    a = b;
    b = c;
}
document.write("</br>");
var m=parseInt(prompt("Enter how many numbers you want :- "));
var fh = 0, sh = 0;
var fl = 999999, sl = 999999;
for(var i=0; i<m; i++){
	var h = parseInt(prompt("Enter number " + (i + 1) + ":"));
	if(h>fh){
		sh=fh;
		fh=h;
	}else if(h>sh && h!=fh){
		sh=h;
	}
	if(h<fl){
			sl=fl;
			fl=h;
		}else if(h<sl && h!=fl){
			sl=h;
		}
	}
document.write("first highest is:- " + fh + "</br>");
document.write("second highest is:-" + sh + "</br>");
document.write("first lowest is:- " + fl + "</br>");
document.write("second lowest is:- " + sl + "</br>");
document.write("</br>");
var p=parseInt(prompt("enter the number:- "));
while(p>0){
	last=p%10
	document.write("<br>Table of " + last + ":<br>");
	for (var i = 1; i <= 10; i++) {
		document.write(last + " × " + i + " = " + (last * i) + "<br>");
	}
	p=parseInt(p/10);
}

document.write("</br>");
var f =parseInt(prompt("enter the number:- "));
while(f>0){
	last=f%10;
	var fact=1;
	for(var i=1;i<=last;i++){
		fact*=i;
	}
	document.write("Factorial of " + last + " = ");
	for(var j=last;j>=1;j--){
		document.write(j);
		if(j>1){
			document.write("*");
		}

	}
	document.write("=" + fact + "<br>");
	f=parseInt(f/10);
}