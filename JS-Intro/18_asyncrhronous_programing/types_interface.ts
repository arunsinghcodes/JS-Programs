type Animal = {
  name: string;
  legs: number;
};

interface IAnimal {
  name: string;
  legs: number;
}

const Animal: IAnimal = {
  name: "Cow",
  legs: 4,
};

// Other Example for interface here

interface Car {
  make: string;
  model: string;
  year?: number;
}

const myCar: Car = {
  make: "Tata",
  model: "Tata Nexon",
  year: 2024, // optional
};

// interface uses the extends and where as type uses the & to inherit

interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  jobTitle: string;
}

const emp: Employee = {
  name: "Arun Kumar Singh",
  age: 25,
  jobTitle: "Software Engineer",
};

// Types use the & called an intersection type

type PersonInfo = {
  name: string;
  age: number;
};

type EmployeeInfo = PersonInfo & {
  jobTitle: string;
};

const empInfo: EmployeeInfo = {
  name: "Arun Kumar Singh",
  age: 25,
  jobTitle: "Software Engineer",
};
