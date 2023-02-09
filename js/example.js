const workers = [
    {
      name: "bill",
      job: "architect",
      salary: 10000,
    },
    {
      name: "Arni",
      job: "actor",
      salary: 100000,
    },
    {
      name: "Bob",
      job: "singer",
      salary: 40000,
    },
    {
      name: "Ann",
      job: "manager",
      salary: 30000,
    },
    {
      name: "Antony",
      job: "Footballer",
      salary: 90000,
    },
    {
      name: "John",
      job: "builder",
      salary: 25000,
    },
    {
      name: "Arthur",
      job: "teacher",
      salary: 20000,
    },
  ];

  const workers1 = [
    {
      name: "Robert",
      job: "Dentist",
      salary: 90000,
    },
    {
      name: "Pietro",
      job: "Computer Systems Analyst",
      salary: 120000,
    },
    {
      name: "James",
      job: "Web Developer",
      salary: 100000,
    },
  ];

  const workers2 = [...workers, ...workers1];
  console.log('workers2 :>> ', workers2);


  function middleSalary(workers) {
    const salarys = [];
    let totalSalary  = 0;
    for (const worker of workers) {
    salarys.push(worker.salary);
    totalSalary += worker.salary;
    }

    const result = totalSalary / salarys.length;


    return Number(result);
    
}

const result = middleSalary(workers);

console.log('result :>> ', result);

const arr = [1, 2, 3, 4, 5, 6];

const [a, b, c, d, i, e] = arr;
console.log('a :>> ', a);
console.log('b :>> ', b);
console.log('c :>> ', c);
console.log('d :>> ', d);
console.log('i :>> ', i);
console.log('e :>> ', e);


