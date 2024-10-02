import React from 'react'
import "./Home.css"
import {Button} from "@mui/material"
export default function Home() {
  return (
    <div className='Box'>

      <div className='Box1'>

      </div>

        
        <div className="text">
          <h1>Welcome,</h1>
          <h1>Learning starts here! </h1>

          <Button className='btn' variant="contained" color="primary">Start With an overview of the Library</Button>

          <h2 className='Manoj'>Learn With Manoj Prjapat</h2>
         </div>

         
        
        <div className="imghome">
         
          <img src="https://enacton.com/wp-content/uploads/2023/05/s2-768x531-1.png" alt=""  />
        </div>
    </div>
  )
}
