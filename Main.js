"use strict";
exports.__esModule = true;
var Telefono_1 = require("./Telefono");
var Mail_1 = require("./Mail");
var Direccion_1 = require("./Direccion");
var Persona_1 = require("./Persona");
function imprimirPersonas(personasArray) {
    for (var _i = 0, personasArray_1 = personasArray; _i < personasArray_1.length; _i++) {
        var persona = personasArray_1[_i];
        console.log("----- Imprimiendo " + persona.getNombre() + " -----");
        console.log(persona.toString());
    }
}
// declaramos un array vacío de clase persona
var personasArray = [];
// Creamos 3 registros de Persona
var persona1 = new Persona_1.Persona('Juan', 'Martín', 29, '02298522G', new Date("1992-01-16"), 'azul', 'hombre', [new Direccion_1.Direccion('Pícara Molinera', 18, 3, 'B', 28041, 'Madrid', 'Madrid')], [new Mail_1.Mail('personal', 'juan_martin@gmail.com')], [new Telefono_1.Telefono('móvil', 686785142)]);
var persona2 = new Persona_1.Persona('Marta', 'Acedo', 32, '02345522S', new Date("1988-08-21"), 'rojo', 'mujer', [new Direccion_1.Direccion('Eduardo Barreiros', 63, 5, 'C', 28041, 'Madrid', 'Madrid')], [new Mail_1.Mail('personal', 'marta_acedo@gmail.com')], [new Telefono_1.Telefono('móvil', 686356595)]);
var persona3 = new Persona_1.Persona('Elena', 'Veiga', 58, '02235897P', new Date("1963-02-07"), 'negro', 'mujer', [new Direccion_1.Direccion('Verbena de la Paloma', 12, 2, 'A', 28041, 'Madrid', 'Madrid')], [new Mail_1.Mail('personal', 'elena_veiga.com')], [new Telefono_1.Telefono('móvil', 675842315)]);
// guardamos los registros de persona en el array persona
personasArray.push(persona1, persona2, persona3);
// recorremos el array para consolear cada persona
imprimirPersonas(personasArray);
// Buscamos un persona por su DNI para añadirle una dirección, un teléfono y un email. Vamos a buscar la persona con DNI 02345522S
personasArray.filter(function (persona) { return persona.getDni() === '02345522S'; })
    .map(function (persona) {
    persona.addDireccion(new Direccion_1.Direccion('Padul', 14, 3, 'B', 28041, 'Madrid', 'Madrid'));
    persona.addMail(new Mail_1.Mail('trabajo', 'marta.acedo2@gmail.com'));
    persona.addTelefono(new Telefono_1.Telefono('fijo', 923280697));
    persona.addTelefono(new Telefono_1.Telefono('trabajo', 654238974));
    persona.setNotas(['La dirección de la Calle Padul corresponde a su puesto de trabajo']);
});
// Recorremos de nuevo el array para consolear cada persona. 
// Esta vez, la persona correspondiente al DNI buscado anteriormente, se consolea con los nuevos datos añadidos
imprimirPersonas(personasArray);
