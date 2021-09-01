import React, { ReactElement } from 'react'

export default function App(): ReactElement {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "column"
      }}
    >
      <p>Invillia</p>
      <strong>A invillia é uma empresa excelente!</strong>
      <strong>tech na veia!</strong>
      <strong>tech na veia! 2</strong>
    </div>
  )
}
