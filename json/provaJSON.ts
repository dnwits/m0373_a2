// interface Coche {
//     modelo: string;
//     precio: number;
//     esElectrico: boolean; }
// const car: Coche =
//               { modelo: "Renaul Clio",
//                 precio: 25,
//                 esElectrico: true };
// console.log(car.precio); // 25

// const jsonString: string = JSON.stringify(car);
// console.log(jsonString);

interface Coche {
    modelo: string;
    precio: number;
    esElectrico: boolean; }
const jsonData = '{"modelo": "Citroen Picasso", "precio": 30, "esElectrico":false}';
const objecte: Coche = JSON.parse(jsonData);

console.log(objecte);