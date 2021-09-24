import React from 'react';
import PropTypes from 'prop-types';

const Personaje = ({nombre, edad, nacionalidad, id,foto}) => (
    <>
        <div className="card col-md-4" >
            <div className="card-body">
                <h5 className="card-title">{ nombre }</h5>
                <p className="card-text">Edad: { edad }</p>
            
               
                <p className="card-text">Nacionalidad: { nacionalidad }</p>
                <p className="card-image">Foto: {  }</p>
                <img src={foto}/>
                <p><a href={`/personajes/${id}`}>Detalle</a></p>
            </div>
        </div>
    </>
);
Personaje.propTypes = {
    nombre: PropTypes.string,
    edad: PropTypes.number,

    nacionalidad: PropTypes.string,
   
  

}
Personaje.defaultProps = {
    nombre: "nombre no asignado",
    edad: 0
}
export default Personaje;