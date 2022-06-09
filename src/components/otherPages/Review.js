import React from 'react'
import Header from '../headers/Header'
import ReviewModal from './ReviewModal';

const Review = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
      <>
      <div>
        <Header/>
        <div onClick={handleOpen} className='card_cont'>
           <div className="card">
            <img src='https://media.istockphoto.com/photos/cropped-portrait-of-an-attractive-young-female-scientist-posing-in-picture-id1340903310?b=1&k=20&m=1340903310&s=612x612&w=0&h=I-LIGHNADUEBRBnYZKNYPs3AAzSsNmEuZ_C_1O99h7U='/>
            <p className='card_text'>Сурмакан Алыбаева Аттокуровна</p>
            <p className='card_text_grey'>Кардиолог</p>
            <button style={{width: 130, fontSize: 14,padding: 7,  margin: "auto"}} className='button'>Оставить отзыв</button>
        </div> 
        <div className="card">
            <img src='https://img.freepik.com/free-photo/covid-19-coronavirus-outbreak-healthcare-workers-and-pandemic-concept-middle-aged-doctor-in-white-coat-cross-arms-chest-ready-help-patients-prescribe-medication-smiling-cheerful_1258-61179.jpg?w=2000'/>
            <p className='card_text'>Марат Маратов Маратович</p>
            <p className='card_text_grey'>Физиотерапевт</p>
            <button style={{width: 130, fontSize: 14,padding: 7, margin: "auto"}} className='button'>Оставить отзыв</button>
        </div> 
        <div className="card">
            <img src='https://t4.ftcdn.net/jpg/03/20/52/31/360_F_320523164_tx7Rdd7I2XDTvvKfz2oRuRpKOPE5z0ni.jpg'/>
            <p className='card_text'>Бакыт Асанов Кубанычбекович</p>
            <p className='card_text_grey'>Травматолог</p>
            <button style={{width: 130, fontSize: 14,padding: 7,  margin: "auto"}} className='button'>Оставить отзыв</button>
        </div> 
        </div>
        
    </div>
    {open && <ReviewModal handleClose={handleClose} open={open}/> }
      </>
    
  )
}

export default Review