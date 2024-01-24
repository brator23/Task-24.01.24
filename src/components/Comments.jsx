import React, {} from 'react'
import { Link } from 'react-router-dom'


const Comments = ({name, phone, id}) => {
   

  return (
    <div>
      <h3>{name}</h3>
      <h5>{phone}</h5>
      <Link to={`/datail/${id}`}>
        <button>date</button>
      </Link>
    </div>
  )
}

export default Comments
