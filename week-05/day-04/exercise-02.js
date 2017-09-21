class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
};

class Employee extends Person{
	constructor(name,age,salary,department,hiredAt){
		super(name, age);
		
		this.salary = salary;
		this.department = department||'unknown';
		this.hiredAt = hiredAt||new Date().getTime();
		this.leftAt = null;
		this.status = 'active';
		this.maxSalaryMultiplier = 1;
	}
	
	getInfo() {
		let returnString;
		if(this.leftAt===null){
			returnString = this.name + ' (' + this.age + ') works at ' + this.department + ' for ' + this.salary + 'usd since ' + this.hiredAt;
		}
		else{
			returnString = this.name + ' (' + this.age + ') works at ' + this.department + ' for ' + this.salary + 'usd from ' + this.hiredAt + ' to ' + this.leftAt;
		}
		return returnString;
	}
	
	quit(isFired) {
		if(isFired && this.leftAt === null){
			this.leftAt = new Date().getTime();
			this.status = 'fired';
			return true;
		}
		else if(isFired !== true && this.leftAt === null) {
			this.leftAt = new Date().getTime();
			this.status = 'quit';
			return true;
		}
		else{
			throw new Error('He/She already left!');
			return false;
		}
	}
	
	increaseSalaryBy(newSalary) {
		let percentage = newSalary/this.salary;
		if(percentage <= this.maxSalaryMultiplier) {
			this.salary = newSalary;
			return newSalary;
		}
		else {
			throw new Error('Exceeded the max salary multiplier!');
			return;
		}
	}
	
	setDepartment(newDepartment) {
		this.departent = newDepartment;
	}
}

class Developer extends Employee {
	constructor(name,age,salary,level){
		super(name, age, salary);
		
		this.maxSalaryMultiplier = 1.05;
		this.level = level;
	}
	
	changeLevel(newLevel) {
		if(this.level !== newLevel){
			this.level = newLevel;
			return true;
		}
		return false;
	}
}

class Director extends Employee {
	constructor(name,age,salary){
		super(name, age, salary);
		
		this.maxSalaryMultiplier = 1.1;
	}
	
	fireEmployee(employeToFire) {
		if(employeToFire instanceof Employee){
			employeToFire.quit(true);
			return true;
		}
		else{
			throw new Error('He/She is not an employee!');
			return; 
		}
	}
	
	promoteDeveloper(developerToPromote, newLevel) {
		return developerToPromote.changeLevel(newLevel);
	}
}




//test
//var employee1 = new Employee('Bob', 23, 2333, 'marketing', new Date().getTime());
//
//console.log(employee1.getInfo());

//employee1.quit(true);
//console.log(employee1.status);
//console.log(employee1.getInfo());

//var developer1 = new Developer('Anna', 21, 2444,'junior');
//console.log(developer1.getInfo());
//
//var director1 = new Director('Sandy', 33, 3333);
//director1.fireEmployee(employee1);
//console.log(employee1.getInfo());
//console.log(director1.promoteDeveloper(developer1,'senior'));
//console.log(developer1.level);