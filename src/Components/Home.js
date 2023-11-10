import "./Home.css";
import mansitting from '../Assest/man-sitting.png'

function Home() {
  return (
    <div className="myhomepage">
      <div className="homeleft">
        <div className="homepage--heading homepage--elements">
          <div>Hello</div>
          <div>Readers,</div>
        </div>
        <div className="homepage--text homepage--elements">
          <div>
            Welcome to the best platfrom to <span className="homepage--highlight">read and write short stroies</span> and
            light up your mood.
          </div>
        </div>
        <div className="homepage--buttons homepage--elements">
          <button className="btn--homepage">Read a Tale >>> </button>
          <button className="btn--homepage btn--write">Write up one >>> </button>
        </div>
      </div>
      <div className="homeright">
        <img className="homepage--image" src={mansitting}></img>
      </div>
    </div>
  );
}

export default Home;
