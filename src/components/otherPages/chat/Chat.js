import React, {useEffect, useState} from 'react';
import "./Chat.module.css"
import { RiSendPlaneFill } from 'react-icons/ri';
import s from "./Chat.module.css"
import Header from "../../headers/Header";

const Chat2 = () => {

    const [textArr, setTextArr] = useState([])
    const [inputValue, setInputValue] = useState("");
    const [value, setValue] = useState(" ");
    const [reset, setReset] = useState(false);


    const sendMessage = () => {
        setValue(inputValue)
    }

    useEffect(() => {
        setTextArr([...textArr, value])
        console.log(textArr)
        console.log(value)
    }, [setValue])

    return (
        <>
            <Header/>
            <div style={{padding: 0}} className={s.container}>
                <div className={s.row}>
                    <section className={s.discussions}>
                        <div className={`${s.discussion} ${s.search}`}>
                            <div className={s.searchbar}>
                                {/*<i className="fa fa-search" aria-hidden="true"></i>*/}
                                <input type="text" placeholder="Search..."></input>
                            </div>
                        </div>
                        <div className={`${s.discussion} ${s.message_active}`}>
                            <div className={s.photo}
                                 style={{backgroundImage: "url(https://ddcorlando.com/wp-content/uploads/2020/01/beautiful-young-female-doctor-looking-camera-office_1301-7781.jpg)"}}>
                                <div className={s.online}></div>
                            </div>
                            <div className={s.desc_contact}>
                                <p className={s.name}>Karina Anatolyevna</p>
                                <p className={s.message}>9 pm at the bar if possible 😳</p>
                            </div>
                            <div className={s.timer}>12 sec</div>
                        </div>


                    </section>
                    <section className={s.chat}>
                        <div className={s.header_chat}>
                            {/*<i className="icon fa fa-user-o" aria-hidden="true"></i>*/}
                            <p className={s.name}>Karina Anatolyevna</p>
                            {/*<i className="icon clickable fa fa-ellipsis-h right" aria-hidden="true"></i>*/}
                        </div>
                        <div className={s.messages_chat}>
                            <div className={s.message}>
                                <div className={s.photo} style={{backgroundImage: "url(https://ddcorlando.com/wp-content/uploads/2020/01/beautiful-young-female-doctor-looking-camera-office_1301-7781.jpg)"}}>
                                    <div className={s.online}></div>
                                </div>
                                <p className={s.text}> Hi, how are you ? </p>
                            </div>
                            <div className={`${s.message} ${s.text_only}`}>
                                <p className={s.text}> What are you doing tonight ? Want to go take a drink ?</p>
                            </div>
                            <p className={s.time}> 14h58</p>
                            <div className={`${s.message} ${s.text_only}`}>
                                <div className={s.response}>
                                    <p className={s.text}> Hey Megan ! It's been a while 😃</p>
                                </div>
                            </div>
                            <div className={`${s.message} ${s.text_only}`}>
                                <div className={s.response}>
                                    <p className={s.text}> Hey Megan ! It's been a while 😃</p>
                                </div>
                            </div>
                            <p className={`${s.response_time} ${s.time}`}> 15h04</p>
                            <div className={s.message}>
                                <div className={s.photo} style={{backgroundImage: "url(https://ddcorlando.com/wp-content/uploads/2020/01/beautiful-young-female-doctor-looking-camera-office_1301-7781.jpg)"}}>
                                    <div className={s.online}></div>
                                </div>
                                <p className={s.text}> 9 pm at the bar if possible 😳</p>
                            </div>
                            <p className={s.time}> 15h09</p>
                            {textArr.map(text => {
                                return <div className={`${s.message} ${s.text_only}`}>
                                        <div className={s.response}>
                                            <p className={s.text}> {text}</p>
                                        </div>
                                    </div>
                            })}
                        </div>
                        <div className={s.footer_chat}>
                            {/*<i className="icon fa fa-smile-o clickable" style="font-size:25pt;" aria-hidden="true"></i>*/}
                            <input onChange={(e) => setInputValue(e.target.value)} type="text" className={s.write_message} placeholder="Type your message here"></input>
                            <RiSendPlaneFill onClick={sendMessage} className={`${s.icon} ${s.send} ${s.clickable}`}/>
                            {/*<i className="icon send clickable" aria-hidden="true"></i>*/}
                        </div>
                    </section>
                </div>
            </div>

        </>

    );
};

export default Chat2;
