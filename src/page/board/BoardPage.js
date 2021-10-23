import React, { useEffect, useRef, useState } from 'react'
import pako from 'pako';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Sidebar from '../../components/Sidebar'
import Modal from '../../components/Modal'
import { textEncode } from '../../helpers/helpers'

const BoardPage = () => {

    const [showbar, setShowbar] = useState(false);
    const [typeModal, setTypeModal] = useState("load");
    const [typeDiagram, settypeDiagram] = useState("Container");

    const [sourceDiagram, setsourceDiagram] = useState("");

    const refImage = useRef(null);

    const HandleTypeModal = (type) => {
        setTypeModal(type);
    }

    const HandleTypeDiagram = (type) => {
        settypeDiagram(type);
    }

    useEffect(() => {

        if (refImage.current) {
            DrawDiagram();
        }

    }, []);

    const DrawDiagram = (element = "") => {

        let source = `@startuml\n!include C4_${typeDiagram}.puml\n`;
        source += sourceDiagram;
        source += element;
        source += "@enduml";

        setsourceDiagram(sourceDiagram + element);

        console.log(source);

        let data = textEncode(source);
        let compressed = pako.deflate(data, { level: 9, to: 'string' });
        let result = btoa(compressed).replace(/\+/g, '-').replace(/\//g, '_');
        refImage.current.src = `https://kroki.io/plantuml/svg/${result}`;
    }

    return (

        <>
            <Sidebar
                show={showbar}
                HandleTypeModal={HandleTypeModal}
                HandleTypeDiagram={HandleTypeDiagram}
            />

            <div className='container-fluid'>

                <header className='row border'>
                    <div className='col-md-11'>
                        <h2 className='text-center'>C4 Diagramas</h2>
                    </div>
                    <div className='col-md-1 text-center my-auto'>
                        <FontAwesomeIcon
                            icon={faBars}
                            className='pointer'
                            onClick={() => setShowbar(!showbar)}
                        />
                    </div>
                </header>

                <section className='row mt-3'>

                    <div className='col-12 col-md-10 mx-auto shadow board text-center'>
                        <img ref={refImage} src={"x"} alt={"C4 diagramas"} />
                    </div>

                    <div className='col-12 col-md-10 mx-auto p-2'>
                        <button className='btn btn-primary mx-1'>Guardar</button>
                        <button className='btn btn-danger mx-1'>Borrar</button>
                        <button className='btn btn-success mx-1'>Imprimir</button>
                        <button className='btn btn-dark mx-1'>Finalizar reunion</button>
                    </div>

                </section>

                <Modal type={typeModal} DrawDiagram={DrawDiagram} />

            </div>
        </>
    )
}

export default BoardPage
