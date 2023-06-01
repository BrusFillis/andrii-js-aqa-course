//task 1
let breaker="==================================================================";
let i=0, n=0, sum=0;
n=10;
console.log('Task 1', breaker);
for(i=1;i<=n;i++){
    console.log(`Tu jest cyfra ${i}`);
}
//task 2
console.log('Task 2', breaker);
n=100;
for(i=1;i<=n;i++){
    sum=sum+i;
}
console.log(`Сумма чисел от 1 до 100: ${sum}`);
//task 3
console.log('Task 3', breaker);
n=0;
i=10;
while(n<i){
    console.log(`Tu jest cyfra ${i}`);
    i--;
}
//task 4
console.log('Task 4', breaker);
n=50;
for(i=1;i<=n;i++){
    if(i%2===0){
        console.log(`Tu jest cyfra ${i}`);
    }
}
//task 5
console.log('Task 5', breaker);
n=0;
sum=0;
for(n=1;n<=10;n++){
    for(i=1;i<=10;i++){
        sum=n*i;
        console.log(`${n} x ${i} = ${sum}`);
    }
    console.log(breaker);
}
//task 6
console.log('Task 6', breaker);
n=7;
sum=1;
for(i=1;i<=n;i++){
    sum = sum*i;
}
console.log(`Факториал числа ${n} то ${sum}`);
console.log(breaker);
//task 7
console.log('Task 7 Poslidownisc chysel Fabbinachi vid 1 do 10', breaker);
n = 10;
fib = [0, 1];
for (i = 2; i < n; i++) {
  var nextNumber = fib[i - 1] + fib[i - 2];
  fib.push(nextNumber);
}
for (i = 0; i < n; i++) {
  console.log(fib[i]);
}
//task 8
console.log('Task 8', breaker);
let check;
n=100;
for(i=2;i<=n;i++){
    check=true;
    for(let j=2;j<i;j++){
        if(i%j===0){
            check=false;
        }
    }
    if (check===true){
        console.log(`Proste chyslo ${i}`)
    }
}
//task 9
console.log('Task 9', breaker);
let mas=[1];
for(i=2;i<=n;i++){
    mas.push(i);
}
console.log(mas);
for(i=1;i<=n;i++){
    if(mas[i]%5===0){
    console.log(`Chyslo co mozna podzielic na 5 : ${mas[i]}`);
    }
}
//task 10
console.log('Task 10', breaker);
sum=0;
mas=[1,2,3,4,5,6,7,8,9,10];
for(i=0; i<mas.length; i++){
    sum += mas[i];
}
console.log(`Suma massyvu to : ${sum}`);
