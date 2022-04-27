import { useState } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { Tooltip } from "react-bootstrap"
import { OverlayTrigger } from "react-bootstrap"

export const Clipboard = props => {

    const { 
      containerStyle,
      containerClassname,
      isMobile,
      placement = "top",
      text,
      textAfterCopy = "Copied",
      textBeforeCopy = "Copy",
      tooltipTrigger = ["hover", "focus"],
      cursor = "pointer",
      children
    }= props
  
    const [copied, setCopied] = useState(false)
  
    const handleMouseLeave = () => {
      if(copied){
        setTimeout(()=> {
          setCopied(false)
        }, 500)
      }
    }

    const handleCopiedSuccess = () => {
        
      setCopied(true)
    }


    return (
      <div
         onClick={()=>{
            handleCopiedSuccess()
          }}
        style={{ cursor, ...containerStyle }}
        className ={"clipboard " + containerClassname}
        onMouseLeave={handleMouseLeave}
      >
        <CopyToClipboard
          text={text}
          onCopy={handleCopiedSuccess}
        >
          <OverlayTrigger
            placement={isMobile ? "top" : placement}
            overlay = {copied 
                      ? 
                      <Tooltip id = "clipboardCopied">{textAfterCopy}</Tooltip> 
                      : 
                      <Tooltip id = "clipboardCopied">{textBeforeCopy}</Tooltip>
            }
            trigger = {tooltipTrigger}
          >
              {children}
          </OverlayTrigger>
        </CopyToClipboard>
      </div>
    )
  }