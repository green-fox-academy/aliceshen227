function Person(name,age) {
	this.name = name;
	this.age = age;
};

function Employee(name,age,salary,department,hiredAt) {
	Person.call(this, name, age);
	
	this.salary = salary;
	this.department = department||'unknown';
	this.hiredAt = hiredAt||new Date().getTime();
	this.leftAt = null;
	this.status = 'active';
	this.maxSalaryMultiplier = 1;
	
	this.getInfo = function(){
		let returnString;
		if(this.leftAt===null){
			returnString = this.name + ' (' + this.age + ') works at ' + this.department + ' for ' + this.salary + 'usd since ' + this.hiredAt;
		}
		else{
			returnString = this.name + ' (' + this.age + ') works at ' + this.department + ' for ' + this.salary + 'usd from ' + this.hiredAt + ' to ' + this.leftAt;
		}
		return returnString;
	}
	
	this.quit = function(isFired) {
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
	
	this.increaseSalaryBy = function(newSalary) {
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
	
	this.setDepartment = function(newDepartment) {
		this.departent = newDepartment;
	}
}

function Developer(name, age, salary, level){
	Employee.call(this, name, age, salary);
	
	this.maxSalaryMultiplier = 1.05;
	this.level = level;
	
	this.changeLevel = function(newLevel){
		if(this.level !== newLevel){
			this.level = newLevel;
			return true;
		}
		return false;
	}
}

function Director(name,age, salary){
	Employee.call(this, name, age, salary);
	
	this.maxSalaryMultiplier = 1.1;
	
	this.fireEmployee = function(employeToFire) {
		if(employeToFire instanceof Employee){
			employeToFire.quit(true);
			return true;
		}
		else{
			throw new Error('He/She is not an employee!');
			return;
		}
	}
	
	this.promoteDeveloper = function(developerToPromote, newLevel) {
		return developerToPromote.changeLevel(newLevel);
	}
}

//test
//var employee1 = new Employee('Bob', 23, 2333, 'marketing', new Date().getTime());
//
//console.log(employee1.getInfo());
//
////employee1.quit(true);
////console.log(employee1.status);
////console.log(employee1.getInfo());
//
//var developer1 = new Developer('Anna', 21, 2444,'junior');
//console.log(developer1.getInfo());
//
//var director1 = new Director('Sandy', 33, 3333);
//director1.fireEmployee(employee1);
//console.log(employee1.getInfo());
//console.log(director1.promoteDeveloper(developer1,'senior'));
//console.log(developer1.level);