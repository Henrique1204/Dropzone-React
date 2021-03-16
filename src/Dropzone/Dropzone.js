import React from 'react';
import estilos from './Dropzone.module.css';

const Dropzone = () => {
    return (
        <label className={estilos.Dropzone} htmlFor="arquivo">
            <button className={estilos.btnFechar}></button>

            <div className={estilos.preview}></div>
            <input type="file" name="arquivo" id="arquivo" />
        </label>
    );
};

export default Dropzone;
