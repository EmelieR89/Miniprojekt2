import React, { Component } from "react"
import {RouteComponentProps} from "react-router-dom"

interface Props extends RouteComponentProps {}

export default class CartPage extends Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  render() {
  return (
    <h1>This is carrrrt</h1>
  )}
}