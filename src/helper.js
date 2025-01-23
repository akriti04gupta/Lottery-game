function genTicket(n)
{
    let arr=new Array(n);
    for(let i=0;i<n ; i++)
    {
        arr[i]=Math.floor(Math.random() *10 );

    }
    return arr;

};

function sum(arr)
{
    let n=arr.length;
    let sum=0;
    for(let i=0;i<n;i++)
    {
        sum=sum+arr[i];
    }
    return sum;
}

export {genTicket};
export {sum};