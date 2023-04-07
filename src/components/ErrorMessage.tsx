import { FieldError } from "react-hook-form";
import styled from "styled-components";

interface IErrorsProps {
  errors: FieldError | undefined;
}

const ErrorText = styled.span`
  font-weight: bold;
  font-size: 0.65rem;
  color: red;
`;

export function ErrorMessage({ errors }: IErrorsProps) {
  return <>{errors && <ErrorText>{`*${errors.message}!`}</ErrorText>}</>;
}
