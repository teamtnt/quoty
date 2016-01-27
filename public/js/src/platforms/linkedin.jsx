var React = require('react');

var ShareOnLinkedIn = React.createClass({
  handleClick: function() {
    var url = encodeURIComponent(this.props.url),
    title   = encodeURIComponent(this.props.title),
    text    = encodeURIComponent(this.props.text);

    var popup = "http://www.linkedin.com/shareArticle?mini=true&url=" + url + "&title=" + title;
    window.open(popup, title, "height=" + 500 + ",width=" + 500)
  },
  render: function() {
    return (
      <button onClick={this.handleClick} className="linkedin"></button>
    );
  }
});

module.exports = ShareOnLinkedIn;
