/* Munú con platos para armar */
function armarPlato() {
  let respuesta = prompt("¿Desea armar su propio plato? (S/N)");

  if (respuesta.toUpperCase() === "S") {
    let proteina = prompt("Elija una proteína (animal/vegetal)");
    let costo = 0;
    if (proteina.toUpperCase() === "ANIMAL") {
      costo += 150;
    } else if (proteina.toUpperCase() === "VEGETAL") {
      costo += 100;
    }

    let guarnicion = prompt("¿Desea agregar guarnición? (S/N)");
    if (guarnicion.toUpperCase() === "S") {
      costo += 50;
    }

    let bebida = prompt("¿Desea agregar una bebida? (S/N)");
    if (bebida.toUpperCase() === "S") {
      costo += 30;
    }

    alert(`El costo de este menu es $${costo}. Quieres agregarlo a tu pedido?`);
  } else {
    alert("¡Elija uno de nuestros bowls ya armados!");
  }
}

armarPlato();

/* Munú con platos para elegir */
let platos = [
  { nombre: "Pollo a la plancha", costo: 150 },
  { nombre: "Ensalada de quinoa", costo: 100 },
  { nombre: "Hamburguesa vegetariana", costo: 120 },
  { nombre: "Salmón a la parrilla", costo: 180 },
  { nombre: "Wrap de vegetales", costo: 90 },
];

for (let i = 0; i < platos.length; i++) {
  let respuesta = prompt(`¿Le gusta el plato ${platos[i].nombre}? (S/N)`);

  if (respuesta.toUpperCase() === "S") {
    alert(`¡Genial! El costo de este plato es de $${platos[i].costo}.`);
  } else {
    alert(`¡Qué lástima! Pero tenemos otras opciones.`);
  }
}

alert("Estos son todos los platos de la semana. ¡Gracias por visitarnos!");

/* Munú libre elegido por el cliente */
for (let dia = 1; dia <= 5; dia++) {
  let comida = prompt("Ingrese un plato");
  alert(`Día ${dia} Menú: ${comida}`);
}

alert("Listo! Completaste el menu de la semana.");
