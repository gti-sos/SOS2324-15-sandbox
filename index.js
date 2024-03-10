//let cool = require("cool-ascii-faces");
let express = require("express");

let app = express();

const PORT = 10000;

app.get("/", (req,res) => {
    res.send("<html><body><h1> Hola Mundo!</h1></body></html>");
});

app.listen(10000);

console.log(`Server listening on port ${PORT}.`);

//Oscar Garcia

function calcularMediaMathScore(datos) {
    const valorNumerico = 'math_score';
    const repeticionesPorPais = datos.reduce((acc, fila) => {
      acc[fila.country] = (acc[fila.country] || 0) + 1;
      return acc;
    }, {});
    const paisesRepetidos = Object.keys(repeticionesPorPais).filter((pais) => repeticionesPorPais[pais] >= 2);
    const sumasYRecuentosPorPais = {};
    paisesRepetidos.forEach((pais) => {
      const filasFiltradas = datos.filter((fila) => fila.country === pais);
      sumasYRecuentosPorPais[pais] = filasFiltradas.reduce((acc, fila) => {
        acc.suma = (acc.suma || 0) + fila.math_score;
        acc.recuento = (acc.recuento || 0) + 1;
        return acc;
      }, {});
    });
    const totalSumaRecuento = Object.values(sumasYRecuentosPorPais).reduce((acc, { suma, recuento }) => {
      acc.suma += suma;
      acc.recuento += recuento;
      return acc;
    }, { suma: 0, recuento: 0 });
    const media = totalSumaRecuento.suma / totalSumaRecuento.recuento;
    return media;
  };


//Marta Fernández Carmona

function calcularMediaHorasEstudio(datos) {
  const paisesRepetidos = datos.reduce((acc, dato) => {
    if (acc[dato.country]) {
      acc[dato.country]++;
    } else {
      acc[dato.country] = 1;
    }
    return acc;
  }, {});
  
  const paisesConMasDeUnaAparicion = Object.keys(paisesRepetidos).filter(pais => paisesRepetidos[pais] > 1);
  
  // Calcular la media de las horas de estudio para los países seleccionados
  const horasDeEstudio = paisesConMasDeUnaAparicion.map(pais => {
    const filasFiltradas = datos.filter((fila) => fila.country === pais);
    const horasEstudio = filasFiltradas.map((fila) => fila.weekly_study_hours);
    const mediaHorasEstudio = horasEstudio.reduce((acc, valor) => acc + valor, 0) / horasEstudio.length;
    return { pais, mediaHorasEstudio };
  });

  return horasDeEstudio.map(resultado => `<p>País: ${resultado.pais}, Media de horas de estudio: ${resultado.mediaHorasEstudio}</p>`).join('');
};




// Sergio Kenzo Cortés González

function calculaActFisicaPorPais(datos){

  const valorNumerico = 'physical_activity_level'
  const resultadosPorPais = {};

  // Obtén la cuenta de repeticiones de cada país
  const repeticionesPorPais = datos.reduce((acc, fila) => {
    acc[fila.country] = (acc[fila.country] || 0) + 1;
    return acc;
  }, {});

  // Filtra los países que se repiten dos veces o más
  const paisesRepetidos = Object.keys(repeticionesPorPais).filter((pais) => repeticionesPorPais[pais] >= 2);

  // Inicializa un objeto para almacenar las sumas y recuentos de valores numéricos por país
  const sumasYRecuentosPorPais = {};

  // Calcula la suma y recuento de valores numéricos para cada país repetido
  paisesRepetidos.forEach((pais) => {
    const filasFiltradas = datos.filter((fila) => fila.country === pais);
    const suma = filasFiltradas.reduce((acc, fila) => acc + fila[valorNumerico], 0);
    const recuento = filasFiltradas.length;
    const media = suma / recuento;

    resultadosPorPais[pais] = {
      media,
      recuento,
    };
  });

  return resultadosPorPais;
}