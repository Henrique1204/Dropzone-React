import React from 'react';
import estilos from './Dropzone.module.css';
import dropzone_bg from './dropzone_bg.svg';

const Dropzone = () => {
    const [img, setImg] = React.useState('');

    const handleImgChange = ({target}) => {
        if (target.files[0]) {
            setImg({
                preview: URL.createObjectURL(target.files[0]),
                raw: target.files[0]
            });
        }
    };

    return (
        <label
            className={`${estilos.Dropzone} ${img.preview ? estilos.ativo : ''}`}
            htmlFor="arquivo"
            style={{backgroundImage: `url(${img.preview || dropzone_bg })`}}
        >
            <button
                className={`${estilos.btnFechar} ${img.preview ? estilos.ativo : ''}`}
                onClick={() => setImg('')}
            ></button>

            <div className={estilos.preview}></div>
            <input type="file" name="arquivo" id="arquivo" onChange={handleImgChange} />
        </label>
    );
};

export default Dropzone;
