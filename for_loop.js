var i = 1;
var a=0;
while (i <= 10) {
    a+=i;
    document.write(i);
    if(i<10){
    	document.write("+");
    }
    i++; 
}
document.write("=" + a);

document.write("</br>");
var j=10;
var b=0;
while(j>=1){
	b+=j;
	document.write(j);
	if(j>1){
		document.write("+");
	}
	j--;
}
document.write("=" + b);
document.write("</br>");
h=0;
while(h<=100){
	if(h%2==0){
		document.write(h + " " + "is even" + "</br>");
	}
	else{
		document.write(h + " " + "is odd" + "</br>");
	}
	h++
}
document.write("</br>");
var k=100;
while(k>=0){
	if(k%2==0){
		document.write(k + " " + "is even" + "</br>");
	}
	else{
		document.write(k + " " + "is odd" + "</br>");
	}
	k--;
}
document.write("</br>");

var n =parseInt(prompt("enter the number:- "));
var m=1;
var fact=1;
while(m<=n){
	fact*=m;
	document.write(m);
	if(m<n){
		document.write("*");
	}
	m++
}
document.write("=" + fact);
document.write("</br>");
var a =parseInt(prompt("enter the number:- "));
var rev=0;
var l=0;
var tem=a;
var arm=a;
while(a>0){
    l+=1;
	a=Math.floor(a/10);
}
while(tem>0){
	last=tem%10;
	rev+=last**l;
	tem=Math.floor(tem/10);
}
if(arm==rev){
	document.write("the number is armstrong");
}
else{
	document.write("number is not armstrong");
}


