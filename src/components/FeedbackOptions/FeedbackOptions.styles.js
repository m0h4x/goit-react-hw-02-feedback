import styled from '@emotion/styled';

export const Button = styled.button`
  background-color: bisque;
  border: 1px solid rgb(218, 194, 164);
  border-radius: 3px;
  font-size: 20px;
  padding: 5px 10px;
  transition: box-shadow 50ms linear, background-color 50ms linear,
    transform 50ms linear;
  box-shadow: none;

  &:active {
    background-color: rgb(199, 167, 127);
    box-shadow: 0 5px #666;
    transform: translateY(4px);

    &:hover {
      box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
        0 17px 50px 0 rgba(0, 0, 0, 0.19);
    }
  }
`;
export const Options = styled.div`
  display: flex;
  width: 250px;
  justify-content: space-around;
`;
// export const Text = styled.h3``;
