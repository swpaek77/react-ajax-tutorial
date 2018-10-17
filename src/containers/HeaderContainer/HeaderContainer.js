import React , { Component, Fragment } from 'react'
import { Header } from '../../components'
import * as service from '../../services/post'
import './HeaderContainer.css'

class HeaderContainer extends Component{

  state = {
    headerName: 'SEUNGWOO PAEK',
  }

  handleHeaderChange = async() => {

    const info = await Promise.all([
      service.getIP(),
    ])

    const randNumber = Math.floor(Math.random() * 100) + 1

    this.setState({
      headerName: `${info[0].data[0].IP} ${randNumber}`
    })
  }

  render(){
    const { headerName } = this.state
    return(
      <Fragment>
        <Header 
          headerName={headerName} 
          onClick={this.handleHeaderChange}
        />
      </Fragment>
    )
  }
}

export default HeaderContainer