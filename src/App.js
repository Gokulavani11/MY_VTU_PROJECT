import HomeScreen from "./screens/HomeScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
function App() {
  return (
 <>
 <Header/>

 <Container>
  <main>
    <HomeScreen/>

    
  </main>
 </Container>
 <Footer/>
 </>
  );
}

export default App;
