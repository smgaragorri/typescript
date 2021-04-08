import { Telefono } from "./Telefono"
import { Mail } from "./Mail"
import { Direccion } from "./Direccion"
import { Persona } from "./Persona"

function imprimirPersonas(personasArray: Array<Persona>): void {
    for (const persona of personasArray) {
        console.log(`----- Imprimiendo ${persona.getNombre()} -----`);
        console.log(persona.toString());
    }
}

// declaramos un array vacío de clase persona
let personasArray: Array<Persona> = [];

// Creamos 3 registros de Persona
let persona1 = new Persona('Juan', 'Martín', 29, '02298522G', new Date("1992-01-16"), 'azul', 'hombre', [new Direccion('Pícara Molinera', 18, 3, 'B', 28041, 'Madrid', 'Madrid')], [new Mail('personal', 'juan_martin@gmail.com')], [new Telefono('móvil', 686785142)]);
let persona2 = new Persona('Marta', 'Acedo', 32, '02345522S', new Date("1988-08-21"), 'rojo', 'mujer', [new Direccion('Eduardo Barreiros', 63, 5, 'C', 28041, 'Madrid', 'Madrid')], [new Mail('personal', 'marta_acedo@gmail.com')], [new Telefono('móvil', 686356595)]);
let persona3 = new Persona('Elena', 'Veiga', 58, '02235897P', new Date("1963-02-07"), 'negro', 'mujer', [new Direccion('Verbena de la Paloma', 12, 2, 'A', 28041, 'Madrid', 'Madrid')], [new Mail('personal', 'elena_veiga.com')], [new Telefono('móvil', 675842315)]);

// guardamos los registros de persona en el array persona
personasArray.push(persona1, persona2, persona3);

// recorremos el array para consolear cada persona
imprimirPersonas(personasArray);

// Buscamos un persona por su DNI para añadirle una dirección, un teléfono y un email. Vamos a buscar la persona con DNI 02345522S
personasArray.filter(persona => persona.getDni() === '02345522S')
    .map((persona) => {
        persona.addDireccion(new Direccion('Padul', 14, 3, 'B', 28041, 'Madrid', 'Madrid'));
        persona.addMail(new Mail('trabajo', 'marta.acedo2@gmail.com'));
        persona.addTelefono(new Telefono('fijo', 923280697));
        persona.addTelefono(new Telefono('trabajo', 654238974));
        persona.setNotas(['La dirección de la Calle Padul corresponde a su puesto de trabajo']);
    });

// Recorremos de nuevo el array para consolear cada persona. 
// Esta vez, la persona correspondiente al DNI buscado anteriormente, se consolea con los nuevos datos añadidos
imprimirPersonas(personasArray);