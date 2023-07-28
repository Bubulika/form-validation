import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "./Components/GlobalStyles";
import { defaultTheme } from "./Themes/DefaultTheme";
import { Helmet } from "react-helmet";
import CommentComponent from "./Components/CommentComponent";
import { useState } from "react";
import Data from "./data.json";
import Reply from "./Components/Reply";
import MyReply from "./Components/MyReply";
import CommentInput from "./Components/CommentInput";
import MyCommentComponent from "./Components/MyCommentComponent";

function App() {
  const [data, setData] = useState(Data);
  const [isVisible, setIsVisible] = useState(false);
  console.log(data.comments[1].replies);
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Rubik:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <BodyWrapper>
        {data.comments.map((item) => (
          <div>
            {item.user.username === "juliusomo" ? (
              <MyCommentComponent
                id={item.id}
                img={item.user.image.png}
                username={item.user.username}
                time={item.createdAt}
                comment={item.content}
                score={item.score}
                data={data}
                setData={setData}
              />
            ) : (
              <CommentComponent
                id={item.id}
                img={item.user.image.png}
                username={item.user.username}
                time={item.createdAt}
                comment={item.content}
                score={item.score}
                data={data}
                setData={setData}
                isVisible={isVisible}
                setIsVisible={setIsVisible}
              />
            )}

            {item.replies.map((el) =>
              el.user.username === "juliusomo" ? (
                <MyReply
                  id={el.id}
                  img={el.user.image.png}
                  username={el.user.username}
                  time={el.createdAt}
                  comment={el.content}
                  score={el.score}
                  data={data}
                  setData={setData}
                />
              ) : (
                <Reply
                  id={el.id}
                  img={el.user.image.png}
                  username={el.user.username}
                  time={el.createdAt}
                  comment={el.content}
                  score={el.score}
                  data={data}
                  setData={setData}
                  isVisible={isVisible}
                  setIsVisible={setIsVisible}
                />
              )
            )}
          </div>
        ))}
        <CommentInput data={data} setData={setData}></CommentInput>
      </BodyWrapper>
    </ThemeProvider>
  );
}

export default App;

const BodyWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 16px;
  display: flex;
  flex-direction: column;
`;
