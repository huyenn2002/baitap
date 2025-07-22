//Bai 1
// function Username(name: string, age:number): void{
//     console.log(`Name is ${name}, age is ${age}`);
// }
// Username('Huyền', 23);

//Bai 2
// interface User {
//     id: number,
//     name: string,
//     isAdmin: boolean
// }
// function printUserInfo(user: User): void{
//     console.log(`ID: ${user.id}`),
//     console.log(`Name: ${user.name}`),
//     console.log(`Is Admin: ${user.isAdmin}`)
// }
// printUserInfo({id: 1, name: 'Huyen', isAdmin: false})

//Bai 3
// type Status = "pending"|"success"|"error";
// function handleStatus(status: Status): void{
//     if (status === "pending") {
//         console.log("Loading...");
//     } else if (status === "success"){
//         console.log("Done!");
//     } else if (status === "error"){
//         console.log("Failed!");
//     }
// }
// handleStatus("pending");

//Bai 4
// class Ractangle{
//     width: number;
//     height: number;

//     constructor(width: number, height: number){
//         this.width = width;
//         this.height = height;
//     }
//     getArea(): void{
//         console.log(`Area: ${ this.width * this.height}`);
//     }
// }
// const a = new Ractangle(3,4);
// a.getArea();

//Bai 5
// function wrapInArray<T>(value: T): T[] {
//     return [value];
// }
// console.log(wrapInArray(23));
// console.log(wrapInArray("Huyền"));
// console.log(wrapInArray({x: 1}));

//Bai 6
// enum Direction {
//     Up,
//     Down,
//     Left,
//     Right
// }
// function move(direction: Direction): void{
//     switch (direction) {
//         case Direction.Up:
//             console.log("Moving Up..."); 
//             break;
//         case Direction.Down:
//             console.log("Moving Down...");
//             break;
//         case Direction.Left:
//             console.log("Moving Left..."); 
//             break;
//         case Direction.Right:
//             console.log("Moving Right...");
//             break;
//     }
    
// }
// move(Direction.Down);

//Bai 7
// function getUserInfo():[string, number, boolean]{
//     return ["Huyền", 23, true];
// }
// const [names, age, verified] = getUserInfo();
// console.log("Name: ", names);
// console.log("Age: ", age);
// console.log("Verified: ", verified);

//Bai 8
// function greet(name: string, greeting?: string){
//     if (!greeting){
//         greeting = "Hello";
//     } 
//     console.log(`${greeting}, ${name}`);
// }
// greet("Huyền");
// greet("Huyền", "Xin chào");

//Bai 9
// interface Config{
//     readonly apiKey: string;
//     readonly baseUrl: string;
// }
// function printConfig(config: Config): void{
//     console.log("API Key: ", config.apiKey);
//     console.log("base Url: ", config.baseUrl);
// }
// const config1: Config = {
//     apiKey: "baitapts",
//     baseUrl: "node baitap.js"
// }
// printConfig(config1);
//config1.apiKey ="baitap1";

//Bai 10
interface Person {
  name: string;
}
interface Employee {
  employeeId: number;
}
const staff: Person & Employee = {
  name: "Huyền",
  employeeId: 2002,
};
console.log("Name: ", staff.name);
console.log("EmployeeId: ", staff.employeeId);