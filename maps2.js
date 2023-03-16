let map=new Map();

map.set('name','abcd');
map.set('roll',10);
map.set('roll',20);
map.set('x','xyz');
// map.delete('x');

console.log(map);
console.log(map.get('roll'));

for(let e of map)
{
    // console.log(e);
    let key=e[0];
    let value=e[1];
    console.log(key+" => "+value);
}

for(let e of map.entries())
{
    console.log(e);
}
for(let e of map.keys())
{
    console.log(e);
}

for(let e of map.values())
{
    console.log(e);
}


