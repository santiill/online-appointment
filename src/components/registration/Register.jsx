import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { registration } from '../../redux/actions/auth_registration'
import { request } from '../../redux/api'
import "../baseStyles.css"
import Header from '../headers/Header'
import s from "./Register.module.css"

const Register = () => {

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            middleName: "",
            username: "",
            password: "",
        },
        onSubmit: (data) => {
            console.log("data: ", data);
            registration(data)
        }
    })

  return (
      <>
       <Header/>
       <div className={s.registration}>
       
        <div className={s.registration_cont}>
            
            <form onSubmit={formik.handleSubmit} className={s.form}><h3>Зарегистрироваться</h3>
                <div className='input_cont'>
                    <label className='label' htmlFor="">Имя</label>
                    <input name='firstName' onChange={formik.handleChange} className='input' type="text" placeholder='Введите имя'/>
                </div>
                <div className='input_cont'>
                    <label className='label' htmlFor="">Фамилия</label>
                    <input name='lastName' onChange={formik.handleChange} className='input' type="text" placeholder='Введите фамилию'/>
                </div>
                <div className='input_cont'>
                    <label className='label' htmlFor="">Отчество</label>
                    <input name='middleName' onChange={formik.handleChange} className='input' type="text" placeholder='Введите отчество'/>
                </div>
                {/* <div className='input_cont'>
                    <label className='label' htmlFor="">Дата рождения</label>
                    <input name='' onChange={formik.handleChange} className='input' type="date" placeholder='Введите дату рождения'/>
                </div> */}
                <div className='input_cont'>
                    <label className='label' htmlFor="">Логин</label>
                    <input name='username' onChange={formik.handleChange} className='input' type="text" placeholder='Введите логин'/>
                </div>
                <div className='input_cont'>
                    <label className='label' htmlFor="">Пароль</label>
                    <input name='password' onChange={formik.handleChange} className='input' type="text" placeholder='Введите пароль'/>
                </div>
                <button type='submit' className='button'>Зарегистрироваться</button>
            </form>
        </div>
        
    </div>
      </>
    
  )
}

export default Register