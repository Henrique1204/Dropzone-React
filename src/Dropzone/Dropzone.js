import React from 'react';
import estilos from './Dropzone.module.css';

const Dropzone = () => {
    return (
        <div className={estilos.Dropzone}>
            <button className={estilos.btnTrocar}>Trocar</button>
            <button className={estilos.btnFechar}></button>

            <img src="" alt="" className={estilos.preview} />
            <input type="file" name="arquivo" />
        </div>
    );
};

export default Dropzone;
