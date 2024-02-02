import './App.css';
import Navi  from './navbar';
import Side from './sidebar';
import Main from './main';
import { Col, Container, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div ClassName="App" >
      <Container  >
        <Row>
          <Col className='Side' >
          <Side title='side component'  ></Side>
          </Col>

          <Col className='Main' >
            <Row className='navRow'>
              <Navi></Navi>
            </Row>
            <Row>
            <Main title='main component'></Main>
            </Row>

          </Col>
          </Row>         
        
      </Container>
      
    </div>
  );
}

export default App;
