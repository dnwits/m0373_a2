let list: number[] = [6,8,22];
/*console.log(list); //printar todo el array

list[1]=11; //cambiar valor
console.log("llista entera--> "+ list);
console.log("posició 3 --> "+ list[2]); //printar posición especificia
console.log("posició 7 --> "+ list[6]); //printar posición QUE NO EXISTE
list.push(13);//afegir valor
console.log("llista entera--> "+ list);
list.pop()
console.log("pop quita el ultimo de la llista--> "+ list);

//printar cada elemento del array por separado
for(const numero of list){
    console.log(numero); 
}*/
//MAP
console.log(list);
const ys: number[] = []
for (const x of list) {
    ys.push(x * 2)
}
console.log(ys) // [ 16, 18, 8, 10, 12 ]

//FILTER
const xs: number[] = [8, 9, 4, 5, 6]

    const nou: number[] = []
    for (const x of xs) {
        if (x > 5)
            nou.push(x)
    }

    console.log(nou) // [ 8, 9, 6 ]

//REDUCE
console.log(list);
let sumTotal=0;
for(const numeSingular of list){
    sumTotal+=numeSingular;
}
console.log(sumTotal);

//funcio reduce
const array_nou: number[] = [8, 9, 4, 5, 6]
const sum = array_nou.reduce((acc, x) => acc + x, 0) // acc: accumulator
console.log(array_nou)
console.log(sum) // 32