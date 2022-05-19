import './App.css';
import './style.css';
import Pic1 from './1.jpg';
import Pic2 from './2.png';

function App() {
  return (
    <div className='App'>
      <div className='style'>
        <div className='style-1'>

            <h1 className='style-titlered'>Dhia eddine Bachtouli</h1>
            <img className='img1' src={Pic1} alt='image 1'/>
            <img className='img1' src={Pic2} alt='image 2'/>

            <video className='video1'>

              <source src="myVideo.mp4" type="video/mp4" />

            </video>

        </div>
      </div>
    </div>
  );

}

export default App;
