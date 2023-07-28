import Data from "../data.json";
import styled from "styled-components";
import { useRef } from "react";

export default function InputReply(props: any) {
  const { commentIndex, data, setData, setIsVisible } = props;
  const inputRef = useRef<any>("");
  function changeCommentsReply(index: any) {
    if (index > -1) {
      const myReply = {
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

      const updatedData = { ...data };
      updatedData.comments[index].replies.push(myReply);
      setData(updatedData);
      setIsVisible(false);
    }
  }
  return (
    <MainWrapper>
      <Line></Line>
      <Div>
        <Avatar src={Data.currentUser.image.png}></Avatar>
        <Input ref={inputRef} placeholder="Reply message..."></Input>
        <Button onClick={() => changeCommentsReply(commentIndex)}>Reply</Button>
      </Div>
    </MainWrapper>
  );
}
const Div = styled.div`
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

const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  margin-bottom: 16px;
`;
const Line = styled.div`
  width: 1px;
  height: 100%;
  background-color: ${(props) => props.theme.colors.LightGrayishBlue};
  padding-left: 17px;
`;
