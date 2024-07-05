import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';

class AdminCourseList extends Component {

    constructor(props) {
        super(props);
        this.state = {courses: []};
        this.remove = this.remove.bind(this);
    }

    async componentDidMount() {
        //fetch('/course')
            //.headers
            //.then(response => response.json())
            //.then(data => this.setState({clients: data}));
            await fetch('/course', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization':'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYW5rYWp3YWdoQGdtYWlsLmNvbSIsImlhdCI6MTcyMDE0NTg5MSwiZXhwIjoxNzIwMTQ5NDkxfQ.L67Qiao-BO_sOr9Nd_OUKRQaIrSz-K7HDNHX8YvvYoE'
                }
            })
            .then(response => response.json())
            .then(data => this.setState({courses: data}));    
    }

    async remove(id) {
        await fetch(`/course/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization':'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYW5rYWp3YWdoQGdtYWlsLmNvbSIsImlhdCI6MTcyMDE0NTg5MSwiZXhwIjoxNzIwMTQ5NDkxfQ.L67Qiao-BO_sOr9Nd_OUKRQaIrSz-K7HDNHX8YvvYoE'
            }
        }).then(() => {
            let updatedcourses = [...this.state.courses].filter(i => i.id !== id);
            this.setState({courses: updatedcourses});
        });
    }

    render() {
        const {courses} = this.state;

        const courseList = courses.map(course => {
            return <tr key={course.id}>
                <td style={{whiteSpace: 'nowrap'}}>{course.name}</td>
                <td>{course.description}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={"/course/" + course.id}>Edit</Button>
                        <Button size="sm" color="danger" onClick={() => this.remove(course.id)}>Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <div className="float-right">
                        <Button color="success" tag={Link} to="/courses/new">Add course</Button>
                    </div>
                    <h3>courses</h3>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="30%">Name</th>
                            <th width="30%">Description</th>
                            <th width="40%">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {courseList}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}

export default AdminCourseList;