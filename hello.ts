console.log('hello typescript');


class Student
{
	constructor(private name: string, private roll: number, private active: boolean)
	{		
	}
}

let s:Student = new Student('abcd',10,true);