import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SignatureCanvas from 'react-signature-canvas'
import styled from 'styled-components'

const SignContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

function Signature() {
    const dispatch = useDispatch()

    function clearCanvas() {
        canvasRef.current.clear()
    }

    function trimCanvas() {
        if (canvasRef.current) {
            const signURL = canvasRef.current.getTrimmedCanvas().toDataURL('image/png')
            dispatch({
                type: "updateAnswer",
                payload: {question: "sign", value: signURL}
            })
        }
    }
    
    const canvasRef = React.useRef()
    return (
        <SignContainer>
            <p>Please sign here:</p>
            <SignatureCanvas
                ref={ canvasRef }
                penColor='black'
                onEnd={() => {trimCanvas()}}
                canvasProps={{
                    width: 500, height: 200,
                    className: 'sigCanvas',
                    style: {border: '1px solid blue'}
                }}
            />
            <button onClick={() => {clearCanvas()}}>clear</button>
        </SignContainer>
    )
}

export default Signature