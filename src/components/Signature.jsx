import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SignatureCanvas from 'react-signature-canvas'

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
        <div>
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
        </div>
    )
}

export default Signature