import { Button, Form, Modal } from "react-bootstrap";
import Steppers from "./Stepper";
import "../../baseStyles.css";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Запись на прием
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Steppers />
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}
export default MyVerticallyCenteredModal;
