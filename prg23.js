//w a p print numbers from 1 to 5 using for loop

for(i=1;i<=5;i++){
    console.log(i);
}


//w a p to numbers from 5 to 1 using for loop

for(i=5;i>=1;i--){
  console.log(i);
}


//w a p to create a loop which have the ability to print upto 10 but display upto 5

for(j=1;j<=10;j++){
    console.log(j);
    if(j==5){
        break
    }
}


//w a p to check whether a given number is prime or not
num=5
count=0
for(i=1;i<=num;i++){
      temp=num%i
      if(temp==0){
        count++
      }   
}
if(count==2){
    console.log('prime number');
  }

  else{
    console.log('not prime number');
  }