import styled from "styled-components";
import {BaseBox, BaseFlex, Form, SubmitButton, TextInput, Title} from "../../styles/shared";
import {Link} from "react-router-dom";
import {EPathName, makeNestedPathName} from "../../shared/utils";

const Wrapper = styled(BaseFlex)`
  flex-direction: column;
  width: 25rem;
`;


const TopBox = styled(BaseBox)`
  padding: 35px 40px;
`;

const BottomBox = styled(BaseBox)`
  margin-top: 30px;
  padding: 25px 0;
  font-size: 1rem;
  a {
    font-weight: 600;
    color: ${props=>props.theme.deepAccent};
    margin-left: 5px;
  }
`;


function LogIn() {
    return (
        <Wrapper>
            <TopBox>
                <Title>Nomad Coffee</Title>
                <Form>
                    <TextInput type="text" placeholder="User Name"/>
                    <TextInput type="password" placeholder="Password"/>
                    <SubmitButton type={"submit"} value={"Log in"}/>
                </Form>
            </TopBox>
            <BottomBox>
                <div>
                    <span>계정이 없으신가요?</span>
                    <Link to={makeNestedPathName(EPathName.Account,EPathName.SignUp)}>가입하기</Link>
                </div>
            </BottomBox>
        </Wrapper>
    );
}

export default LogIn;