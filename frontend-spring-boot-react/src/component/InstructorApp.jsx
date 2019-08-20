import React, { Component } from 'react';
import ListsCoursesComponent from "./ListsCoursesComponent";
// import Router from "react-router-dom/es/Router";
import {Switch} from "react-router-dom";
import {Route} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import CourseComponent from "./CourseComponent";


class InstructorApp extends Component {
    render() {
        return (
            <BrowserRouter>
                <>
                    <h1>Instructor Application</h1>
                    <Switch>
                        <Route path="/" exact component={ListsCoursesComponent} />
                        <Route path="/courses" exact component={ListsCoursesComponent} />
                        <Route path="/courses/:id" component={CourseComponent} />
                    </Switch>
                </>
            </BrowserRouter>
        )
    }
}

export default InstructorApp;
