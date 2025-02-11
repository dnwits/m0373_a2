//ex-1
const sales: number[] = [500, 1500, 200, -100, 700, 300, 1200, 900, 0, 450];
//filtrar >0 && <= 1000
const validSales = sales.filter(sale => sale > 0 && sale <= 1000);
//map (aplicar descuento a todos los valores con map) 
const descuento = validSales.map(sale => sale * 0.9);
//Sumar
const totalSales = descuento.reduce((acc, sale) => acc + sale, 0);
//printar result
console.log("Ventas válidas: ", validSales);
console.log("Ventas con descuento: ", descuento);
console.log("Total de ventas después del descuento: ", totalSales);


//ex-2
const usernames: string[] = ["Raul", "Constantí", "Pol", "Maria", "Aitana", "Carles"];
//filtrar +5 char
const mayorUsernames = usernames.filter(name => name.length > 5);
//upperCase
const mayusUsernames = mayorUsernames.map(name => name.toUpperCase());
//reduce
const finalString = mayusUsernames.reduce((acc, name, index) => 
    acc + (index > 0 ? ", " : "") + name, ""
);
//printar result
console.log("Nombres filtrados mayores de 5 char: ", mayorUsernames);
console.log("Nombres en mayúsculas: ", mayusUsernames);
console.log("Cadena final: ", finalString);
