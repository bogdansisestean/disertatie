import "./Process.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ActiveProcesses from "src/screens/ActiveProcesses";

const Process = ({ imageUrl, description, name, processId }) => {

  return (
    <div className="process">
      <img src={imageUrl} alt={name} />
      <div className="process__info">
        <p className="info__name">{name}</p>
        <p className="info__description">{description.substring(0, 100)}...</p>
        <Link to={`/process/${processId}`} className="info__button">
          View
        </Link>
      </div>
    </div>
  );
};

export default Process;
