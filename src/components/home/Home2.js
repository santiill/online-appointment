import React, {useEffect} from 'react';
import Header from "../headers/Header";
import s from "./Home2.module.css"
import {banner_img, banner_img2, comment_icon, comment_img, doctor1, header_logo} from "../images";
import MyVerticallyCenteredModal from "../modal/fullModal/MainModal";
import {FaInstagram} from "react-icons/fa";
import {FiFacebook, FiYoutube} from "react-icons/fi";
import {useDispatch, useSelector} from "react-redux";
import {getHistory, getListOfDoctors} from "../../redux/actions/appointmentCreator";
import {request} from "../../redux/api";

const Home2 = () => {

    const [modalShow, setModalShow] = React.useState(false);

    const dispatch = useDispatch();
    const doctors_state = useSelector(state => state.doctors)
    console.log("doctors_state: ", doctors_state)

    useEffect(() => {
        dispatch(getListOfDoctors())
        dispatch(getHistory())
    }, [])
    return (
        <>
            <div>
                <Header color="light"/>
                <div className={s.banner}>
                    <div className={s.banner_title_cont}>
                        <p className={s.b_title}>Онлайн запись на прием к врачу</p>
                        <button className={s.b_button}  onClick={() => setModalShow(true)}>Записаться к врачу</button>
                    </div>
                    <img className={s.banner_img} src={banner_img2} alt="wrong"/>
                </div>
                <div className={s.line_cont}>
                    <hr className={s.line}/>
                </div>
                <div id="instruction" className={s.g_ways}>
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
                                <p className={s.amount_number}>0</p>
                                <p className={s.amount_text}>машин скорой<br/> помощи</p>
                            </div>
                            <div className={s.amount_card}>
                                <p className={s.amount_number}>10</p>
                                <p className={s.amount_text}>квалифицированных<br/> специалистов</p>
                            </div>
                            <div className={s.amount_card}>
                                <p className={s.amount_number}>4</p>
                                <p className={s.amount_text}>заявок<br/> на запись</p>
                            </div>
                            <div className={s.amount_card}>
                                <p className={s.amount_number}>1</p>
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
                                <p className={s.comment_desc__subtitle}>Основные направления – диагностика, лечение и профилактика заболеваний позвоночника и крупных суставов методами мануальной терапии, рефлексотерапии и массажа.
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
                                    <p className={s.doctor_name}>Гаряева Раиса</p>
                                    <p className={s.doctor_text}>Врач терапевт</p>
                                    <p className={s.doctor_text}>(высшей категории)</p>
                                </div>
                            </div>
                            <div className={s.doctor_card8}>
                                <div className={s.doctor_desc}>
                                    <p className={s.doctor_name}>Гучаев Санджи-Гаря</p>
                                    <p className={s.doctor_text}>Травматолог -ортопед</p>
                                    <p className={s.doctor_text}>(высшей категории)</p>
                                </div>
                            </div>
                            <div className={s.doctor_card2}>
                                <div className={s.doctor_desc}>
                                    <p className={s.doctor_name}>Устиева Тамара</p>
                                    <p className={s.doctor_text}>Врач -лаборант</p>
                                    <p className={s.doctor_text}>(высшей категории)</p>
                                </div>
                            </div>
                            <div className={s.doctor_card3}>
                                <div className={s.doctor_desc}>
                                    <p className={s.doctor_name}>Гучаев Санджи-Гаря</p>
                                    <p className={s.doctor_text}>Врач -рентгенолог</p>
                                    <p className={s.doctor_text}>(высшей категории)</p>
                                </div>
                            </div>
                            <div className={s.doctor_card4}>
                                <div className={s.doctor_desc}>
                                    <p className={s.doctor_name}>Кензеева Дарина</p>
                                    <p className={s.doctor_text}>Врач- педиатр</p>
                                    <p className={s.doctor_text}>(высшей категории)</p>
                                </div>
                            </div>
                            <div className={s.doctor_card5}>
                                <div className={s.doctor_desc}>
                                    <p className={s.doctor_name}>Кензеева Дарина</p>
                                    <p className={s.doctor_text}>Врач стоматолог</p>
                                    <p className={s.doctor_text}>(высшей категории)</p>
                                </div>
                            </div>
                            <div className={s.doctor_card6}>
                                <div className={s.doctor_desc}>
                                    <p className={s.doctor_name}>Гаряев Вячеслав</p>
                                    <p className={s.doctor_text}>Врач- эндоскопист</p>
                                    <p className={s.doctor_text}>(высшей категории)</p>
                                </div>
                            </div>
                            <div className={s.doctor_card7}>
                                <div className={s.doctor_desc}>
                                    <p className={s.doctor_name}>Шараев Бадма</p>
                                    <p className={s.doctor_text}>Врач -хирург</p>
                                    <p className={s.doctor_text}>(высшей категории)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div  className={s.int_facts}>
                    <p className={s.facts_title}>Интересные факты</p>
                    <p className={s.facts_text}>Самый тяжелый орган человека — кожа. У взрослого она весит 2,7 кг. (Это и самый крупный выделительный орган, о чем нередко забывают, кутаясь без особой надобности, лишь изредка прибегая к водным процедурам и парной.) Самый тяжелый внутренний орган — печень, ее вес — 1,5 кг. Для сравнения — сердце весит в среднем всего 325 граммов.</p>
                    <p className={s.facts_text}>В Древней Месопотамии люди еще не знали, как устроен организм человека, и делили все болезни на два типа. Легкие недомогания, такие как простуда, головная боль или расстройство желудка, считались естественной частью повседневной жизни. Но такие болезни, как оспа, дизентерия и лихорадка, считались делом демонов, проникших в человека, или наказанием богов. Лечение всегда включало в себя магические действия знахаря. Лекари поили заболевшего травами и читали над ним заклинания. Целители предсказывали течение болезни, гадая на печени жертвенного животного.</p>
                    <p className={s.facts_text}>Человек может прожить без еды 30-40 дней, без воды — 3-5 суток, без воздуха 3-6 минут.</p>
                </div>
                <footer id="contact" className={s.footer}>
                    <div className={s.container}>
                        <div className={s.footer_cont}>
                            <div className={s.footer_desc_cont}>
                                <img src={header_logo} alt="wrong"/>
                                <div className={s.blocck}>
                                    <FaInstagram/>
                                    <p className={s.footer_textt}>Instagram</p>
                                </div>
                                <div className={s.blocck}>
                                    <FiFacebook/>
                                    <p className={s.footer_textt}>Facebook</p>
                                </div>
                                <div className={s.blocck}>
                                    <FiYoutube/>
                                    <p className={s.footer_textt}>YouTube</p>
                                </div>
                            </div>

                            <div className={s.footer_text_cont}>
                                <p className={s.footer_text}>г.Бишкек Тунгуч 40</p>
                                <p className={s.footer_text}>+996 777 55 55 92</p>
                                <p className={s.footer_text}>komoldin.khuzhamberdiev@iaau.edu.kg</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>

    );
};

export default Home2;
