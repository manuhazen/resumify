import React, { Component } from 'react';
import {connect} from 'react-redux';

export class Header extends Component {


  render() {

    return (
      <header className="resumify-header">
        <h1 className="is-size-1 has-text-weight-bold	">{this.props.header.name}</h1>
        <ul className="has-text-justified	">
          { this.props.showEmail ? 
            <h3 className="header-personal_info">
              <a href={`mailto:${this.props.header.email}?subject=Interview%20Request`}> {this.props.header.email} </a>
            </h3> : ''
          }
          {
            this.props.showPhone ?
            <h3 className="header-personal_info">
              <a href={`tel:${this.props.header.phone}`}>{this.props.header.phone}</a>
              <br />
            </h3>  : ''
          }
          {
            this.props.showGithub ?
            <h3 className="header-personal_info">
              <a href={this.props.header.github} target='_new'>{this.props.header.github}</a>
            </h3> : ''
          }
          {
            this.props.showLinkedIn ?
            <h3 className="header-personal_info">
              <a href={this.props.header.linkedin} target='_new'>{this.props.header.linkedin}</a>
            </h3> : ''
          }
          {
            this.props.showWebsite ?
            <h3 className="header-personal_info">
              <a href={this.props.header.website} target='_new'>{this.props.header.website}</a>
            </h3> : ''
          }
        </ul>
        {
            this.props.showAddress ?
            <ul className="has-text-justified	">
              <li className="is-italic has-text-weight-light	">{this.props.header.address}, {this.props.header.city}, {this.props.header.state}</li>
              <li className="is-italic has-text-weight-light	">{this.props.header.country}</li>
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
