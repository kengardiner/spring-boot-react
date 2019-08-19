import React, { Component } from 'react';
import ListsCoursesComponent from "./ListsCoursesComponent";


class InstructorApp extends Component {
    render() {
        return (<>
            <h1>Instructor Application</h1>
            <ListsCoursesComponent/>
            </>
        )
    }
}

export default InstructorApp;
