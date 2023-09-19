import './App.css'
import Header from "./components/Header";
import BusinessCard from "./components/BusinessCard";
import Portada from "./components/portada"
import Iglesias from './components/Iglesias';
import Contacts from './components/Contactos';


function App() {
  
  return (
    < >
      <Portada/>
      <BusinessCard
      photoUrl="/public/jhonny.jpg"
      fullName="Jane Smith"
      profession="Web Designer"
      description="Creating beautiful and user-friendly websites."
      />
      <Iglesias/>
      <Header/>
      <Contacts/>
    </>
  )
}

export default App;
