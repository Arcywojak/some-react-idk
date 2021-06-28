import './App.scss';
import HeaderComponent from './constant-components/header/header.component';
import FooterComponent from './constant-components/footer/footer.component';
import ContentWrapperComponent from './constant-components/content-wrapper/content-wrapper.component';
function App() {

  return (
    <div className="App">
      <HeaderComponent/>

      <ContentWrapperComponent>

      </ContentWrapperComponent>
      
      <FooterComponent/>
    </div>
  );
}

export default App;
