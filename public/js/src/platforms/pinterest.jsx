var ShareOnPinterest = React.createClass({
  handleClick: function() {
    var url = encodeURIComponent(this.props.url),
    title   = encodeURIComponent(this.props.title),
    text    = encodeURIComponent(this.props.text);

    var popup = "http://www.pinterest.com/pin/find/?url=" + url + "&description=" + text;
    window.open(popup, title, "height=" + 700 + ",width=" + 850)
  },
  render: function() {
    return (
      <button onClick={this.handleClick}><span className="fa fa-pinterest"></span></button>
    );
  }
});

module.exports = ShareOnPinterest;
