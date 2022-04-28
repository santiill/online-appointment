import React, {useEffect, useState} from "react";
import "./Home.css";
import { Button } from "react-bootstrap";
import Header from "../headers/Header";
import Steppers from "../modal/fullModal/Stepper";
import MyVerticallyCenteredModal from "../modal/fullModal/MainModal";
import Calendar from "../modal/Calendar";
import { request } from "../../redux/api";
import { useDispatch, useSelector } from "react-redux";
import { getListOfDoctors } from "../../redux/actions/appointmentCreator";
// import Modal from "./modal/Modal";
// import Modall from "./modal/Modal";
// import { Header } from "../header/Header";

export const Home = () => {
   
  // const [modal, setModal] = useState(false)

  // const openModal = () => setModal(true)
  // const closeModal = () => setModal(false)

  const [modalShow, setModalShow] = React.useState(false);

  const dispatch = useDispatch();
  const doctors_state = useSelector(state => state.doctors)
  console.log("doctors_state: ", doctors_state)

  useEffect(() => {
    dispatch(getListOfDoctors())
  }, [])


  return (
  <>
    <div id="main" className="App">
        {/* <Header/> */}
        <Header color="dark"/>
        <header>
          {/* <div className='nav'>
            <div className='auth'></div>
          </div> */}
          <div className='reg'> 
          <h1>
            Онлайн запись на прием к врачу
          </h1>
          <div className='line'></div>
          
          <h3>Секономьте свое время!</h3>
          <Button onClick={() => setModalShow(true)}>Записаться к врачу</Button>
            
          </div>
        </header>

        <section id="instruction">
            <div className='appointment'>
              <div className='line'></div>
              <h1> Как записаться</h1>
              <p>на прием к врачу</p>
            </div>
            <div className="options">
              <div className='var'> 
                <img className="option_img" src="https://registratura.med.kg/packs/media/images/start_page/step-4-d390d8027f40d0494eb90af73299c46c.svg" alt=""/>
                <div className='option'>
                  <div className='num'>1</div>
                  <p className="option_text">Регистрация полиса на сайте</p>
                </div>
              </div>
              {/* <div className='var'> <img className="option_img_l" src="https://registratura.med.kg/packs/media/images/start_page/telephone-3df3b8ac49be8ef150727bec60f7ae87.png" alt=""/>
                <div className='option'>
                  <div className='num'>2</div>
                  <p className="option_text">По домашнему телефону</p>
                </div>
              </div> */}
              <div className='var'> 
                <img className="option_img_l" src="https://registratura.med.kg/packs/media/images/start_page/smartphone-57612c82935bf7fcd57a31e219495bb4.png" alt=""/>
                <div className='option'>
                  <div className='num'>2</div>
                  <p className="option_text">По мобильному телефону</p>
                </div>
              </div>
              <div className='var'> 
                <img className="option_img_l" src="https://registratura.med.kg/packs/media/images/start_page/front-desk-c6e517b81de45b71ef68da8e49f80df2.png" alt=""/>
                <div className='option'>
                  <div className='num'>3</div>
                  <p className="option_text">Через регистратуру</p>
                </div>
              </div>
              
            </div>

        </section>
        {/* <section>
          <div className="section_3">
            <div className='line'></div>
            <h2 className="steps_title">
                ДЛЯ ЗАПИСИ НЕОБХОДИМО ВЫПОЛНИТЬ НЕСКОЛЬКО ПРОСТЫХ ШАГОВ:
            </h2>
              <div>
                <ul>
                  <li>Шаг 1.</li>
                  <li>- Войти на портал registratura.med.kg</li>
                  <li>- Ввести ПИН</li>
                  <li>- Ввести номер телефона</li>
                </ul>
              </div>
          </div>
        
        </section> */}

        <footer>
          <div id="contact" className='container'>
            <p>Телефон технической поддержки: 66-21-86</p>
            <p>introcez@mail.ru</p>
          </div>
        </footer>



        {/* <div className='auth'>
            <h3>Войдите а свой аккаунт</h3>
            <p>Login
            <input type="text" name="name" /></p>  

            <p>Password
            <input type="text" name="name" /></p> 


            <button>Войти</button>

        </div> */}
      </div>
      {/* <Steppers/> */}
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      {/* {modal && <Modall/>} */}
  </>
    
  );
}

export default Home;





