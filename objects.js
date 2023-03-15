function Student(name, roll, marks)
{
    this.name=name;
    this.roll=roll;
    this.marks=marks;

    this.perc=()=>'Percentage is '+this.marks/4+'%';
    this.showDetails=()=>
    {
        return 'Name : '+this.name+'\n'
        +'Roll : '+this.roll+'\n'
        +'Marks : '+this.marks+'\n'
        +this.perc();
    };

    console.log(this);
    return this;
}

let s=new Student("abcd",10,390);
let s2=new Student("efgh",20,350);
// console.log(s.perc())
console.log(s.showDetails());
console.log(s2.showDetails());
