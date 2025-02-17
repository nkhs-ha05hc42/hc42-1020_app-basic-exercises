for(let num = 1,cnt,sum = 0; num<=100; num++)
    {
        if(num%2==0)
        {
            sum=sum+num
        }
        if(sum>50)
        {
            console.log(num)
            console.log(sum)
            break
        }
    }