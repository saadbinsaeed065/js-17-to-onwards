/*CHAPTER 17-20
//   Q NO 1
// var arr=[] 

//Q NO  2
var arr1=["0 1  2  3"]
var arr2=["1  0  1  2"]
var arr3=["2  1 0  1"]
var arr=[arr1,arr2,arr3]
for(i=0;i<arr.length;i++){
    document.write(arr[i]+"<br>")
}


//Q NO 3
var i
for(i=0;i<=10;i++){
    document.write(i+"<br>")
}

// QNO 4
var i
var table=prompt("Enter multiplication table")
var len=prompt("Enter table length")
for(i=1;i<len;i++){
    document.write(table +"x"+ i +"="+ (table*i) + "<br>")
}*/
 
// Q NO 5
var fruits=["apple","banana","mango","orange","strawberry"]
for(i=0;i<fruits.length;i++){
    document.write(fruits[i]+"<br>")
}
for(i=0;i<fruits.length;i++){
    document.write("element at index"  + i   +"is"+fruits[i] +"<br>" ) 
}

//Q NO 6
/*var i
for(i=0;i<=15;i++){
    document.write(i+" "+"<br>")
}

var b
for(b=10;b>=1;b--){
    document.write(b+" ")
}*/

/*var i
for(i=0;i<=20;i++){
    if(i%2==0){
        document.write(i+"<br>")
    }
}

var i
for(i=0;i<=19;i++){
    if(i%2!=0){
        document.write(i+"<br>")
    }
}
var i
for(i=1;i<=20;i++){
    if(i%2==0){
        document.write(i+"k"+"<br>")
    }
}
*/
//Q NO 7
/*var A
var order=prompt("Welcome to our bakery,what do you want to order sir")
var A=["cake","apple pie","cookie","chips","patties"]
for(i=0;i<=A.length;i++){
if (order==[A]){
    document.write(order+"is available at index"+[i]+"in our bakery")
}else{
    document.write("we are sorry"+order+"is not available in our bakery" )
}

}*/

 /*// QNO 8
var b=[0]
var a=[24,53,78,91,12]
for(i=0;i<=a.length;i++){
         if(a[i]>b){
           b=a[i]
        }
}
document.write(b)
*/

// QNO 9

var a=[24,53,78,91,12]
var b=a[0]
for(i=0;i<=a.length;i++){
         if(a[i]<b){
           b=a[i]
        }
}
document.write(b)