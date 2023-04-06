import styled from "styled-components";
import {BaseBox, BaseFlex, Form, SubmitButton, TextInput, Title} from "../../styles/shared";
import {Link} from "react-router-dom";
import {EPathName, makeNestedPathName} from "../../shared/utils";
import {AuthBottomBox, AuthTopBox, AuthWrapper} from "../../styles/auth/shared";



function LogIn() {
    return (
        <AuthWrapper>
            <AuthTopBox>
                <Title>Nomad Coffee</Title>
                <Form>
                    <TextInput type="text" placeholder="User Name"/>
                    <TextInput type="password" placeholder="Password"/>
                    <SubmitButton type={"submit"} value={"Log in"}/>
                </Form>
            </AuthTopBox>
            <AuthBottomBox>
                <div>
                    <span>계정이 없으신가요?</span>
                    <Link to={makeNestedPathName(EPathName.Account,EPathName.SignUp)}>가입하기</Link>
                </div>
            </AuthBottomBox>
        </AuthWrapper>
    );
}

export default LogIn;
