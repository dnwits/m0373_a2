import Ajv from "ajv"

const productSchema2 = {
    type: "object",
    properties: {
        id: { type: "integer" },
        name: { type: "string" }
    },
    required: ["id", "name"]
}

const ajv = new Ajv()
const validateProduct = ajv.compile(productSchema2)
//validate product es l'obj que validarà els jsons
//basandose en el schema proporcionat ara
// function validar(product:typeof productSchema2) {
//     if (validateProduct(product)){
//         console.log("objecte valid :3")
//     } else {
//         console.log("no valid...")
//     }
// }
//comprovació TRUE
const apple = {"id":1, "name":"apple"}
if (validateProduct(apple)){
    console.log("objecte valid :3")
} else {
    console.log("no valid...")
}
//comprovació FALSE
const watermelon = {"id":1, "nick":"watermelon"}
if (validateProduct(watermelon)){
    console.log("objecte valid :3")
} else {
    console.log("no valid...")
}
//comprovació FALSE por id tipo str y no int
const cherry = {"id":"3", "nick":"cherry"}
if (validateProduct(cherry)){
    console.log("objecte valid :3")
} else {
    console.log("no valid...")
}
//comprovació TRUE campo añadido (funciona ya que tiene los requeridos)
const banana = {"id":4, "name":"banana","description":"de Canarias c:"}
if (validateProduct(banana)){
    console.log("objecte valid :3")
} else {
    console.log("no valid...")
}