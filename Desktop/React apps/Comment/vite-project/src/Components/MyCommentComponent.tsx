import styled from "styled-components";
import Del from "../../public/images/icon-delete.svg";
import Edit from "../../public/images/icon-edit.svg";
import DeleteComment from "./DeleteComment";
import { useState } from "react";

export default function MyReply(props: any) {
  const { img, username, time, comment, score, id, data, setData } = props;
  const [isDelete1, setIsDelete1] = useState(false);
  const [comIndex, setComIndex] = useState([]);
  const [readOnly, setReadOnly] = useState(true);
  const [editedInputValue, setEditedInputValue] = useState(comment);
  function findDeleteComp() {
    let commentIndex: any;
    const oldData = { ...data };
    oldData.comments.forEach((item: any, index: any) => {
      if (item.id === id) {
        commentIndex = index;
      }
    });
    setComIndex(commentIndex);
    setIsDelete1(!isDelete1);
  }

  function deleteReply1() {
    const updateData = { ...data };
    updateData.comments.splice(comIndex, 1);
    console.log(updateData);
    setData(updateData);
    setIsDelete1(false);
  }

  function editComment() {
    setReadOnly(!readOnly);
    const oldData = { ...data };
    const index = oldData.comments.findIndex((item: any) => {
      return item.id === id;
    });

    oldData.comments[index].content = editedInputValue;
    console.log(oldData);
    setData(oldData);
  }

  return (
    <>
      <Card>
        <Wrapper>
          <Img src={img} />
          <UserName>{username}</UserName>
          <You>you</You>
          <Time>{time}</Time>
        </Wrapper>
        <Comment
          readOnly={readOnly}
          type="text"
          value={readOnly ? comment : editedInputValue}
          onChange={(e) => setEditedInputValue(e.target.value)}
        ></Comment>
        <Wrapper2>
          <Div>{score}</Div>
          <ReplyDiv id={id}>
            <ButtonDel onClick={findDeleteComp}>Delete</ButtonDel>
            <ButtonEdit onClick={editComment}>
              {readOnly ? "Edit" : "Update"}
            </ButtonEdit>
          </ReplyDiv>
        </Wrapper2>
      </Card>
      {isDelete1 ? (
        <DeleteComment
          isDelete={isDelete1}
          setIsDelete={setIsDelete1}
          fnc={deleteReply1}
        />
      ) : null}
    </>
  );
}

const ButtonDel = styled.div`
  width: 65px;
  height: 24px;
  background-image: url(${Del});
  background-repeat: no-repeat;
  background-position: left;
  color: ${(props) => props.theme.colors.SoftRed};
  text-align: right;
  margin-right: 15px;
`;

const ButtonEdit = styled.span`
  padding-left: 17px;
  height: 24px;
  background-image: url(${Edit});
  background-repeat: no-repeat;
  background-position: left;
  color: ${(props) => props.theme.colors.ModerateBlue};
  text-align: right;
`;

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
  margin-right: 8px;
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

const Comment = styled.input`
  all: unset;
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

const You = styled.div`
  width: 30px;
  height: 20px;
  background-color: ${(props) => props.theme.colors.ModerateBlue};
  color: white;
  margin-right: 16px;
  text-align: center;
  border-radius: 3px;
`;
