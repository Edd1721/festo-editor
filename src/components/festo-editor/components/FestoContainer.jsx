
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Editor from 'src/components/festo-editor/components/Editor'
import { sample } from 'src/components/festo-editor/utils/fixtures'
import FestoEditor from '../lib/festo-editor'
import '../styles/FestoContainer.scss'

// Editor css
import '../lib/festo-editor.css'
// import '../styles/themes/platzi.css'
import '../lib/themes/dracula.css'
import '../lib/addons/hint/show-hint.css'

//Editor supported languages
import '../lib/modes/css/css'
import '../lib/modes/htmlmixed/htmlmixed'
import '../lib/modes/javascript/javascript'

import '../lib/addons/search/search'
import '../lib/addons/hint/show-hint.js'
import '../lib/addons/hint/javascript-hint.js'

class FestoContainer extends Component {
  state = {
    showModal: false
  }

  createEditor () {
    const area = document.getElementById(this.props.editorId)
    const cm = FestoEditor(area, {
      value: sample,
      theme: 'dracula',
      extraKeys: {"Ctrl-Space": "autocomplete"},
      mode: {name: "javascript", globalVars: true},
      autofocus: true,
      lineNumbers: true,
      tabSize: 2,
      firstLineNumber: 0,
      gutters: [],
      styleSelectedText: true,
      matchBrackets: true,
      autoCloseBrackets: true,
      lineWrapping: true,
      statusBar: false,
    })
  }

  componentDidMount () {
    this.createEditor()
  }

  render () {
    const person = {name: 'pepe'}

    return (
      <div className="FestoContainer">
        <Editor id={this.props.editorId} isTextArea={false}>
        </Editor>
      </div>
    )
  }
}

FestoContainer.propTypes = {
  editorId: PropTypes.string
}

FestoContainer.defaultProps = {
  editorId: 'editorArea'
}

export default FestoContainer
