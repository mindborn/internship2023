function* getid()
{
    console.log("Before 1");
    yield 1;
    console.log("After 1");
    console.log("Before 2");
    yield 2;
    console.log("After 2");
}

let idgen=getid();
console.log(idgen);
console.log(idgen.next());
console.log(idgen.next());
console.log(idgen.next());
console.log(idgen.next());