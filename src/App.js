import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import GetCourses from './Components/GetCourses';
import Header from './Components/Header';
import GetOneCourse from './Components/GetOneCourse';
import CreateCourse from './Components/CreateCourse';
import UpdateCourse from './Components/UpdateCourse';
import UserSignUp from './Components/UserSignUp';

function App() {
  return (
    <>
      <Header />
      <main>
          <Switch>
            <Route exact path="/" render={(props) => <GetCourses />} />
            <Route path="/api/courses/create" component={CreateCourse} />
            <Route path="/api/courses/:id/update" component={UpdateCourse} />
            <Route path="/api/courses/:id">
              <GetOneCourse />
            </Route>
            <Route path="/api/signup" component={UserSignUp} />
          </Switch>
      </main>
    </>
  );
}

export default App;
