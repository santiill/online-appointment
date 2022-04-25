import React, {useState} from "react";
import "./Home.css";
import { Button } from "react-bootstrap";
import Header from "../headers/Header";
import Steppers from "../modal/fullModal/Stepper";
import MyVerticallyCenteredModal from "../modal/fullModal/MainModal";
import Calendar from "../modal/Calendar";
// import Modal from "./modal/Modal";
// import Modall from "./modal/Modal";
// import { Header } from "../header/Header";

export const Home = () => {
   
  // const [modal, setModal] = useState(false)

  // const openModal = () => setModal(true)
  // const closeModal = () => setModal(false)

  const [modalShow, setModalShow] = React.useState(false);


  return (
  <>
    <div id="main" className="App">
        {/* <Header/> */}
        <Header/>
        <header>
          <div className='nav'>
            <div className='auth'></div>
          </div>
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
            <div className='var'> 

              <div>   </div>
              <div className='option'>
                <div className='num'>1</div>
                <p>Регистрация полиса на сайте</p>
              </div>
            </div>
            <div className='var'> 
              <div className='option'>
                <div className='num'>2</div>
                <p>Регистрация полиса на сайте</p>
              </div>
              <div><img></img></div>
            </div>
            <div className='var'> 
              <div><img></img></div>
              <div className='option'>
                <div className='num'>3</div>
                <p>Регистрация полиса на сайте</p>
              </div>
            </div>
            <div className='var'> 
              <div className='option'>
                <div className='num'>4</div>
                <p>Регистрация полиса на сайте</p>
              </div>
              <div><img></img></div>
            </div>
        </section>

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





