import think from "../Assest/thinking girl.png";
import "./Readers.css";

function Readers() {
  return (
    <div className="readers--flex">
      <div className="think--girl">
        <img src={think}></img>
      </div>
      <div className="readers--content">
        <div className="readers--content--options">
          <div className="readers--ques">What will you love to read ?</div>
          <div className="readers--options">
            <button className="btn--option">ACTION</button>
            <button className="btn--option">FANTASY</button>
            <button className="btn--option">SUSPENSE</button>
          </div>
          <div className="readers--options">
            <button className="btn--option">ROMANCE</button>
            <button className="btn--option">COMEDY</button>
            <button className="btn--option">REAL INCIDENT</button>
          </div>
        </div>
        <div>
          <div className="confused--reader">Still Confused what to read ??
          </div>
          <div className="confused--reader">
            <button className="btn--surprise">
              Surprise Me with a short story >>>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Readers;
