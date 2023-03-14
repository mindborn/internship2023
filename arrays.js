let a=[];
a.push('abcd');
a.push('efgh');
a.push('ijkl');
a.push('mnop');
a.push('qrst');

// a.splice(2,1,'xyz','uvx');
a.splice(0,0,'tuv');

console.log(a.length);
console.log(a);
// console.log(a[0]);
// console.log(a[1]);

// for(let i=0;i<a.length;i++)
// {
//     console.log(a[i]);
// }

for(let e of a)
{
    console.log(e);
}
