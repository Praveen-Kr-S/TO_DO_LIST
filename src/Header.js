import React from 'react'

const Header = /* (props.title) */ ({title}) => {

    /* const headerStyle = {
        color : 'steelblue',
        backgroundColor : 'lightgreen'
    } */

  return (
    <header /* style = {{
        color : 'blue',
        backgroundColor : 'lightgray'
    }} */>
        {/* <h1>{props.title}</h1> */}
        <h1>{title}</h1>
    </header>
  )
}

Header.defaultProps = {
  title : "To do list"
}
export default Header