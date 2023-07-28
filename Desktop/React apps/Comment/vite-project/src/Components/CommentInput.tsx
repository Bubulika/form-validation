import styled from "styled-components";
import Data from "../data.json";
import { useRef } from "react";

export default function CommentInput(props: any) {
  const { data, setData } = props;
  const inputRef = useRef("");

  const addComment = () => {
    const updatedComments = [...data.comments];
    updatedComments.push({
      id: Math.random(),
      content: inputRef.current.value,
      createdAt: "1 month ago",
      score: 12,
      user: {
        image: {
          png: "./images/avatars/image-juliusomo.png",
          webp: "./images/avatars/image-juliusomo.webp",
        },
        username: "juliusomo",
      },
      replies: [],
    });
    inputRef.current.value = "";
    setData({ ...data, comments: updatedComments });
  };

  console.log(data);
  return (
    <Div>
      <Avatar src={Data.currentUser.image.png}></Avatar>
      <Input placeholder="Add a comment..." ref={inputRef}></Input>
      <Button onClick={addComment}>SEND</Button>
    </Div>
  );
}
const Div = styled.div`
  width: 100%;
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
