let map={};

map['name']='abcd';
map['roll']=10;
map['x']='xyz';

delete map['x'];

console.log(map);
console.log(map['name']);
console.log(map['roll']);
console.log(map.name);
console.log(map.roll);
