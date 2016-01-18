var React = require('react');

var GooglePlus = React.createClass({
  handleClick: function() {
    var url = encodeURIComponent(this.props.url),
    title   = encodeURIComponent(this.props.title),
    text    = encodeURIComponent(this.props.text);

    var popup = "https://plus.google.com/share?url=" + url;
    window.open(popup, title, "height=" + 600 + ",width=" + 500)
  },
  render: function() {
    return (
      <button onClick={this.handleClick}><span className="fa fa-google-plus"></span></button>
    );
  }
});

module.exports = GooglePlus;
