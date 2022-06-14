import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
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

    const currentPage = useSelector(state => state.currentPage)
    const canvasRef = React.useRef()

    return (
        <SignContainer>
            <LegalCB />
            <LegalDamages />
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