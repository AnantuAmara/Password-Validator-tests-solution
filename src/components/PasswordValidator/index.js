// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  SubContainer,
  MainHeading,
  Paragraph,
  Input,
  ErrText,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const onChangePassword = event => setPassword(event.target.value)
  const Length = password.length
  console.log(Length)
  return (
    <MainContainer>
      <SubContainer>
        <MainHeading>Password Validator</MainHeading>
        <Paragraph>Check how strong and secure is your password</Paragraph>
        <Input type="password" onChange={onChangePassword} />
        {Length < 8 ? (
          <ErrText>Your password must be at least 8 characters</ErrText>
        ) : null}
      </SubContainer>
    </MainContainer>
  )
}

export default PasswordValidator
