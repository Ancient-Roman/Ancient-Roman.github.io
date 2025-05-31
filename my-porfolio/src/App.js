import './App.css';
import 'boxicons/css/boxicons.min.css';

// components
import PageHeader from './components/PageHeader';
import ImageSection from './components/ImageSection';
import MainResume from './components/MainResume';


function App() {
  
  return (
    <div className="App">

      <PageHeader/>
      <ImageSection/>

      <MainResume/>

    </div>
  );
}

export default App;