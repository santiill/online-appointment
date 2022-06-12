import React from 'react';
import "./Chat2.css"
import { RiSendPlaneFill } from 'react-icons/ri';

const Chat2 = () => {
    return (
        <div style={{padding: 0}} className="container">
            <div className="row">
                <section className="discussions">
                    <div className="discussion search">
                        <div className="searchbar">
                            {/*<i className="fa fa-search" aria-hidden="true"></i>*/}
                            <input type="text" placeholder="Search..."></input>
                        </div>
                    </div>
                    <div className="discussion message-active">
                        <div className="photo"
                             style={{backgroundImage: "url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)"}}>
                            <div className="online"></div>
                        </div>
                        <div className="desc-contact">
                            <p className="name">Megan Leib</p>
                            <p className="message">9 pm at the bar if possible 😳</p>
                        </div>
                        <div className="timer">12 sec</div>
                    </div>

                    <div className="discussion">
                        <div className="photo"
                             style={{backgroundImage: "url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)"}}>
                        </div>
                        <div className="desc-contact">
                            <p className="name">Jerome Seiber</p>
                            <p className="message">I've sent you the annual report</p>
                        </div>
                        <div className="timer">42 min</div>
                    </div>

                    <div className="discussion">
                        <div className="photo"
                             style={{backgroundImage: "url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)"}}>
                            <div className="online"></div>
                        </div>
                        <div className="desc-contact">
                            <p className="name">Thomas Dbtn</p>
                            <p className="message">See you tomorrow ! 🙂</p>
                        </div>
                        <div className="timer">2 hour</div>
                    </div>

                    <div className="discussion">
                        <div className="photo"
                             style={{backgroundImage: "url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)"}}>
                        </div>
                        <div className="desc-contact">
                            <p className="name">Elsie Amador</p>
                            <p className="message">What the f**k is going on ?</p>
                        </div>
                        <div className="timer">1 day</div>
                    </div>

                    <div className="discussion">
                        <div className="photo" style={{backgroundImage: "url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)"}}>
                        </div>
                        <div className="desc-contact">
                            <p className="name">Billy Southard</p>
                            <p className="message">Ahahah 😂</p>
                        </div>
                        <div className="timer">4 days</div>
                    </div>
                </section>
                <section className="chat">
                    <div className="header-chat">
                        {/*<i className="icon fa fa-user-o" aria-hidden="true"></i>*/}
                        <p className="name">Megan Leib</p>
                        {/*<i className="icon clickable fa fa-ellipsis-h right" aria-hidden="true"></i>*/}
                    </div>
                    <div className="messages-chat">
                        <div className="message">
                            <div className="photo" style={{backgroundImage: "url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)"}}>
                                <div className="online"></div>
                            </div>
                            <p className="text"> Hi, how are you ? </p>
                        </div>
                        <div className="message text-only">
                            <p className="text"> What are you doing tonight ? Want to go take a drink ?</p>
                        </div>
                        <p className="time"> 14h58</p>
                        <div className="message text-only">
                            <div className="response">
                                <p className="text"> Hey Megan ! It's been a while 😃</p>
                            </div>
                        </div>
                        <div className="message text-only">
                            <div className="response">
                                <p className="text"> When can we meet ?</p>
                            </div>
                        </div>
                        <p className="response-time time"> 15h04</p>
                        <div className="message">
                            <div className="photo" style={{backgroundImage: "url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)"}}>
                                <div className="online"></div>
                            </div>
                            <p className="text"> 9 pm at the bar if possible 😳</p>
                        </div>
                        <p className="time"> 15h09</p>
                    </div>
                    <div className="footer-chat">
                        {/*<i className="icon fa fa-smile-o clickable" style="font-size:25pt;" aria-hidden="true"></i>*/}
                        <input type="text" className="write-message" placeholder="Type your message here"></input>
                        <RiSendPlaneFill className="icon send fa fa-paper-plane-o clickable"/>
                        {/*<i className="icon send clickable" aria-hidden="true"></i>*/}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Chat2;
