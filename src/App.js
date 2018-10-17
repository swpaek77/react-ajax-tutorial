import React , { Component, Fragment } from 'react'
import { PostContainer, HeaderContainer } from './containers'

class App extends Component{
  render(){
    return(
      <Fragment>
        <HeaderContainer/>
        <PostContainer/>
      </Fragment>
    )
  }
}

export default App