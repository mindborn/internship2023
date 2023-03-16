function* rollnogen()
{
    let rollno=1;
    while(true)
    {
        yield rollno;
        rollno++;
    }
}

let rng=rollnogen();

class Student
{
    name;  //member / instance variable
    _roll;
    get roll()
    {
        // console.log('reading roll');
        return this._roll;
    }
    // set roll(value)
    // {
    //     // console.log('setting roll');
    //     if (value < 1)
    //     {
    //         // throw "Invalid roll number";
    //         this._roll = 0;
    //     }
    //     else
    //     {
    //         this._roll = value;
    //     }
    // }
    marks;
    get perc()
    {
        return this.marks/4+'%';
    }

    constructor(name, marks)
    {
        console.log('creating an object');
        this.name = name;
        this._roll = rng.next().value;
        this.marks = marks;
    }

    toString()
    {
        return "Name : "+this.name+"\n"
        +"Roll : "+this.roll+"\n"
        +"Marks : "+this.marks+"\n"
        +"Perc : "+this.perc;
    }
}

let students=[];

students[0] = new Student('abcd4', 50);
students[1] = new Student('abcd1', 350);
students[2] = new Student('abcd2', 250);
students[3] = new Student('abcd3', 150);

for(let i=0;i<students.length;i++)
{
    let s=students[i];
    console.log(s.toString());
}

for(let s of students)
{
    console.log(s.toString());
}
