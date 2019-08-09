import './modal.css'
import React, { Component } from 'react'
import ModalContainer from './ModalContainer'
import { CSSTransitionGroup } from 'react-transition-group'


const Modal = (props) => {
  return (
    <CSSTransitionGroup
      transitionName="example"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}
    >
      <ModalContainer>
        <div className="Modal">
          <div className="ModalContainer">
            <div className="Modal-header">
              <h2 className="Title">Title</h2>
              <span className="close" onClick={props.CloseModal}>[X]</span>
            </div>
            <div className="Modal-body">
              <p>Content</p>
            </div>
            <div className="Modal-Footer">
              <p>Footer</p>
            </div>
          </div>
        </div>
      </ModalContainer>
    </CSSTransitionGroup>
  )
}

export default Modal
