import React, { useState, useEffect } from 'react';
import SoftAlert from './SoftAlert';
import '../assets/css/courseBox.css';

const CourseBoxComponent = ({ imgName, alternateName, description, pdfName, val }) => {
    const [imageSrc, setImageSrc] = useState(null);
    const [showAlert, setShowAlert] = useState(false);
    const [pdfSrc, setPdfSrc] = useState(null);

    const handleShowAlert = () => {
        setShowAlert(true);
        // Automatically hide the alert after 2 seconds
        setTimeout(() => {
            setShowAlert(false);
        }, 2000);
    };

    useEffect(() => {
        // Dynamically import the image based on the provided path
        import(`../assets/images/LangLogos/${imgName}`).then(image => {
            setImageSrc(image.default);
        }).catch(error => {
            console.error("Failed to load image:", error);
        });

        if (pdfName && pdfName !== '#') {
            // Dynamically import the PDF based on the provided path
            import(`../assets/SyllabusPdfs/${pdfName}`).then(pdf => {
                setPdfSrc(pdf.default);
            }).catch(error => {
                console.error("Failed to load PDF:", error);
            });
        }
    }, [imgName, pdfName]);

    const handleButtonClick = () => {
        if (pdfName === '#') {
            handleShowAlert();
        } else {
            // Handle the button click action here, e.g., open PDF
            window.open(pdfSrc, '_blank');
        }
    };

    return (
        <>
            <div className="col-lg-3 mb-5">
                <div className="box">
                    <img src={imageSrc} width="100%" alt={alternateName} />
                    <h4 className="mt-2">{alternateName}</h4>
                    <h7 className="mt-2 description">{description}</h7>
                    {pdfName === '#' ? (
                        <button onClick={handleButtonClick} className="btn btn-primary btn-lg mt-2">{val}</button>
                    ) : (
                        <a href={pdfSrc} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg mt-2">{val}</a>
                    )}
                </div>
            </div>
            {showAlert && <SoftAlert message="Work In Progress! Please try again later." />}
        </>
    );
};

export default CourseBoxComponent;
