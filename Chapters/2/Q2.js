for(var num =1;num<=100;num++){

  var print="";

 if(num%3==0)

   print+="Fizz";

  if(num%5==0)

    print+="Buzz";

  if(print=="")

    print=num;

  console.log(print);

}

