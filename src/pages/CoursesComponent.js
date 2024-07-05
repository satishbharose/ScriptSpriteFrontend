import React from 'react';
import CourseBoxComponent from "../components/CourseBoxComponent";
import '../assets/css/course.css';

const CourseComponent = () => {
    const courses = [
        {'id':1, 'name':'Learn Angular', 'description':'Angular lets you start small and supports you as your team and apps grow. Read how Angular helps you grow. Loved by ...', 'image':'Angular.jpg', 'buttonVal':'Click Here for Syllabus', 'pdf':'Angular_4Syllabus.pdf'},
        {'id':2, 'name':'Learn Typescript', 'description':'TypeScript extends JavaScript by adding types to the language. TypeScript speeds up your development experience by catching errors and providing fixes ...', 'image':'TypeScript.jpg', 'buttonVal':'Click Here for Syllabus', 'pdf':'Typescript_with_Angular4Syllabus.pdf'},
        {'id':3, 'name':'Learn Nodejs', 'description':'Node.js® is a JavaScript runtime built on Chromes V8 JavaScript engine.', 'image':'NodeJs.jpg', 'buttonVal':'Click Here for Syllabus', 'pdf':'NodeJSSyllabus.pdf'},
        {'id':4, 'name':'Learn Reactjs', 'description':'React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.', 'image':'React.jpg', 'buttonVal':'Click Here for Syllabus', 'pdf':'ReactJSSyllabus.pdf'},
        {'id':5, 'name':'Learn Java', 'description':'Java is an object oriented language and some concepts may be new. Take breaks when needed, and go over the examples as many times as needed.', 'image':'Java.jpg', 'buttonVal':'Click Here for Syllabus', 'pdf':'Syllabus_Core_Java_and_Advanced_Java.pdf'}
    ];

    const webTechnology = [
        {'id':1, 'name':'Learn HTML', 'description':'HyperText Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It defines the content and ...', 'image':'HTML.jpg', 'buttonVal':'Click Here for Syllabus', 'pdf':'#'},
        {'id':2, 'name':'Learn CSS', 'description':'Cascading Style Sheets (CSS) is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML ...', 'image':'CSS.jpg', 'buttonVal':'Click Here for Syllabus', 'pdf':'#'},
        {'id':3, 'name':'Learn JavaScript', 'description':'JavaScript, often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS. 99% of websites use JavaScript on the client side for webpage behavior. Web browsers have a dedicated JavaScript engine that executes the client code.', 'image':'JavaScript.jpg', 'buttonVal':'Click Here for Syllabus', 'pdf':'NodeJSSyllabus.pdf'},
        {'id':4, 'name':'Learn JQuery', 'description':'jQuery is a JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animations, and Ajax. It is free, open-source software using the permissive MIT License. As of August 2022, jQuery is used by 77% of the 10 million most popular websites. ', 'image':'jQuery.jpg', 'buttonVal':'Click Here for Syllabus', 'pdf':'#'},
        {'id':5, 'name':'Learn XML', 'description':'Extensible Markup Language is a markup language and file format for storing, transmitting, and reconstructing arbitrary data. It defines a set of rules for encoding documents in a format that is both human-readable and machine-readable', 'image':'XML.jpg', 'buttonVal':'Click Here for Syllabus', 'pdf':'#'},
        {'id':6, 'name':'Learn JSON', 'description':'JSON is an open standard file format and data interchange format that uses human-readable text to store and transmit data objects consisting of attribute–value pairs and arrays. It is a commonly used data format with diverse uses in electronic data interchange, including that of web applications with servers.', 'image':'JSON.png', 'buttonVal':'Click Here for Syllabus', 'pdf':'#'}
    ];

    return (
        <section className="course">
            <div className="container">
                <h1 className="text-center">All Courses</h1>

                <h6>Backend</h6>
                <div className="row mt-5">
                    {courses.map(cs => (
                        <CourseBoxComponent
                            key={cs.id}
                            imgName={cs.image}
                            alternateName={cs.name}
                            description={cs.description}
                            pdfName={cs.pdf}
                            val={cs.buttonVal}
                        />
                    ))}
                </div>

                <h6>Web Technology</h6>
                <div className="row mt-5">
                    {webTechnology.map(cs => (
                        <CourseBoxComponent
                            key={cs.id}
                            imgName={cs.image}
                            alternateName={cs.name}
                            description={cs.description}
                            pdfName={cs.pdf}
                            val={cs.buttonVal}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CourseComponent;
