import Alert from "react-bootstrap/Alert";
import { useDispatch, useSelector } from "react-redux";
import { clear } from "../redux/slices/errorSlice";

function Alerts(data) {
  const alert = useSelector((state) => state.error);
  const dispatch = useDispatch();
  const id = setTimeout(() => {
    dispatch(clear());
    clearTimeout(id);
  }, 4000);

  return (
    <>
      {alert.type && (
        <Alert key={alert.type} variant={alert.type}>
          {alert.message}
        </Alert>
      )}
    </>
  );
}

export default Alerts;
