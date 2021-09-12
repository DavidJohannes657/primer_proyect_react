import React from 'react';
import Estudiante from './Estudiante';
import Formulario from './Formulario';

const estudiantes = [
    {
        "edad" : 23,
        "genero" : "F"
    },
    {
        "nombre" : "juan",
        "edad" : 22,
        "genero" : "M"
    },
    {
        "nombre" : "juana",
        "edad" : 13,
        "genero" : "F"
    },
    {
        "nombre" : "mario",
        "edad" : 10,
        "genero" : "M"
    },
    {
        "nombre" : "luis",
        "edad" : 89,
        "genero" : "M"
    },
    {
        "nombre" : "cris",
        "edad" : 3,
        "genero" : "F"
    },
    {
        "nombre" : "paola",
        "edad" : 18,
        "genero" : "F"
    },
]

const Contenedor = () =>(
    <>
        {
             estudiantes.map( c => <Estudiante nombre={ c.nombre } edad={c.edad} genero={ c.genero} /> )
        }

        <Formulario/>
    </>
);

export default Contenedor;