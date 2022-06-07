import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  Search,
  ConversationList,
  Conversation,
  Avatar,
  ConversationHeader,
  VoiceCallButton,
  VideoCallButton,
  TypingIndicator,
  MessageSeparator,
  Sidebar,
  EllipsisButton,
} from "@chatscope/chat-ui-kit-react";
import { useState } from "react";
import Header from "../headers/Header";

const Chats = () => {
  // Set initial message input value to an empty string
  const [messageInputValue, setMessageInputValue] = useState("");
  return (
    <>
    <Header/>
    <div
    /* className="table_cont" */
      style={{
        height: "83vh",
        position: "relative",
      }}
    >
      {/* <img src="" /> */}
      
      <MainContainer responsive>
        <Sidebar position="left" scrollable={false}>
          <Search placeholder="Search..." />
          <ConversationList>        
        <Conversation name="Самат" lastSenderName="Самат" info="Привет">
          <Avatar src={"https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png"} name="Lilly" />
        </Conversation>
        
        <Conversation name="Аяна" lastSenderName="Вы" info="Добрый вечер">
          <Avatar src={"https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/60-512.png"} name="Joe" />
        </Conversation>
    
        <Conversation name="Канат" lastSenderName="Вы" info="Я сделала то что...">
          <Avatar src={"https://mir-s3-cdn-cf.behance.net/project_modules/disp/ce54bf11889067.562541ef7cde4.png"} name="Emily" />
        </Conversation>
        
        <Conversation name="Руслан" lastSenderName="Руслан" info="Все отлично">
          <Avatar src={"https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png"} name="Kai" />
        </Conversation>
        
      </ConversationList>
        </Sidebar>

        <ChatContainer>
          <ConversationHeader>
            <ConversationHeader.Back />
           {/*  <Avatar name="Zoe" /> */}
            <ConversationHeader.Content
              userName="Руслан"
              info="Был в сети 10 минут назад"
            />
            <ConversationHeader.Actions>
              {/* <VoiceCallButton />
              <VideoCallButton />
              <EllipsisButton orientation="vertical" /> */}
            </ConversationHeader.Actions>
          </ConversationHeader>
          <MessageList
          //     typingIndicator={<TypingIndicator content="Zoe is typing" />
          // }
          >
            <MessageSeparator content="30.05.2022" />
            <Message
              model={{
                message: "Здравствуйте",
                sentTime: "15 mins ago",
                sender: "Zoe",
                direction: "incoming",
                position: "single",
              }}
            >
              {/* <Avatar name="Zoe" />  */}
            </Message>
            <Message
              model={{
                message: "Здравствуйте",
                sentTime: "15 mins ago",
                sender: "Patrik",
                direction: "outgoing",
                position: "single",
              }}
              /* avatarSpacer */
            />
            <Message
              model={{
                message: "Как ваши дела?",
                sentTime: "15 mins ago",
                sender: "Zoe",
                direction: "outgoing",
                position: "first",
              }}
              /* avatarSpacer */
            />
            <Message
              model={{
                message: "Все отлично",
                sentTime: "15 mins ago",
                sender: "Zoe",
                direction: "incoming",
                position: "normal",
              }}
              /* avatarSpacer */
            />
              {/* <Avatar  name="Zoe" /> */}

          </MessageList>
          <MessageInput
            placeholder="Type message here"
            value={messageInputValue}
            onChange={(val) => setMessageInputValue(val)}
          />
        </ChatContainer>
      </MainContainer>
    </div>
    </>
    
  );
};

export default Chats;
