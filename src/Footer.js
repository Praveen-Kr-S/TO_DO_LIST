import React from 'react'

const Footer = ({length}) => {
    /* const year = new Date(); */
  return (
    <footer>
            
            {length} List {length === 1 ? "item" : "items"}
            
        

           {/*  <p>
            copyright &copy; {year.getDate()}:{ year.getMonth()}:{ year.getFullYear()}
            </p> */}
    </footer>
  )
}

export default Footer