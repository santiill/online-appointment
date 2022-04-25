import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./baseModalStyles.css";

const Personalization = () => {
  const [appoints, setAppoints] = useState(false);
  const [button, setButton] = useState(true);

  return (
    <div>
      <Form className="mt-5 mb-4">
        <h5 className="text-center font-weight-bold">Ваши данные</h5>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>ПОЛИС</Form.Label>
          <Form.Control type="email" placeholder="Введите полис" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Номер телефона</Form.Label>
          <Form.Control type="password" placeholder="0999886677" />
        </Form.Group>
        {button && (
          <Button
            onClick={() => {
              setAppoints(true);
              setButton(false);
            }}
            className="float-lg-end"
          >
            Продолжить
          </Button>
        )}
      </Form>
      {appoints && (
        <div className="mt-4 appoints">
          <h5 className="text-center">Записи</h5>
          <ol>
            <li>Джапарова Гульмира Мукановна</li>
            <hr />
            <li>Караева Зульфия Алшановна</li>
            <hr />
            <li>Кошбакова Эркайым Бактияровна</li>
            <hr />
            <li>Кыдырмаева Назира Шаршенбековна</li>
          </ol>
        </div>
      )}
    </div>
  );
};

export default Personalization;
