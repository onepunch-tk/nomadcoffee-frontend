import {AuthBottomBox, AuthTopBox, AuthWrapper} from "../../styles/auth/shared";
import {Form, SubmitButton, TextInput, Title} from "../../styles/shared";
import {Link} from "react-router-dom";
import {EPathName, makeNestedPathName} from "../../shared/utils";

function SignUp() {
    return (
        <AuthWrapper>
            <AuthTopBox>
                <Title>Nomad Coffee</Title>
                <h2>Coffee Shop 정보를 보려면 가입하세요.</h2>
                <Form>
                    <TextInput placeholder={"Email"}/>
                    <TextInput placeholder={"Username"}/>
                    <TextInput placeholder={"Password"}/>
                    <TextInput placeholder={"Confirm Password"}/>
                    <TextInput placeholder={"Github Username"}/>
                    <TextInput placeholder={"Location"}/>
                    <SubmitButton type={"submit"} value={"Sign up"}/>
                </Form>
            </AuthTopBox>
            <AuthBottomBox>
                <div>
                    <span>계정이 있으신가요?</span>
                    <Link to={makeNestedPathName(EPathName.Account,EPathName.Login)}>로그인</Link>
                </div>
            </AuthBottomBox>
        </AuthWrapper>
    );
}

export default SignUp;
