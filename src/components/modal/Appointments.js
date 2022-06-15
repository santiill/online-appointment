import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const Appointments = ({ next }) => {
  const states = useSelector((state) => state.appointments);
  console.log("app: ", states);
  return (
    <>
      <div className="mt-4 appoints">
        <h5 className="text-center">Записи</h5>
        <ol>
          {states.map((item) => {
            const t = item.attendingDoctor;
            return (
              <li key={item.id}>
                {t.firstName} {t.lastName} {t.middleName}
                <hr />
              </li>
            );
          })}
        </ol>
      </div>
      <br />
      <Button onClick={next} className="float-lg-end">
        Записаться
      </Button>
    </>
  );
};

export default Appointments;
