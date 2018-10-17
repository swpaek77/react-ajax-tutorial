import React from 'react'
import { Button } from 'semantic-ui-react'
import './Header.css'

const Header = ({headerName, onClick}) => {
  return (
    <div className="Header">
      {headerName}
      <Button
        primary
        className="header-button"
        content="Header Change"
        onClick={
          () => onClick()
        }
      />
    </div>
  )
}

export default Header