import React from 'react'
import { useDiagrama } from '../hooks/useDiagrama';
import { FormContainer } from './FormContainer';
import { FormContainerDB } from './FormContainerDB';
import FormPerson from './FormPerson';
import { FormSystemExtern } from './FormSystemExtern';

const Modal = (props) => {

    const { type, DrawDiagram } = props;

    return (
        <div className="modal fade" id="modal-create" aria-hidden="true">

            <div className="modal-dialog">

                <div className="modal-content">

                    <div className="modal-header">
                        <h5 className="modal-title">Modal {type}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div className="modal-body">
                        <RenderSwitch type={type} DrawDiagram={DrawDiagram} />
                    </div>

                </div>

            </div>
        </div>
    )
}

const RenderSwitch = (props) => {

    const { DrawContainer, DrawContainerDB, DrawSystemExtern, DrawPerson } = useDiagrama();

    const { type, DrawDiagram } = props;


    switch (type) {
        case "load":
            return <div className='text-center'><span className="text-center spinner-border text-primary" /></div>;

        case "person":
            return <FormPerson DrawPerson={DrawPerson} DrawDiagram={DrawDiagram} />;

        case "container":
            return <FormContainer DrawContainer={DrawContainer} DrawDiagram={DrawDiagram} />;

        case "system_extern":
            return <FormSystemEtern DrawSystemExtern={DrawSystemExtern} DrawDiagram={DrawDiagram} />

        case "containerDB":
            return <FormContainerDB DrawContainerDB={DrawContainerDB} DrawDiagram={DrawDiagram} />

        default:
            return <small>error</small>;
    }
}

export default Modal
