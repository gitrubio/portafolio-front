import React from 'react'

export default function BtnSend(props : any) {
  return (
<div className="wrappe_buttom">
  <a href="#" {...props} style={{ color: props.color, border: `2px solid ${props.color}`}}><span>Enviar!</span></a>
</div>  )
}
