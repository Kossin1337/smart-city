import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore, faRecycle, faTruckMoving } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";

const Garbage = () => {
  return (
    <div>
      <div className="garbage-page">
        <div>
          <h1>
            How Smart City can improve your daily life
          </h1>
          <p>
            {" "}Garbage Collecting
          </p>
        </div>
        <div className="cards">
          <div className="card-content">
            <div className="card-icon">
              <FontAwesomeIcon className="icon" icon={faStore} />
            </div>
            <div>
              <p>Install GPS & load tracker in every important garbage can</p>
              <p>Collect the garbage only when the container is 75% full.</p>
            </div>
          </div>
          <div className="card-content">
            <div className="card-icon">
              <FontAwesomeIcon className="icon" icon={faTruckMoving} />
            </div>
            <div>
              <p>Set a path for a garbage truck in order create the best route, optimize the performance</p>
              <p>Send different trucks for each recycling material.</p>
            </div>
          </div>
          <div className="card-content">
            <div className="card-icon">
              <FontAwesomeIcon className="icon" icon={faRecycle} />
            </div>
            <div>
              <p>Unload trucks with specific garbage load to different recycling centers</p>
              <p>Make the world a better planet.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Garbage;
