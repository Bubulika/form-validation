import styled from "styled-components";
import reply from "../../public/images/icon-reply.svg";
import Data from "../data.json";
import { useRef, useState } from "react";

export default function Reply(props: any) {
  const { img, username, time, comment, score, id, data, setData } = props;

  //const [input, setInput] = useState(false);
  const inputRef = useRef("");
  const [isReply, setIsReply] = useState(false);
  function findReplyIndex() {
    let replyIndex;
    //let commentId;
    let commentIndex;

    data.comments.forEach((item: any, i: any) => {
      item.replies.forEach((el: any, index: any) => {
        if (id === el.id) {
          replyIndex = index;
          commentIndex = i;
        }
      });
    });
    const arr: any = [commentIndex, replyIndex];
    const addReply = {
      id: Math.random(),
      content: inputRef.current.value,
      createdAt: "2 days ago",
      score: 2,
      replyingTo: "ramsesmiron",
      user: {
        image: {
          png: "./images/avatars/image-juliusomo.png",
          webp: "./images/avatars/image-juliusomo.webp",
        },
        username: "juliusomo",
      },
    };
    const newData = { ...data };
    newData.comments[arr[0]].replies.push(addReply);
    setData(newData);
    setIsReply(!isReply);
  }

  return (
    <>
      <MainWrapper>
        <Line></Line>
        <Card>
          <Wrapper>
            <Img src={img} />
            <UserName>{username}</UserName>
            <Time>{time}</Time>
          </Wrapper>
          <Comment>{comment}</Comment>
          <Wrapper2>
            <Div>{score}</Div>
            <ReplyDiv onClick={() => setIsReply(!isReply)}>
              <Reply1 src={reply}></Reply1>
              Reply
            </ReplyDiv>
          </Wrapper2>
        </Card>
      </MainWrapper>
      {isReply && (
        <MainWrapper1>
          <Line1></Line1>
          <Div1>
            <Avatar src={Data.currentUser.image.png}></Avatar>
            <Input ref={inputRef} placeholder="Reply message..."></Input>
            <Button onClick={findReplyIndex}>Reply</Button>
          </Div1>
        </MainWrapper1>
      )}
    </>
  );
}

const Card = styled.div`
  width: 85%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${(props: any) => props.theme.colors.White};
  border-radius: 8px;
  padding: 16px;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 16px;
`;
const Img = styled.img`
  width: 32px;
  height: 32px;
`;
const UserName = styled.div`
  font-family: "Rubik";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  margin-left: 16px;
  margin-right: 16px;
  color: ${(props) => props.theme.colors.DarkBlue};
`;

const Time = styled.div`
  font-family: "Rubik";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.colors.GrayishBlue};
`;

const Comment = styled.p`
  font-family: "Rubik";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.colors.GrayishBlue};
`;

const Wrapper2 = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
`;

const Div = styled.div`
  width: 100px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.LightGray};
  font-family: "Rubik";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: ${(props) => props.theme.colors.ModerateBlue};
  border-radius: 10px;
`;
const ReplyDiv = styled.div`
  display: flex;
  align-items: center;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.colors.ModerateBlue};
  cursor: pointer;
`;
const Reply1 = styled.img`
  margin-right: 8px;
`;

const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;
const Line = styled.div`
  width: 1px;
  height: 100%;
  background-color: ${(props) => props.theme.colors.LightGrayishBlue};
  padding-left: 17px;
`;
const Div1 = styled.div`
  width: 85%;
  min-height: 144px;
  display: flex;
  border-radius: 8px;
  background-color: white;
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  margin-left: 24px;
  margin-top: 24px;
`;

const Input = styled.input`
  outline: none;
  width: 100%;
  min-height: 72px;
  margin: 24px 16px;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.colors.LightGray};
  font-family: "Rubik";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  &::placeholder {
    font-family: "Rubik";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
`;

const Button = styled.button`
  width: 104px;
  height: 35px;
  background-color: ${(props) => props.theme.colors.ModerateBlue};
  margin-right: 24px;
  margin-top: 24px;
  border-radius: 8px;
  color: white;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  border: none;
`;

const MainWrapper1 = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  margin-bottom: 16px;
`;
const Line1 = styled.div`
  width: 1px;
  height: 100%;
  background-color: ${(props) => props.theme.colors.LightGrayishBlue};
  padding-left: 17px;
`;
