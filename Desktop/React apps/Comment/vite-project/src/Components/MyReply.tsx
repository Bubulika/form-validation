import styled from "styled-components";
import Del from "../../public/images/icon-delete.svg";
import Edit from "../../public/images/icon-edit.svg";
import DeleteComment from "./DeleteComment";
import { useState } from "react";

export default function MyReply(props: any) {
  const { img, username, time, comment, score, id, data, setData } = props;

  const [isDelete, setIsDelete] = useState(false);
  const [myArr, setMyArr] = useState<any[]>([]);
  const [readOnly, setReadOnly] = useState(true);
  const [editedInputValue, setEditedInputValue] = useState(comment);

  function findDeleteComp() {
    let commentIndex: any;
    let replyIndex: any;
    const oldData = [...data.comments];
    oldData.forEach((item: any, i: any) => {
      item.replies.forEach((el: any, index: any) => {
        if (el.id === id) {
          commentIndex = i;
          replyIndex = index;
        }
      });
    });
    const newArr = [commentIndex, replyIndex];
    setMyArr(newArr);
    setIsDelete(!isDelete);
  }

  function deleteReply() {
    const updateData = { ...data };
    updateData.comments[myArr[0]].replies.splice(myArr[1], 1);
    setData(updateData);
    setIsDelete(false);
  }

  function editReply() {
    setReadOnly(!readOnly);
    let commentIndex: any;
    let replyIndex: any;
    const oldData = [...data.comments];
    oldData.forEach((item: any, i: any) => {
      item.replies.forEach((el: any, index: any) => {
        if (el.id === id) {
          commentIndex = i;
          replyIndex = index;
        }
      });
    });
    const updateData = { ...data };
    updateData.comments[commentIndex].replies[replyIndex].content =
      editedInputValue;
    setData(updateData);
  }

  return (
    <>
      <MainWrapper>
        <Line></Line>
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
            <ReplyDiv>
              <ButtonDel onClick={findDeleteComp}>Delete</ButtonDel>
              <ButtonEdit onClick={editReply}>
                {readOnly ? "Edit" : "Update"}
              </ButtonEdit>
            </ReplyDiv>
          </Wrapper2>
        </Card>
      </MainWrapper>
      <DeleteComment
        isDelete={isDelete}
        setIsDelete={setIsDelete}
        fnc={deleteReply}
      />
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

const ButtonEdit = styled.div`
  padding-left: 17px;
  height: 24px;
  background-image: url(${Edit});
  background-repeat: no-repeat;
  background-position: left;
  color: ${(props) => props.theme.colors.ModerateBlue};
  text-align: right;
`;

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

const You = styled.div`
  width: 30px;
  height: 20px;
  background-color: ${(props) => props.theme.colors.ModerateBlue};
  color: white;
  margin-right: 16px;
  text-align: center;
  border-radius: 3px;
`;
