function add(x, y)
{
    return x+y;
}

function evenOrOdd(x)
{
    if(x%2==0) return "Even";
    else return "Odd";
}

function x(...c)
{
    console.log(c);
}

console.log(add(10,20));
console.log(evenOrOdd(30));
x(10,20,30,40);
