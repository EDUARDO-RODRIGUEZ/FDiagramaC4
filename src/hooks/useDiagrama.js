import React from 'react'

export const useDiagrama = () => {

    const DrawContainer = (id, title, tecnologia, description) => {
        return `Container(${id},"${title}","${tecnologia}","${description}")\n`;
    }

    const DrawContainerDB = (id, title, tecnologia, description) => {
        return `ContainerDb(${id},"${title}","${tecnologia}","${description}")\n`;
    }

    const DrawSystemExtern = (id, title, description) => {
        return `System_Ext(${id},"${title}","${description}")\n`;
    }

    const DrawRelation = (startId, endId, tecnologia) => {
        return `Rel(${startId},${endId},"Uses","${tecnologia}")\n`;
    }

    const DrawPerson = (id, title, description) => {
        return `Person(${id},${title},"${description}")\n`;
    }

    return {
        DrawContainer,
        DrawContainerDB,
        DrawSystemExtern,
        DrawRelation,
        DrawPerson
    }

}
