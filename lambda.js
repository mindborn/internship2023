function add(x,y)
{
    return x+y;
}

let add2=(x,y)=>x+y

let a=add(10,20);
let b=add2(10,20);

function operate(a,b,f)
{
    console.log(f(a,b))
}


operate(10,20,(x,y)=>x*y)

let names=["efgh","ijkl","abcd"];

function stringcomp(s1,s2)
{
    let i=s1.localeCompare(s2);    
    console.log('comparing',s1,s2,i);
    return i;
}

names.sort((s1,s2)=>s2.localeCompare(s1));
// names.sort(stringcomp);

console.log(names);

// console.log(a)
// console.log(b)