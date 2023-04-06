import styled from "styled-components";
export const BaseFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BaseBox = styled(BaseFlex)`
  width: 100%;
  flex-direction: column;
  background-color: ${props => props.theme.shallowBg};
  border: 1px solid ${props=>props.theme.border};
  border-radius: 5px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
`;

export const TextInput = styled.input`
  height: 35px;
  padding: 10px;
  background-color: #fafafa;
  border: none;
  border-radius: 5px;
  margin: 5px 0;
  
  &:focus {
    outline-color: ${props => props.theme.deepAccent};
  }

  &::placeholder {
    color: #7f8c8d;
  }
`;

export const SubmitButton = styled.input`
  border: none;
  padding: 10px 0;
  background-color: ${props => props.theme.deepAccent};
  margin-top: 10px;
  color: ${props=>props.theme.mainFont};
  font-weight: 500;
  font-size: 1rem;
  border-radius: 10px;
  cursor: pointer;
  &:focus {
    outline-color: ${props => props.theme.deepAccent};
  }
`;

export const Title = styled.h2`
  color: ${props => props.theme.mainFont};
  font-size: 2rem;
  font-weight: bold;
  font-style: italic;
  text-align: center;
`;
