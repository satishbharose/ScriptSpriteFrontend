import React, { Component } from 'react';
import '../assets/css/contactUs.css';

class AddCourseComponent extends Component {
    
    emptyItem = {
        name: '',
        description:''
    }

    constructor(props){
        super(props);
        this.state = {
            item: this.emptyItem
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    handleChange (event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        const description = target.description;
        let item  = {...this.state.item}
        item[name] = value;
        this.setState({item});
    };

    async handleSubmit (event) {
        event.preventDefault();
        const {item} = this.state;

        await fetch('/course' + (item.id ? '/' + item.id : ''), {
            method: (item.id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization':'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYW5rYWp3YWdoQGdtYWlsLmNvbSIsImlhdCI6MTcyMDA1NzUyOSwiZXhwIjoxNzIwMDYxMTI5fQ.EGkF0QJhEi71bVSX7ugCAjyJkKDSyebp7CO19pjl7bU'
            },
            body: JSON.stringify(item),
        });
        this.props.history.push('/course');
    };

    render() {
        const {item} = this.state;
        const title = <h2>{item.id ? 'Edit Course' : 'Add Course'}</h2>;
    return <div>
        <section className="contactus">
            <div className="login col-lg-4 m-auto shadow-lg">
                <form onSubmit={this.handleSubmit}>                    
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Course Name: <span className='red'>*</span>:</label>
                        <input
                            name="name"
                            id="name"
                            type="name"
                            placeholder="Name"
                            className="form-control"
                            value={item.name}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Course Description: <span className='red'>*</span>:</label>
                        <input
                            name="description"
                            id="description"
                            type="description"
                            placeholder="Description"
                            className="form-control"
                            value={item.description}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary col-lg-12">Save</button>
                </form>
            </div>
        </section>
        </div>
    }
};

export default AddCourseComponent;
