import { Form, SubmitButton, TextInput, Title } from "../../styles/shared";
import { Link } from "react-router-dom";
import { EPathName, makeNestedPathName } from "../../shared/utils";
import {
  AuthBottomBox,
  AuthTopBox,
  AuthWrapper,
} from "../../styles/auth/shared";
import { InferType, object, string } from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "../../components/ErrorMessage";
import { useMutation } from "@apollo/client";
import { LOGiN } from "../../shared/graphql/user/mutations";
import { isLoggedInVar } from "../../states/apolloVar";

const loginSchema = object({
  username: string().required("username is required"),
  password: string().required("password is required"),
});

interface ILogin extends InferType<typeof loginSchema> {
  username: string;
  password: string;
}

function LogIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<ILogin>({ resolver: yupResolver(loginSchema) });
  const [loginFn, { loading, reset }] = useMutation(LOGiN);
  const loginValidator = async ({ username, password }: ILogin) => {
    const { data } = await loginFn({ variables: { username, password } });
    if (data) {
      const {
        token,
        result: { ok, error },
      } = data.login;
      if (!ok) {
        if (error?.toLowerCase().includes("user")) {
          setError("username", { message: error }, { shouldFocus: true });
        } else if (error?.includes("password")) {
          setError("password", { message: error }, { shouldFocus: true });
        }
      }
      localStorage.setItem("token", token as string);
      isLoggedInVar(true);
    }
  };
  return (
    <AuthWrapper>
      <AuthTopBox>
        <Title>Nomad Coffee</Title>
        <Form onSubmit={handleSubmit(loginValidator)}>
          <TextInput
            {...register("username")}
            type="text"
            placeholder="User Name"
          />
          <ErrorMessage errors={errors.username} />
          <TextInput
            {...register("password")}
            type="password"
            placeholder="Password"
          />
          <ErrorMessage errors={errors.password} />
          <SubmitButton
            type={"submit"}
            disabled={loading}
            value={loading ? "loading" : "Log in"}
          />
        </Form>
      </AuthTopBox>
      <AuthBottomBox>
        <div>
          <span>계정이 없으신가요?</span>
          <Link to={makeNestedPathName(EPathName.Account, EPathName.SignUp)}>
            가입하기
          </Link>
        </div>
      </AuthBottomBox>
    </AuthWrapper>
  );
}

export default LogIn;
