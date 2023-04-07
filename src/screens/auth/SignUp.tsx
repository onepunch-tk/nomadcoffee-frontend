import {
  AuthBottomBox,
  AuthTopBox,
  AuthWrapper,
} from "../../styles/auth/shared";
import { Form, SubmitButton, TextInput, Title } from "../../styles/shared";
import { Link, useNavigate } from "react-router-dom";
import { EPathName, makeNestedPathName } from "../../shared/utils";
import { InferType, object, ref, string } from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "../../components/ErrorMessage";
import { useMutation } from "@apollo/client";
import { CREATE_ACCOUNT } from "../../shared/graphql/user/mutations";

const signupSchema = object({
  email: string().email().required(),
  username: string().required().min(5, "min 5 characters"),
  password: string().required().min(8, "min 8 characters"),
  confirmPassword: string()
    .required()
    .oneOf([ref("password")], "Passwords must match"),
  name: string(),
  location: string(),
  githubUsername: string(),
});

interface ISignup extends InferType<typeof signupSchema> {
  email: string;
  username: string;
  password: string;
  name: string;
  location: string;
  githubUsername: string;
}

function SignUp() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<ISignup>({ resolver: yupResolver(signupSchema) });
  const [signupFn, { loading }] = useMutation(CREATE_ACCOUNT);
  const navigate = useNavigate();
  const signupValidator = async ({
    email,
    username,
    password,
    name,
    location,
    githubUsername,
  }: ISignup) => {
    const { data } = await signupFn({
      variables: {
        email,
        username,
        password,
        name,
        location,
        githubUsername,
      },
    });
    if (data?.createAccount) {
      const {
        user,
        result: { ok, error },
      } = data.createAccount;

      if (!ok) {
        if (error?.toLowerCase().includes("username")) {
          setError("username", { message: error }, { shouldFocus: true });
        } else if (error?.toLowerCase().includes("email")) {
          setError("email", { message: error }, { shouldFocus: true });
        }
      }

      navigate(makeNestedPathName(EPathName.Account, EPathName.Login), {
        state: { user },
        replace: true,
      });
    }
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
          <TextInput {...register("name")} placeholder={"Name"} />
          <TextInput
            {...register("githubUsername")}
            placeholder={"Github Username"}
          />
          <TextInput {...register("location")} placeholder={"Location"} />
          <SubmitButton
            type={"submit"}
            disabled={loading}
            value={loading ? "loading" : "Sign up"}
          />
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
