import React, { useEffect } from 'react';
import resume from '../assets/resume.pdf'
import PdfViewer from './PdfViewer'



export const Resume = () => {

    return (
        <div>
            <div>
            <PdfViewer pdf={resume}/>
            </div>
        </div>
    );
};