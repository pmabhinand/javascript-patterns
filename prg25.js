 // w a p to find GCD / HCF of any given numbers

 num1=6
 num2=12
 hcf=0

 for(i=1;i<=num1 && i<=num2;i++){
    if(num1%i==0 && num2%i==0){
        hcf =i
    }
 }
 console.log(hcf);
 

 //another method(my)


 num1=14
num2=38
temp=0

if(num1>num2){
    for(i=1;i<=num2;i++){
        if(num1%i==0 && num2%i==0){
            temp=i   
        }
    }
    console.log('hcf = ',temp);
    
}
if(num2>num1){
    for(i=1;i<=num1;i++){
        if(num1%i==0 && num2%i==0){
            temp=i
        }
    }
   console.log('hcf = ',temp);
}


 
 //w a p to display all prime numbers from 2 to 50
 //w a p to display all armstrong numbers from 8 to 500 