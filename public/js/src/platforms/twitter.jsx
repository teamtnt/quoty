var React = require('react');

var ShareOnTwitter = React.createClass({
  handleClick: function() {
    var url = encodeURIComponent(this.props.url),
    title   = encodeURIComponent(this.props.title),
    text    = encodeURIComponent(this.props.text);

    var popup = "https://twitter.com/intent/tweet?text=" + text + "&url=" + url;
    window.open(popup, title, "height=" + 500 + ",width=" + 700)
  },
  render: function() {
    return (
      <button onClick={this.handleClick}><span className="fa fa-twitter"></span></button>
    );
  }
});

module.exports = ShareOnTwitter;
