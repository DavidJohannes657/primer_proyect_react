import React from "react";
import { Link } from "react-router-dom";

const personajes = [
    {
       
        "id": 1,
        "nacionalidad" : "estadounidense ",
        "nombre" : "Rick Sanchez",
        "edad" : 70,
        "especialidad" : "Crear materia oscura concentrada , beber, tener sexo con planetas",
    },
    {
        "id": 2,
        "nacionalidad" : "estadounidense ",
        "nombre" : "Kenny McCormick",
        "edad" : 10,
        "especialidad" : "Inmortalidad,aveces el enemigo de Cartman,estudiante",
    },
    {
        "id": 3,
        "nacionalidad" : "estadounidense ",
        "nombre" : "Kyle Broflovski",
        "edad" : 9,
        "especialidad" : "Inteligencia,estudiante, enemigo de Cartman",
       },
    {
        "id": 4,
        "nacionalidad" : "estadounidense ",
        "nombre" : "Stan Marsh",
        "edad" : 10,
        "especialidad" : "Mejor amigo de Kyle",
    },
    {
        "id": 5,
        "nacionalidad" : "estadounidense ",
        "nombre" : "Chef",
        "edad" : 40,
        "especialidad" : "Mcocinero de la primaria de South Park. Fue hijo de Thomas y Nellie Mc Elroy quienes viven en Escocia, quienes aparecen por primera vez en el episodio de El Súcubo",
     },
    {
        "id": 6,
        "nacionalidad" : "estadounidense ",
        "nombre" : "Token Black",
        "edad" : 3,
        "especialidad" : " es el único niño de raza negra en la clase de los protagonistas. Cartman fue preso por acto de odio después de arrojarle una piedra en la cabeza. Además de ser el único chico negro, también es considerablemente más adinerado que sus compañeros de clase",
    },
    {
        "id": 7,
        "nacionalidad" : "estadounidense ",
        "nombre" : "Toallin",
        "edad" : 7,
        "especialidad" : "Dar mal ejemplo",
          },
]



const DetallePersonaje= ({match, location, history}) => {

    console.log(history)

    let personaje = personajes.filter(c => c.id === parseInt(match.params.id))[0]

    return (
        <>
            {
                personaje ? (
                    <div className="card col-md-4" >
                        <div className="card-body">
                            <h5 className="card-title">{ personaje.nombre }</h5>
                            <p className="card-text">Edad: { personaje.edad }</p>
                            <p className="card-text">Especialidad: { personaje.especialidad }</p>
                            <p className="card-text">Nacionalidad: { personaje.nacionalidad }</p>
                        </div>
                    </div>
                ):
                <h1>Personaje no encontrado</h1>
            }

            <Link to={`/personajes`}>Ver Todos</Link>
        </>
    )
};

export default DetallePersonaje;