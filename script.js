// OBJECTS!

let student = {
	firstName: "Maria",
	lastName: "Green",
	age: 22,
	location: { lat: 42.698, lng: 23.322 },
	locationMethod: function () {
		return this.lo;
	},
};
//console.log(student);
//console.log(student.location());

//let name = "Sofia"; // key name, value Sofia
let madeUpVar;
let population = 1325744;
let country = "Bulgaria";
let ourTown = {
	name: "Our Town",
	population: 1000,
	country: "United States",
};
//let town = { name, population, country, ourTown, madeUpVar };

//console.log(town);
// Object {name: "Sofia", population: 1325744, country: "Bulgaria"}

// let rect = {
// 	width: 10, // this.width
// 	height: 4, // this.height
// 	grow: function (w, h) {
// 		this.width += w;
// 		this.height += h;
// 	},
// 	print: function () {
// 		console.log(`[${this.width} x ${this.height}]`);
// 	},
// };
// rect.print();
// rect.grow(2, 3);
// rect.print(); // [12 x 7]

//console.log("[", rect.width, "x", rect.height, "]");
//console.log(`[ ${rect.width} x ${rect.height} ]`);

let rect = {
	// I am an object! I am "this"
	width: 10, // this.width
	height: 4, // this.height
	toString: function () {
		return `rect[${this.width} x ${this.height}]`;
	},
};

// console.log(rect); // Object {width: 10, height: 4}
// // This will invoke toString() to convert the object to String
// console.log(rect);
// console.log("" + rect); // rect[12 x 7]
// console.log("to string", rect.toString());

// const department = {
// 	name: "Engineering",
// 	data: {},
// };

//let myArray = [department, "2", 3];

//const { data } = department; //now data references the data object directly

const ArrayOfObjectsList = [
	{ key: "value 1" }, // = obj
	{ key: "value 2" }, // = obj2
	{ key: "value 3" }, // obj3
]; // array of objects
//let notObj = ArrayOfObjectsList[0];
//let notObj2 = ArrayOfObjectsList[1];
const [obj, obj1, obj2] = ArrayOfObjectsList;
//console.log(notObj, notObj2, obj);

obj["someKey"] = "Zaphod";
//console.log(obj);
//console.log(ArrayOfObjectsList);
// now each object can be referenced directly

// console.log(data);
// data["someKey"] = 42; // same as 74
// department.data["someKey"] = 42; // same as 73
// console.log(department);

//Destructuring can work beyond the top level

const department = {
	// tree with birds
	name: "Engineering",
	data: {
		// nest(ed) object
		director: {
			name: "John",
			position: "Engineering Director",
		}, // end of director
		employees: [],
		company: "Quick Build",
	},
};
const {
	data: { director, employees, company },
} = department;

//console.log(director, employees, company);
// director is { name: 'John', position: 'Engineering Director'}

const departments = [
	["Engineering", ["secretary", "director", "worker "]], // skip first item then there is a comma
	[
		"Accounting",
		[
			"director",
			"accountant",
			"Stunt man",
			"Semi pro retired part time angler",
		],
	],
];

let someName = departments[0][0];
//console.log("No destructor ", someName);

const [, [name3, positions2]] = departments;
//console.log(name2);
//console.log(positions);
//console.log(positions2);
// name is 'Engineering'
// positions is [ 'secretary', 'director', 'worker' ]

const employees2 = [
	{ name: "John", position: "worker" },
	{ name: "Jane", position: "secretary" },
];
const [obj11, obj22] = employees2; // name is 'John'

//console.log(name);
//console.log("new objects ", obj11.name, obj22.name);

const company2 = {
	employees: ["John", "Jane", "Sam", "Suzanne"],
	name: "Quick Build",
};
const {
	employees: [employee],
} = company2; // employee is 'John'

//console.log(employee);

//Aggregation Example

let dataArray = [
	{ id: "a", score: 1 },
	{ id: "b", score: 2 },
	{ id: "c", score: 5 },
	{ id: "a", score: 3 },
	{ id: "c", score: 2 },
];

let res1 = dataArray.reduce((acc, curr, index, array) => {
	let same = acc.find((e) => e.id === curr.id);
	if (!same) {
		acc.push(curr);
	} else {
		same.score += curr.score;
	}
	return acc;
}, []);
//console.log(res1);
//[ { id: 'a', score: 4 }, { id: 'b', score: 2 }, { id: 'c', score: 7 } ]

const objs = [
	{ name: "Peter", age: 35 },
	{ age: 22 },
	{ name: "Steven" },
	{ height: 180 },
];
const concatenate = (a, o) => ({ ...a, ...o });
const c = objs.reduce(concatenate, {});
console.log(c); // { name: 'Steven', age: 22, height: 180 }

//Delegation Example
const objs3 = [
	{ name: "Peter", age: 35 },
	{ age: 22 },
	{ name: "Steven" },
	{ height: 180 },
];
const delegate = (a, b) => Object.assign(Object.create(a), b);
console.log(delegate);
const d = objs3.reduceRight(delegate, {});
console.log(d); // { name: 'Peter', age: 35 }
console.log(d.height); // 180
