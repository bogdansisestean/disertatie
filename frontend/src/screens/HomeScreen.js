import "./HomeScreen.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//Components
import Processes from "../components/Product";

//Actions
import { getProcesses as listProcesses } from "../redux/actions/processActions";
import { useNavigate } from "react-router-dom";

function HomeScreen() {
  const dispatch = useDispatch();

  const getProcesses = useSelector((state) => state.getProcesses);
  const getUser = useSelector((state) => state.loggedUser);

  const { user, loggedIn } = getUser;
  const { processes, loading, error } = getProcesses;

  useEffect(() => {
    dispatch(listProcesses());
  }, []);

  if (processes) {
    return (
      <div className="homescreen">
        <h2 className="homescreen__title">Processes</h2>
        <div className="homescreen__products">
          {loading ? (
            <h2>Loading...</h2>
          ) : error ? (
            <h2>{error}</h2>
          ) : (
            processes.map((process) => (
              <Processes
                key={process._id}
                name={process.name}
                description={process.description}
                price={process.price}
                imageUrl={process.imageUrl}
                productId={process._id}
              />
            ))
          )}
          {}
        </div>
      </div>
    );
  } else {
    return <p>loading...</p>;
  }
}

export default HomeScreen;
