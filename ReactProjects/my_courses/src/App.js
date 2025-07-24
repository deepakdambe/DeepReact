import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import { Home } from './components/Home';
import { AllCourses } from './components/AllCourses';
import { AddCourse } from './components/AddCourse';
import { LeftMenus } from './components/LeftMenus';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import PersonalDataForm from './components/PersonalDataForm';
import Login from './components/Login';

function App() {

  const btnHandler = () => {
    toast.success("This is my msg", {
      position: "top-center",
    });
  };

  return (
    <div className="App">
      <Router>
        <ToastContainer />
        <Container>
          <Header />
          <div>
            <Row>
              <Col md={3} >
                <LeftMenus />
              </Col>

              <Col md={9} >
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='add-course' element={<PersonalDataForm />} />
                  <Route path='view-course' element={<Login />} />
                </Routes>
              </Col>
            </Row>
          </div>
        </Container>
      </Router>
      {/* <AddCourse />
      <AllCourses /> */}
    </div>
  );
}

export default App;
