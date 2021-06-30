import './App.scss';
import HeaderComponent from './constant-components/header/header.component';
import FooterComponent from './constant-components/footer/footer.component';
import ContentWrapperComponent from './constant-components/content-wrapper/content-wrapper.component';
import HomePage from './pages/home-page/home.page';
function App() {

  return (
    <div className="App">
      <HeaderComponent/>

      <ContentWrapperComponent>
        <HomePage/>
      </ContentWrapperComponent>
      
      <FooterComponent/>
    </div>
  );
}

export default App;
