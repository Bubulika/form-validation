import styled from "styled-components";
import reply from "../../public/images/icon-reply.svg";
import { useState } from "react";
import InputReply from "./InputReply";

export default function CommentComponent(props: any) {
  const { img, username, time, comment, score, id, data, setData } = props;
  const [commentIndex, setCommentIndex] = useState(-1);
  const [isVisible, setIsVisible] = useState(false);
  function handleReply(e: any) {
    const itemIndex = data.comments.findIndex((item: any) => {
      return +e.target.id === item.id;
    });
    setIsVisible(!isVisible);
    setCommentIndex(itemIndex);
  }

  return (
    <>
      <Card>
        <Wrapper>
          <Img src={img} />
          <UserName>{username}</UserName>
          <Time>{time}</Time>
        </Wrapper>
        <Comment>{comment}</Comment>
        <Wrapper2>
          <Div>{score}</Div>
          <ReplyDiv onClick={handleReply} id={id}>
            <Reply src={reply}></Reply>
            Reply
          </ReplyDiv>
        </Wrapper2>
      </Card>
      {isVisible && (
        <InputReply
          data={data}
          setData={setData}
          commentIndex={commentIndex}
          setIsVisible={setIsVisible}
        />
      )}
    </>
  );
}

const Card = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${(props: any) => props.theme.colors.White};
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
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
  width: 100%;
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
const Reply = styled.img`
  margin-right: 8px;
`;

// onClick={(e: any) => {
//   const replObj = {
//     id: 2,
//     content: { input },

//     createdAt: "2 weeks ago",
//     score: 5,
//     user: {
//       image: {
//         png: "./images/avatars/image-maxblagun.png",
//         webp: "./images/avatars/image-maxblagun.webp",
//       },
//       username: "maxblagun",
//     },
//   };

//   if (data.comments.id === e.target.id) {
//     console.log(data.comments.replies);
//     setData(...data, data.comments.replies.push(replObj));
//   }
// }}
