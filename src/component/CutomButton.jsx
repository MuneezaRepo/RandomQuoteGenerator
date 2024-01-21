import React from 'react'

const CutomButton = ({text, onClick})=>{
  return (
    <div>
        <button
            type="button"

            style={{ width: "150px", background: "#444444", borderRadius: "4px", color:"white", marginTop:"10px"}}
            onClick={onClick}
         
          >
            {text}
          </button>
    </div>
  )
}

export default CutomButton;
