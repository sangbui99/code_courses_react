import './App.css';
import Header from './Components/Header';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./My_css/style.css"
import Footer from './Components/Footer'
// import Container from './Components/Container';
import ContainerF from './Components/ContainerF';
function App() {
  return (
    <>
      <Header></Header>
      {/* <Container/> */}
      <ContainerF/>
     <Footer></Footer>
    </>
  );
}

export default App;
