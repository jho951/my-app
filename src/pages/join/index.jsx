import React from "react"
import JoinForm from "../../components/organism/joinForm/JoinForm"
import {Container} from "../../styles/page/Layout/Container.styled"

const Index = () => {
  return (
    <Container maxWidth='688px'>
      <h2 style={{marginBottom: "30px"}}>회원가입</h2>
      <JoinForm />
    </Container>
  )
}

export default Index
