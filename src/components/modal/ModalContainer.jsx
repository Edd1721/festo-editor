import React, { Component } from 'react'
import reactDOM from 'react-dom'

class ModalContainer extends Component {
  render () {
    this.modalElement = document.getElementById('Modal')
    this.modalElement.classList.add('Modal')

    return reactDOM.createPortal(
      this.props.children,
      this.modalElement
    )
  }

  componentWillUnmount () {
    this.modalElement.classList.remove('Modal')
  }
}

export default ModalContainer
