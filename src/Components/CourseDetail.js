import axios from 'axios';
import React from 'react';
import { useParams, browserHistory } from 'react-router-dom';

const CourseDetail = props => {
    let course = props.courseData
    let materials = course.materialsNeeded
    let splitMaterials;
    let { id } = useParams();
    console.log(id)
    function splitter () {
        if(materials) {
            splitMaterials = course.materialsNeeded.split('*')
        } else {
            splitMaterials = [ 'None']
        }
    }
    splitter()
    console.log(course)
    const deleteCourse = () => {
        axios
            .delete(`http://localhost:5000/api/courses/${id}`)
            .then(() => console.log('Course Deleted'))
            .then(() => {(window.location='/')})
            .catch(err => {
                console.error(err)
            // .finally(window.location='/')
            })
    }
    return (
        <>
        <div className="actions--bar">
            <div className="wrap">
                <a className="button" href={`${course.id}/update`}>Update Course</a>
                <a className="button" onClick={deleteCourse}>Delete Course</a>
                <a className="button button-secondary" href="/">Return to List</a>
            </div>
        </div>
        <div className="wrap">
            <h2>Course Detail</h2>
            <form>
                <div className="main--flex">
                    <div>
                        <h3 className="course--detail--title">Course</h3>
                        <h4 className="course--name">{course.title}</h4>
                        <p>By {course.User.firstName} {course.User.lastName}</p>

                        <p>{course.description}</p>
                    </div>
                
            
                    <div>
                        <h3 className="course--detail--title">Estimated Time</h3>
                        <p>{course.estimatedTime}</p>

                        <h3 className="course--detail--title">Materials Needed</h3>
                        <ul className="course--detail--list">
                            {splitMaterials.map((index, material) => <li key={index}>{material}</li>)}
                        </ul>
                    </div>
                </div>
            </form>
        </div>
        </>
    )
}

export default CourseDetail;