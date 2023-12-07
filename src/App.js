import React, { useRef, useState } from 'react'
import { Box, Icon, fabClasses, useMediaQuery } from '@mui/material'
import QrReader from "react-qr-reader"

const App = () => {
  const isSmall = useMediaQuery('(min-width: 600px )')
  const widthIs = isSmall? '50%':'100%'
  const qrRef = useRef(null)
  const [fileResult, setFileResult] = useState()
  const [webCamResult, setWebCamResult] = useState()

  const openDialog = () => {
    qrRef.current.openImageDialog()
  }
  const fileError = (error) => {
    if (error) {
      console.log(error)
    }
  }
  const fileScan = (result) => {
    if (result) {
      setFileResult(result)
    }
  }


  const webCamError = (error) => {
    if (error) {
      console.log(error)
    }
  }
  const webCamScan = (result) => {
    if (result) {
      setWebCamResult(result)
    }
  }


  return (
    <div style={{
      display: 'flex', 
      width:'100%',
      flexWrap:'wrap',}}>
      <div style={{
        width: widthIs,
        border: '1px solid black',
        
      }}>
        <button onClick={openDialog}>
          open qr file
        </button>

        <QrReader
          ref={qrRef} 
          delay={300} 
          onError={fileError} 
          onScan={fileScan}
          legacyMode={true}
        />
      <div>{fileResult? <h3>{fileResult}</h3> : null}</div>
      </div>


      <div style={{
        width: widthIs,
        border: '1px solid black'
      }}>
        <QrReader
          delay={300} 
          onError={webCamError} 
          onScan={webCamScan}
          facingMode='user'
        />
        <div>{webCamResult? <h3>{webCamResult}</h3> : null}</div>
      </div>
      
    </div>
  )
}

export default App
