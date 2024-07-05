import axios from 'axios';

const COURSE_API_BASE_URL = "http://localhost:8080/course";

class CourseService {

createCourse(course){
    console.log('message from create course service');
    //const headers = {
      //  'Content-Type': 'application/json',
       // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYW5rYWp3YWdoQGdtYWlsLmNvbSIsImlhdCI6MTcxOTc5OTIxMSwiZXhwIjoxNzE5ODAyODExfQ.rTCzFuiJrssUSTH379wU-H1IKvkz0-5e8UgC0RuOjBs'
    //}
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYW5rYWp3YWdoQGdtYWlsLmNvbSIsImlhdCI6MTcxOTc5OTQ0OSwiZXhwIjoxNzE5ODAzMDQ5fQ.NMYJjfzZ_9quRyo0665w-SfvlB4aDbAPFZaT14EjoYA';
    return axios.post(COURSE_API_BASE_URL, course, {
        headers: {Authorization: token && `Bearer ${ token }`}
}       );
    }
}

export default CourseService;