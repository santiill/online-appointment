import React from 'react';
import Header from "../headers/Header";
import s from "./Home2.module.css"
import {banner_img, banner_img2, comment_icon, comment_img, doctor1} from "../images";

const Home2 = () => {
    return (
        <div>
            <Header color="light"/>
            <div className={s.banner}>
                <div className={s.banner_title_cont}>
                    <p className={s.b_title}>Онлайн запись на прием к врачу</p>
                    <button className={s.b_button}>Записаться к врачу</button>
                </div>
                <img className={s.banner_img} src={banner_img2} alt="wrong"/>
            </div>
            <div className={s.line_cont}>
                <hr className={s.line}/>
            </div>
            <div className={s.g_ways}>
                <div className={s.container}>
                    <div className={s.ways}>
                        <h4 className={s.ways_title}>Как записаться к врачу?</h4>
                        <div className={s.ways_cont}>
                            <div className={s.ways_cont__card}>
                                <span className={s.ways_cont__number}>1</span>
                                <img className={s.card_img} src="https://registratura.med.kg/packs/media/images/start_page/step-4-d390d8027f40d0494eb90af73299c46c.svg" alt=""/>
                                <p className={s.card_title}>Регистрация полиса на сайте</p>
                                <p className={s.card_subtitle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
                            </div>
                            <div className={s.ways_cont__card}>
                                <span className={s.ways_cont__number}>1</span>
                                <img className={s.card_img} src="https://registratura.med.kg/packs/media/images/start_page/smartphone-57612c82935bf7fcd57a31e219495bb4.png" alt=""/>
                                <p className={s.card_title}>Регистрация полиса на сайте</p>
                                <p className={s.card_subtitle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
                            </div>
                            <div className={s.ways_cont__card}>
                                <span className={s.ways_cont__number}>1</span>
                                <img className={s.card_img} src="https://registratura.med.kg/packs/media/images/start_page/front-desk-c6e517b81de45b71ef68da8e49f80df2.png" alt=""/>
                                <p className={s.card_title}>Регистрация полиса на сайте</p>
                                <p className={s.card_subtitle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className={s.block}>
                <div className={s.container}>
                    <div className={s.block_cont}>
                        <div className={s.block_desc_cont}>
                            <p className={s.block_title}>Сэкономьте время и выберите нужного вам
                                специалиста онлайн</p>
                            <p className={s.block_subtitle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                            </p>
                            <button className={s.block_button}>Выбрать врача ></button>
                        </div>
                        <img className={s.block_img} src={banner_img2} alt="wrong"/>
                    </div>

                </div>
            </div>
            <div className={s.amount}>
                <div className={s.container}>
                    <div className={s.amount_cont}>
                        <div className={s.amount_card}>
                            <p className={s.amount_number}>3</p>
                            <p className={s.amount_text}>машин скорой<br/> помощи</p>
                        </div>
                        <div className={s.amount_card}>
                            <p className={s.amount_number}>30</p>
                            <p className={s.amount_text}>квалифицированных<br/> специалистов</p>
                        </div>
                        <div className={s.amount_card}>
                            <p className={s.amount_number}>578</p>
                            <p className={s.amount_text}>заявок<br/> на запись</p>
                        </div>
                        <div className={s.amount_card}>
                            <p className={s.amount_number}>846</p>
                            <p className={s.amount_text}>довольных<br/> пациентов</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.comment}>
                <div className={s.container}>
                    <p className={s.comment_title}>О нашей клинике</p>
                    <div className={s.comment_cont}>
                        <div className={s.comment_card}>
                            <img className={s.comment_icon} src={comment_icon} alt="wrong"/>
                            <p className={s.comment_desc__title}>О нашей клинике</p>
                            <p className={s.comment_desc__subtitle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                            </p>
                        </div>
                        <img className={s.comment_img} src={comment_img} alt="wrong"/>
                    </div>
                </div>
            </div>
            <div className={s.doctors}>
                <div className={s.container}>
                    <p className={s.doctor_title}>Врачи</p>
                    <div className={s.doctors_cont}>
                        <div className={s.doctor_card1}>
                            <div className={s.doctor_desc}>
                                <p className={s.doctor_name}>Имя Фамилия</p>
                                <p className={s.doctor_text}>Врач терапевт</p>
                                <p className={s.doctor_text}>(высшей категории)</p>
                            </div>
                        </div>
                        <div className={s.doctor_card2}>
                            <div className={s.doctor_desc}>
                                <p className={s.doctor_name}>Имя Фамилия</p>
                                <p className={s.doctor_text}>Врач терапевт</p>
                                <p className={s.doctor_text}>(высшей категории)</p>
                            </div>
                        </div>
                        <div className={s.doctor_card3}>
                            <div className={s.doctor_desc}>
                                <p className={s.doctor_name}>Имя Фамилия</p>
                                <p className={s.doctor_text}>Врач терапевт</p>
                                <p className={s.doctor_text}>(высшей категории)</p>
                            </div>
                        </div>
                        <div className={s.doctor_card4}>
                            <div className={s.doctor_desc}>
                                <p className={s.doctor_name}>Имя Фамилия</p>
                                <p className={s.doctor_text}>Врач терапевт</p>
                                <p className={s.doctor_text}>(высшей категории)</p>
                            </div>
                        </div>
                        <div className={s.doctor_card5}>
                            <div className={s.doctor_desc}>
                                <p className={s.doctor_name}>Имя Фамилия</p>
                                <p className={s.doctor_text}>Врач терапевт</p>
                                <p className={s.doctor_text}>(высшей категории)</p>
                            </div>
                        </div>
                        <div className={s.doctor_card6}>
                            <div className={s.doctor_desc}>
                                <p className={s.doctor_name}>Имя Фамилия</p>
                                <p className={s.doctor_text}>Врач терапевт</p>
                                <p className={s.doctor_text}>(высшей категории)</p>
                            </div>
                        </div>
                        <div className={s.doctor_card7}>
                            <div className={s.doctor_desc}>
                                <p className={s.doctor_name}>Имя Фамилия</p>
                                <p className={s.doctor_text}>Врач терапевт</p>
                                <p className={s.doctor_text}>(высшей категории)</p>
                            </div>
                        </div>
                        <div className={s.doctor_card8}>
                            <div className={s.doctor_desc}>
                                <p className={s.doctor_name}>Имя Фамилия</p>
                                <p className={s.doctor_text}>Врач терапевт</p>
                                <p className={s.doctor_text}>(высшей категории)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home2;
