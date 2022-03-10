import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SignatureCanvas from 'react-signature-canvas'

function Signature() {
  //  const signURL = useSelector(state => state.questions.sign)
    const dispatch = useDispatch()

    function clearCanvas() {
        canvasRef.current.clear()
    }

    function trimCanvas() {
        if (canvasRef.current) {
            const signURL = canvasRef.current.getTrimmedCanvas().toDataURL('image/png')
//            console.log(signURL)
            dispatch({
                type: "sign",
                payload: {URL: signURL}
            })
        }
    }
  //  const canvasRef = useSelector(state => state.questions.sign)
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
            <div onClick={() => {clearCanvas()}}>clear</div>
        </div>
    )
}

export default Signature