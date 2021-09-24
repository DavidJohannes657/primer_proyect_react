import React from 'react';
import Personaje from '../Molecule/Personaje';

const personajes = [
    {
       
        "id": 1,
        "nacionalidad" : "estadounidense ",
        "nombre" : "Rick Sanchez",
        "edad" : 70,
        "especialidad" : "Crear materia oscura concentrada , beber , tener sexo con planetas",
        "foto":"https://c.tenor.com/27z5sSUSBIcAAAAC/rick-and-morty-rick-sanchez.gif"
    },
    {
        "id": 2,
        "nacionalidad" : "estadounidense ",
        "nombre" : "Morty Smith ",
        "edad" : 14,
        "especialidad" : "Acompañar a rick a aventuras, pensar en jessica,cubrir a rick ",
        "foto":"https://giffiles.alphacoders.com/157/157548.gif"
    },
    {
        "id": 3,
        "nacionalidad" : "estadounidense ",
        "nombre" : "Beth Smith",
        "edad" : 34,
        "especialidad" : "Beber vino, tener un mal matrimonio,amar a su padre aunque  la abandone",
        "foto":"https://i.imgur.com/pUVtIqL.gif"
       },
    {
        "id": 4,
        "nacionalidad" : "estadounidense ",
        "nombre" : "Jerry Smith",
        "edad" : 30,
        "especialidad" : "Ser un perdedor , dar lastima",
        "foto":"https://c.tenor.com/CBddt1prBAwAAAAC/rick-and-morty-jerry-smith.gif"
    },
    {
        "id": 5,
        "nacionalidad" : "extraterrestre ",
        "nombre" : "squanchy",
        "edad" : 56,
        "especialidad" : "squanchiar",
        "foto":"https://c.tenor.com/SSrXaDImRawAAAAM/rick-and.gif"
     },
    {
        "id": 6,
        "nacionalidad" : "estadounidense ",
        "nombre" : "Summer Smith",
        "edad" : 3,
        "especialidad" : " probar drogas espaciales, enamorarse de todos, estar en el celular ",
        "foto":"https://i.gifer.com/origin/fc/fca5d4a3d64fdd36beb0ba981a7468da_w200.gif"
    },
    {
        "id": 7,
        "nacionalidad" : "bird planet ",
        "nombre" : "Hombre pajaro",
        "edad" : 40,
        "especialidad" : "Enamorarse de Tammy , ser mejor amigo se rick, peler por la galaxia con rick ",
        "foto": "https://c.tenor.com/TX7L_ShLu3AAAAAC/bird-person-ricknd-morty.gif"
    },
]

const Contenedor = () =>(
    <>
        {
          
            personajes.map( c => <Personaje nombre={ c.nombre } edad={c.edad} especialidad={ c.especialidad} id ={c.id} nacionalidad={c.nacionalidad} foto={c.foto} /> )
        }
    </>
);

export default Contenedor;