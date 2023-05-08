import { useState } from "react";
import styled from "styled-components";

export default function Form() {
  const [formData, setFormData] = useState<formData>({
    firstName: "",
    lastName: "",
    email: "",
    pass: "",
  });

  interface formData {
    firstName: string;
    lastName: string;
    email: string;
    pass: string;
  }

  const handleInputChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.pass
    ) {
      alert("Please fill out all fields.");
      return;
    }
  };

  console.log(formData);
  return (
    <InputForm onSubmit={handleFormSubmit}>
      <Input
        placeholder="First Name"
        name="firstName"
        value={formData.firstName}
        onChange={handleInputChange}
      />
      <Input
        placeholder="Last Name"
        name="lastName"
        value={formData.lastName}
        onChange={handleInputChange}
      />
      <Input
        placeholder="Email Address"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
      />
      <Input
        placeholder="Password"
        name="pass"
        value={formData.pass}
        onChange={handleInputChange}
      />
      <FormButton>CLAIM YOUR FREE TRIAL</FormButton>
      <MiniContainer>
        <Parag>
          By clicking the button, you are agreeing to our{" "}
          <RedText>Terms and Services</RedText>
        </Parag>
      </MiniContainer>
    </InputForm>
  );
}

const InputForm = styled.form`
  width: 100%;
  height: 442px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  box-shadow: 0px 8px 0px rgba(0, 0, 0, 0.14688);
  border-radius: 10px;
  background: ${(props) => props.theme.colors.White};
  margin-top: 24px;
`;

const Input = styled.input`
  width: 100%;
  height: 56px;
  outline: none;
  padding-left: 19.5px;
  background: #ffffff;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.colors.GrayishBlue};
  margin-bottom: 16px;
`;

const FormButton = styled.button`
  all: unset;
  width: 100%;
  height: 56px;
  background: ${(props) => props.theme.colors.Green};
  box-shadow: inset 0px -4px 0px rgba(0, 0, 0, 0.0908818);
  border-radius: 5px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 26px;
  text-align: center;
  letter-spacing: 1px;
  color: ${(props) => props.theme.colors.White};
`;

const MiniContainer = styled.div`
  width: 100%;
  height: 42px;
  padding: 0 15px;
  margin-top: 8px;
`;
const Parag = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 21px;
  text-align: center;
  color: #bab7d4;
`;

const RedText = styled.span`
  color: ${(props) => props.theme.colors.Red};
`;
