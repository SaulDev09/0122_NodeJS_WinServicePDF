"use strict";

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  lanzarSiempreALaHora(12, 42, tarea);
  res.send('<br><h3 align="center">Generador de PDF - Saul</h3></br>');
});

function tarea() {
  console.log("acá va la tarea", new Date());
}

function lanzarSiempreALaHora(hora, minutos, tarea) {
  var ahora = new Date();
  console.log("lanzado", ahora);
  var momento = new Date(
    ahora.getFullYear(),
    ahora.getMonth(),
    ahora.getDate(),
    hora,
    minutos
  );
  if (momento <= ahora) {
    // la hora era anterior a la hora actual, debo sumar un día
    momento = new Date(momento.getTime() + 1000 * 60 * 60 * 24);
  }
  console.log("para ser ejecutado en", momento);
  setTimeout(function () {
    tarea();
    lanzarSiempreALaHora(hora, minutos, tarea);
  }, momento.getTime() - ahora.getTime());
}

module.exports = router;
