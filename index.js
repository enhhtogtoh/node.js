// import chalk from "chalk";
// console.log(chalk.green("Hello World!"));
// console.log(chalk.red("Javascript Node.js"));

// const data = [
//   { name: "Togtoh", age: 22 },
//   { name: "Togtoh", age: 22 },
//   { name: "Togtoh", age: 22 },
//   { name: "Togtoh", age: 22 },
//   { name: "Togtoh", age: 22 },
//   { name: "Togtoh", age: 22 },
//   { name: "Togtoh", age: 22 },
//   { name: "Togtoh", age: 22 },
// ];

// shine file uusgen
import fs from "fs";
// fs.writeFileSync("./hello.json", JSON.stringify(data));

// const data = fs.readFileSync("./hello.json", "utf8");

// console.log(data);

// fs.writeFileSync("./hello1.json", JSON.stringify(data));

// fs.writeFileSync("./hello1.json", JSON.stringify(data));
// const data = fs.readFileSync("./hello1.json", "utf8");
// console.log(data);

// hun harhad oilgomjtoi bolgodog
// utf8

// fs write, read

// #1. бүх хэрэглэгч console-доно.

const user = fs.readFileSync("./users.json", "utf8");
console.log(user);

// #2. Email-ээ параметр болгоод оруулахад тэр email таарч байгаа хэрэглэгчийг ол. Байхгүй байвал тийм хэрэглэгч хүн байхгүй гэж хэвлэ.

const parsedUser = JSON.parse(user);
console.log(parsedUser);
const findUserEmail = (email) => {
  const result = parsedUser.find((value) => value.email === email);
  if (result) {
    console.log(result);
  } else {
    console.log("tiim hereglegc baihgui");
  }
};
const hariu = findUserEmail("bilguun.togtokh@example.com");

// #3. Jobtitle-аар filter-дэнэ.

const filterByJobTitle = (title) => {
  const result1 = parsedUser.filter((value) => value.jobTitle === title);
  console.log(result1);
};
const hariu1 = filterByJobTitle("Software Engineer");

// #4. Department-аар filter-дэнэ.
const filterByDepartment = (department) => {
  const result2 = parsedUser.filter((value) => value.department === department);
  console.log(result2);
};
const hariu2 = filterByDepartment("Support");
// #5. Email-ээр хэрэглэгч устгаад users.json update
// #6. Emaileer хэрэглэгч олоод jobtitle, department 2г өөрчилнө тэгээд users.json update.
