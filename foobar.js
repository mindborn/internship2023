for(let i=1;i<=100;i++)
{
    if(i%3===0 && i%5===0) console.log('FooBar');
    else if(i%3===0) console.log('Foo');
    else if(i%5===0) console.log('Bar');
    else console.log(i);
}
