// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #24263c;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SubContainer = styled.div`
  background-color: #434451;
  border: none;
  border-radius: 8px;
  height: 300px;
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 576px) {
    width: 90vw;
  }
`

export const MainHeading = styled.h1`
  color: #ffffff;
  font-size: 30px;
  font-family: 'Roboto';
`
export const Paragraph = styled.p`
  color: #f8fafc;
  font-size: 15px;
  font-family: 'Roboto';
`
export const Input = styled.input`
  border: none;
  border-radius: 4px;
  background-color: #edeeff;
  outline: none;
  font-size: 10px;
  padding: 5px;
  color: #383a4e;
  width: 60%;
`

export const ErrText = styled.p`
  color: #ef4444;
  font-size: 10px;
  font-family: 'Roboto';
`
