'use babel'
import React from 'react'
import { Block as Content } from '../msg-content'

export default class MsgView extends React.Component {
  render() {
    return <div>
      <Content msg={this.props.msg} />
    </div>
  }
}