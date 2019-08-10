
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Editor from 'src/components/festo-editor/components/Editor'
import { sample } from 'src/components/festo-editor/utils/fixtures'
import { editorConfig } from 'src/components/festo-editor/festo.config'
import FestoEditor from '../lib/festo-editor'
import 'src/components/festo-editor/styles/FestoContainer.scss'

// Editor css
import '../lib/festo-editor.css'
// import '../styles/themes/platzi.css'
import '../lib/themes/dracula.css'
import '../lib/addons/hint/show-hint.css'

//Editor supported languages
import '../lib/modes/css/css'
import '../lib/modes/htmlmixed/htmlmixed'
import '../lib/modes/javascript/javascript'

// Editor addons
import '../lib/addons/search/search'
import '../lib/addons/hint/show-hint'
import '../lib/addons/hint/javascript-hint'
import '../lib/addons/edit/closetag'

class FestoContainer extends Component {
  state = {
    editor: {},
    editorContent: ''
  }

  createEditor () {
    const area = document.getElementById(this.props.editorId)
    const options = {...editorConfig, ...{ value: sample }}
    this.setState({
      editor: FestoEditor(area, options)
    })

    // cm.on('change', function (cm, obj) {
    //   console.log('CHnged!!', obj)
    // })

    // cm.getValue() => Get editors content
    // cm.setValue(value: string) => Set editors content
    // cm.getLine(value: number) => Get line content
    // cm.lineCount() => Get number of lines in editor
  }

  componentDidMount () {
    this.createEditor()
  }

  handleClick = e => {
    e.preventDefault()
    let ed = this.state.editor.getValue()
    console.log(ed)
    console.log(ed === sample)
    console.log(eval(ed))
  }

  render () {
    return (
      <div className="FestoContainer">
        <Editor id={this.props.editorId} isTextArea={false}>
        </Editor>
        <div>
          <button className="button button-success" onClick={this.handleClick}>Submit</button>
        </div>
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
