//w a p to display like below

//# # # #
//# # # #
//# # # #
//# # # #


for(row=1;row<=4;row++){
    str = ''
    for(col=1;col<=4;col++){
        str = str+" #"
    }
    console.log(str);
}

console.log('-------------------------');


//1 1 1 1
//2 2 2 2
//3 3 3 3
//4 4 4 4


for(i=1;i<=4;i++){
    str=''
    for(j=1;j<=4;j++){
        str=str+i+' '
    }
    console.log(str);
}

console.log('-------------------------');



//1 2 3 4
//1 2 3 4
//1 2 3 4
//1 2 3 4


num=4
str=''

for(r=1;r<=num;r++){
    for(c=1;c<=num;c++){
        str=str+c+' '
    }
    console.log(str);
    str=''
}

console.log('------------------------');




//*
//* *
//* * *
//* * * *

n=4
str=''

for(a=1;a<=n;a++){
    for(b=a;b<=a;b++){
          str=str+'* '
    }
    console.log(str);
}


console.log('------------------------------------');


//        *
//     *    *
//    *   *    *
//  *   *    *    *


n=5

for(row=1;row<=n;row++){
      str=''
      for(spa=4;spa>=row;spa--){
        str= str+' '
      }
      for(col=1;col<=row;col++){
        str=str+' *'
      }
      console.log(str);
}






// * * * *
// * * *
// * *
// *

n=6
str=''

for(row=1;row<=n;row++){
     for(col=n;col>=row;col--){
          str=str+'* '
     }
     console.log(str);
     str=''
}

console.log('----------------------------------------------');







//1 2 3 4
//1 2 3
//1 2
//1

for(row=4;row>=1;row--){
    str=''
     for(col=1;col<=row;col++){
         str=str+col+' '
     }
     console.log(str);
}

console.log('---------------------------------');







//*
//* *
//* * *
//* * * * 
//* * * * *
//* * * *
//* * *
//* *
//*

for(row=1;row<=5;row++){
    str=''
      for(col=1;col<=row;col++){
          str=str+'* '
      }
      console.log(str);
}
for(row=5;row>1;row--){
     str=''
      for(col=1;col<row;col++){
          str=str+'* '
      }
      console.log(str);
}


console.log('--------------------------------------');






//          *
//         * *
//        * * *
//       * * * *
//        * * *
//         * *
//          *

for(row=1;row<=4;row++){
      str=''
      for(spa=4;spa>row;spa--){
        str= str+' '
      }
      for(col=1;col<=row;col++){
        str=str+'* '
      }
      console.log(str);
}
for(row=1;row<4;row++){
    str=''
    for(spa=1;spa<=row;spa++){
        str=str+' '
    }
    for(col=4;col>row;col--){
        str=str+'* '
    }
    console.log(str);
}

console.log('--------------------------------------');









//                    *                     (1,4) - (2,3) - (2,5) - (3,2)- (3,6)- (4 full)
//                  *   *
//                *       *
//              * * * * * * *


for(row=1;row<=4;row++){
      str=''
      for(col=1;col<=7;col++){
          if(row+col==5 || col-row==3  ||row==4){
             str=str+'*'
          }
          else{
            str=str+' '
          }
          
      }
      console.log(str);
     
}








