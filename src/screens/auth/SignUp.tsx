import {
  AuthBottomBox,
  AuthTopBox,
  AuthWrapper,
} from "../../styles/auth/shared";
import { Form, SubmitButton, TextInput, Title } from "../../styles/shared";
import { Link } from "react-router-dom";
import { EPathName, makeNestedPathName } from "../../shared/utils";
import { object, string, ref, InferType } from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "../../components/ErrorMessage";

const signupSchema = object({
  email: string().email().required(),
  username: string().required().min(5, "min 5 characters"),
  password: string().required().min(8, "min 8 characters"),
  confirmPassword: string()
    .required()
    .oneOf([ref("password")], "Passwords must match"),
  location: string(),
  githubUsername: string(),
});

interface ISignup extends InferType<typeof signupSchema> {
  email: string;
  username: string;
  password: string;
  location: string;
  githubUsername: string;
}

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignup>({ resolver: yupResolver(signupSchema) });
  const signupValidator = ({
    email,
    username,
    password,
    location,
    githubUsername,
  }: ISignup) => {
    console.log(email, username, password, location, githubUsername);
  };
  return (
    <AuthWrapper>
      <AuthTopBox>
        <Title>Nomad Coffee</Title>
        <h2>Coffee Shop 정보를 보려면 가입하세요.</h2>
        <Form onSubmit={handleSubmit(signupValidator)}>
          <TextInput {...register("email")} placeholder={"Email"} />
          <ErrorMessage errors={errors.email} />
          <TextInput {...register("username")} placeholder={"Username"} />
          <ErrorMessage errors={errors.username} />
          <TextInput
            {...register("password")}
            type={"password"}
            placeholder={"Password"}
          />
          <ErrorMessage errors={errors.password} />
          <TextInput
            {...register("confirmPassword")}
            type={"password"}
            placeholder={"Confirm Password"}
          />
          <ErrorMessage errors={errors.confirmPassword} />
          <TextInput {...register("location")} placeholder={"Location"} />
          <TextInput
            {...register("githubUsername")}
            placeholder={"Github Username"}
          />
          <TextInput {...register("location")} placeholder={"Location"} />
          <SubmitButton type={"submit"} value={"Sign up"} />
        </Form>
      </AuthTopBox>
      <AuthBottomBox>
        <div>
          <span>계정이 있으신가요?</span>
          <Link to={makeNestedPathName(EPathName.Account, EPathName.Login)}>
            로그인
          </Link>
        </div>
      </AuthBottomBox>
    </AuthWrapper>
  );
}

export default SignUp;
