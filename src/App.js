import './App.scss';
import HeaderComponent from './constant-components/header/header.component';
import FooterComponent from './constant-components/footer/footer.component';
import Container from '@material-ui/core/Container';

function App() {
  return (
    <div className="App">
      <HeaderComponent/>
        <Container className="full-height-container">

        </Container>
      <FooterComponent/>
    </div>
  );
}

export default App;
