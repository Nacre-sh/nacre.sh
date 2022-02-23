import React from 'react';

export default class NpmLogo extends React.Component {
  render() {
    const bgcolor = this.props.bg || "#ffffff";
    const fgcolor = this.props.fg || "#ffffff";

    return (
      <svg height={this.props.size} width={this.props.size} viewBox="0 0 512 512">
      <path id="Path-copy-12" fill="#ffffff" fill-rule="evenodd" stroke="none" d="M 155.680786 219.857147 C 155.680786 219.857147 155.680786 509 155.680786 509 L 372.537903 219.857147 C 372.537903 219.857147 155.680786 219.857147 155.680786 219.857147 Z"/>
      <path id="Path-copy-5" fill="#ffffff" fill-rule="evenodd" stroke="none" d="M 300.252197 219.857147 C 300.252197 219.857147 300.252197 3 300.252197 3 L 155.680786 219.857147 C 155.680786 219.857147 300.252197 219.857147 300.252197 219.857147 Z"/>
      <path id="Path-copy-11" fill="#ffffff" fill-rule="evenodd" stroke="none" d="M 123.549202 185.221924 C 123.549202 185.221924 173.758331 469.972046 173.758331 469.972046 L 337.111786 147.565094 C 337.111786 147.565094 123.549202 185.221924 123.549202 185.221924 Z"/>
      </svg>
    );
  }
}
