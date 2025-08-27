let myValue: number | string | boolean = 10;
console.log("myValue:", myValue);

let myBoolean: boolean = true;
console.log("myBoolean:", myBoolean);

let healthPoints: number = 150;
console.log("healthPoints:", healthPoints);

let otherMultipleDataType: number | boolean | "myTag" = "myTag";
console.log("otherMultipleDataType:", otherMultipleDataType);

let myVar: any;
myVar = 123;
myVar = true;
myVar = "texto";
myVar = {};
console.log("myVar:", myVar);

const myConstant: number = 5;
console.log("myConstant:", myConstant);

let inferedDataType: string | number = "Texto inicial";
inferedDataType = 123;
console.log("inferedDataType:", inferedDataType);

const isActive: boolean = true;
console.log("isActive:", isActive);

let mixed: number | string | boolean = true;
console.log("mixed:", mixed);

let myWhile: string = "Hola";
console.log("myWhile:", myWhile);

let myNumber: number = 10;
console.log("myNumber:", myNumber);

let numeros: (number | string)[] = [1, 2, "3"];
console.log("numeros:", numeros);

let tupla: [string, number] = ["Hola", 10];
console.log("tupla:", tupla);

let otraTupla: [string, boolean] = ["Hola", true];
console.log("otraTupla:", otraTupla);

let texto: string | null = "Hola mundo";
texto = null;
console.log("texto:", texto);

let color: "rojo" | "verde" | "azul" = "rojo";
console.log("color:", color);

let valor: any = 10;
console.log("valor:", valor.toString());

let version: number = 1.0;
version = 2.0;
console.log("version:", version);

let persona: { nombre: string; apellido?: string } = { nombre: "Ana" };
persona.apellido = "Ruiz";
console.log("persona:", persona);

let edad: number | undefined = undefined;
console.log("edad:", edad);

export {};