var ShareOnTwitter = React.createClass({
  handleClick: function() {
    var max = 140 - this.props.url.length;
    console.log(max)
    var url = encodeURIComponent(this.props.url),
    title   = encodeURIComponent(this.props.title),
    text    = this.props.text;

    var popup = "https://twitter.com/intent/tweet?text=" + this.truncate(text, max) + "&url=" + url;
    window.open(popup, title, "height=" + 300 + ",width=" + 500)
  },
  render: function() {
    return (
      <button onClick={this.handleClick} className="twitter"></button>
    );
  },
  truncate: function(str, n){
    if (!str || !str.length) return str;
    var toLong = str.length>n,
        s_ = toLong ? str.substr(0,n-3) : str;
    s_ = toLong ? s_.substr(0,s_.lastIndexOf(' ')) : s_;
    return toLong ? s_ +'...' : s_;
  }
});

module.exports = ShareOnTwitter;
