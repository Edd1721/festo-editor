import React from 'react'
import '../styles/Editor.scss'

const Editor = (props) => {
  const { id, children } = props

  return (
    <div className="Editor">
      <div className="Editor-header">
        <div className="Editor-dot Editor-dot--red"></div>
        <div className="Editor-dot Editor-dot--yellow"></div>
        <div className="Editor-dot Editor-dot--green"></div>
      </div>
      {props.isTextArea ?
        <textarea id={id}>
          { children }
        </textarea>
        : <div id={id}></div>}
    </div>
  )
}

export default Editor
