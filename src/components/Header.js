import React, { Component } from 'react';
import {connect} from 'react-redux';

export class Header extends Component {


  render() {
    const {header, showAddress, showEmail, showPhone, showGithub, showLinkedIn, showWebsite} = this.props;
    return (
      <header className="resumify-header">
        <h1>{this.props.header.name}</h1>
        <ul>
          { this.props.showEmail ? 
            <li>
              <a href={`mailto:${this.props.header.email}?subject=Interview%20Request`}> {this.props.header.email} </a>
            </li> : ''
          }
          {
            this.props.showPhone ?
            <li>
              <a href={`tel:${this.props.header.phone}`}>{this.props.header.phone}</a>
            </li> : ''
          }
          {
            this.props.showGithub ?
            <li>
              <a href={this.props.header.github} target='_new'>{this.props.header.github}</a>
            </li> : ''
          }
          {
            this.props.showLinkedIn ?
            <li>
              <a href={this.props.header.linkedin} target='_new'>{this.props.header.linkedin}</a>
            </li> : ''
          }
          {
            this.props.showWebsite ?
            <li>
              <a href={this.props.header.website} target='_new'>{this.props.header.website}</a>
            </li> : ''
          }
        </ul>
        {
            this.props.showAddress ?
            <ul>
              <li>{this.props.header.address}</li>
              <li>{this.props.header.city}</li>
              <li>{this.props.header.state}</li>
              <li>{this.props.header.zip}</li>
              <li>{this.props.header.country}</li>
            </ul> : ''
          }
      </header>
    )
  }
}


const mapStateToProps = (state) => ({
  header: state.resume.header,
  showAddress: state.panel.showAddress,
  showEmail: state.panel.showEmail,
  showPhone: state.panel.showPhone,
  showGithub: state.panel.showGithub,
  showLinkedIn: state.panel.showLinkedIn,
  showWebsite: state.panel.showWebsite
})


export default connect(mapStateToProps, {})(Header);
