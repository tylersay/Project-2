import React from 'react'
import { Link} from 'react-router-dom'
import {Wrapper, Content} from './NavBar.styles'

const NavBar = ({movieTitle}) => {
  return (
    <Wrapper>
      <Content>
        <Link exact to='/'>
          <span>Home</span>
                  </Link>
                  <span>|</span>
                  <span> {movieTitle} </span>
      </Content>
    </Wrapper>
  )
}

export default NavBar
