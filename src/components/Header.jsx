import React from 'react'
import styled from 'styled-components'

export const Header = ({logOut, searchParams}) => {
// const {isAuthorized} = useSelector((state) => state.auth)
// console.log(isAuthorized);
//  const dispatch = useDispatch()

  return (
   <HeaderContainer>
     <p>TodoList</p>
      {
     searchParams.has("todos") && <Button onClick={logOut}>Logout</Button>
      }   
   </HeaderContainer>
    
  )
}

const HeaderContainer = styled.header`
 padding: 5px;
 background-color: #9fbdf4;
 color: #fff;
 display: flex;
 justify-content: space-around;
 align-items: center;
 p{
  font-weight: bold;
  font-size: 25px;
 }
`
const Button = styled.button`
 
 padding: 10px 25px;
 border-radius: 10px;
 border: none;
 background-color: #4e70f8;
 color: #fff;
 font-size: 20px;
 cursor: pointer;
`