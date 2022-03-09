import React, { useRef } from 'react'
import SignatureCanvas from 'react-signature-canvas'

function Signature() {

    function clearCanvas() {
        canvasRef.current.clear()
    }

    const formatIntoPng = () => {
        if (canvasRef.current) {
          const dataURL = canvasRef.current.toDataURL();
          return dataURL;
        }
      };    

    const canvasRef = React.useRef({})
    return (
        <div>
            <p>Please sign here:</p>
            <SignatureCanvas
                ref={ canvasRef }
                penColor='black'
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