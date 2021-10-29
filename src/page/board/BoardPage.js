import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom';
import pako from 'pako';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Sidebar from '../../components/Sidebar'
import Modal from '../../components/Modal'
import { textEncode } from '../../helpers/helpers'
import { useSala } from '../../hooks/useSala';
import { apiDiagrama } from '../../api/apiDiagrama';
import socketContext from '../../context/socketContext';
import { useDiagrama } from '../../hooks/useDiagrama';

const BoardPage = () => {

    const history = useHistory();
    const { socket } = useContext(socketContext);
    const [showbar, setShowbar] = useState(false);
    const [typeModal, setTypeModal] = useState("load");
    const [typeDiagram, settypeDiagram] = useState("Container");
    const { executeDraw } = useDiagrama();
    const { sala, error, isAnfitrion, validate } = useSala();

    const [sourceDiagram, setsourceDiagram] = useState("");
    const [sourceRel, setSourceRel] = useState([]);

    const refImage = useRef();

    const HandleTypeModal = (type) => {
        setTypeModal(type);
    }

    const HandleTypeDiagram = (type) => {
        settypeDiagram(type);
    }


    const FinalizarRoom = async () => {

        const res = await apiDiagrama(`/sala/finalize/${sala._id}`);
        if (!res.ok) {
            console.log("Error no se pudo cerrar la sala");
            return;
        }
        // Finalizar sala
        socket.emit("finalizar-sala", { idSala: sala._id });
        history.replace('/');
    }

    const DrawDiagram = useCallback((element = "sdsd") => {

        let source = `@startuml\n!include C4_${typeDiagram}.puml\n`;

        //Es asincrono

        setsourceDiagram((sourceD) => {

            source += sourceD;

            source += element;
            source += "@enduml";

            let data = textEncode(source);
            let compressed = pako.deflate(data, { level: 9, to: 'string' });
            let result = btoa(compressed).replace(/\+/g, '-').replace(/\//g, '_');
            refImage.current.src = `https://kroki.io/plantuml/svg/${result}`;

            return sourceD + element
        });

    }, [typeDiagram]);

    useEffect(() => {

        if (refImage.current) {
            console.log("ref")
            DrawDiagram();
        }

    }, [DrawDiagram]);

    useEffect(() => {

        socket.on('solicitud-anfitrion', (args) => {
            const { idUser, message, idSala } = args;
            if (window.confirm(message)) {
                socket.emit('solicitud-aceptada', { idUser, idSala });
            } else {
                socket.emit('solicitud-denegada', { idUser, idSala });
            }
        });

        return () => {
            socket.removeAllListeners("solicitud-anfitrion");
        }

    }, [socket])

    useEffect(() => {

        (sala) && socket.emit('agregar-sala', { idSala: sala._id })

    }, [socket, sala]);


    useEffect(() => {

        socket.on('close-sala', (args) => {
            socket.emit('leave-sala', args);
            history.replace("/");
        });

        return () => {
            socket.removeAllListeners("close-sala");
        }

    }, [socket, history]);

    // DrawDiagram

    useEffect(() => {

        socket.on("draw-figure-sala", (args) => {

            console.log(args);
            const { element, params } = args
            DrawDiagram(executeDraw(element, params));

        });

        return () => {
            socket.removeAllListeners("close-sala");
        }

    }, [socket, executeDraw, DrawDiagram])


    if (validate) {
        return <h5 className='text-center'>Cargando !!!</h5>
    }

    if (error.length > 0) {
        return <h5 className='text-center'>{error}</h5>
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
                        {
                            (isAnfitrion)
                                ?
                                <>
                                    <button className='btn btn-primary mx-1'>Guardar</button>
                                    <button className='btn btn-danger mx-1'>Borrar</button>
                                    <button className='btn btn-success mx-1'>Imprimir</button>
                                    <button onClick={FinalizarRoom} className='btn btn-dark mx-1'>Finalizar reunion</button>
                                </>
                                : <button className='btn btn-success mx-1'>Imprimir</button>
                        }
                    </div>

                </section>

                <Modal type={typeModal} DrawDiagram={DrawDiagram} setSourceRel={setSourceRel} sourceRel={sourceRel} />

            </div>
        </>
    )
}

export default BoardPage
