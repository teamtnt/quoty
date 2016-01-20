var ShareOnFacebook = React.createClass({
  handleClick: function() {
    var url = encodeURIComponent(this.props.url),
    title   = encodeURIComponent(this.props.title),
    text    = encodeURIComponent(this.props.text);

    var popup = "http://www.facebook.com/sharer/sharer.php?s=100&p[url]=" + url + "&p[images][0]=&p[title]=" + title;
    window.open(popup, title, "height=" + 300 + ",width=" + 600)
  },
  render: function() {
    return (
      <button onClick={this.handleClick}><span className="fa fa-facebook"></span></button>
    );
  }
});

module.exports = ShareOnFacebook;
