import React from 'react'
import { useDispatch } from 'react-redux'
import SignatureCanvas from 'react-signature-canvas'
import styled from 'styled-components'
import LegalCB from './Legal/CB'
import LegalDamages from './Legal/Damages'

const SignContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 2em;
`

const SignIntro = styled.div`
  font-family: Tahoma, sans-serif;
  font-size: 0.8em;
  text-decoration: underline;
  margin-top: 5em;
  margin-bottom: 1em;
`

const SignButton = styled.button`
  margin-top: 0.5em;
  background-color: blue;
  color: white;
  border: white;
`

function Signature() {
  const dispatch = useDispatch()
  const canvasRef = React.useRef()

  function clearCanvas() {
    canvasRef.current.clear()
  }

  function trimCanvas() {
    if (canvasRef.current) {
      const signURL = canvasRef.current
        .getTrimmedCanvas()
        .toDataURL('image/png')
      dispatch({
        type: 'updateAnswer',
        payload: { category: 'questions', question: 'sign', value: signURL },
      })
    }
  }

  return (
    <SignContainer>
      <LegalCB />
      <LegalDamages />
      <SignIntro>Please sign here:</SignIntro>
      <SignatureCanvas
        ref={canvasRef}
        penColor="black"
        onEnd={() => {
          trimCanvas()
        }}
        canvasProps={{
          width: 500,
          height: 200,
          className: 'sigCanvas',
          style: { border: '1px solid blue' },
        }}
      />
      <SignButton
        onClick={() => {
          clearCanvas()
        }}
      >
        clear
      </SignButton>
    </SignContainer>
  )
}

export default Signature
