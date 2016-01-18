var React = require('react');
var ReactDOM = require('react-dom');

var ShareOnTwitter    = require('./platforms/twitter.jsx')
var ShareOnLinkedIn   = require('./platforms/linkedin.jsx')
var ShareOnGooglePlus = require('./platforms/google.jsx')
var Separator         = require('./platforms/separator.jsx')
var ShareOnFacebook   = require('./platforms/facebook.jsx')
var ShareOnPinterest  = require('./platforms/pinterest.jsx')

var Quoty = React.createClass({
  getInitialState: function() {
    return {
      url: jQuery('meta[property="og:url"]').attr("content") || jQuery('meta[property="og:url"]').attr("value") || window.location.href,
      text: "",
      title: document.title,
    };
  },

  handleSelection: function(e) {
    var menu = jQuery(this.refs.quotyContainer);
    var s = document.getSelection(),
        r = s.getRangeAt(0);
    if (r && s.toString()) {
        var p = r.getBoundingClientRect();
        if (p.left || p.top) {
            menu.css({
                left: (p.left + (p.width / 2)) - (menu.width() / 2),
                top: (p.top + window.pageYOffset - menu.height() - 11),
                display: 'block',
                opacity: 0
            })
            .animate({
                opacity:1
            }, 100);

            setTimeout(function() {
                menu.addClass('highlight_menu_animate');
            }, 10);
            this.setState({text: s.toString()});
            return;
        }
    }
    menu.animate({ opacity:0 }, function () {
        menu.hide().removeClass('highlight_menu_animate');
    });
  },

  componentDidMount: function() {
    window.addEventListener('mouseup', this.handleSelection);
  },

  componentWillUnmount: function() {
    window.removeEventListener('mouseup', this.handleSelection);
  },

  render: function() {
    var platforms = [];
    platforms.push(<ShareOnGooglePlus key="google" title={this.state.title} text={this.state.text} url={this.state.url} />);
    platforms.push(<ShareOnLinkedIn key="linkedin" title={this.state.title} text={this.state.text} url={this.state.url} />);
    platforms.push(<ShareOnTwitter key="twitter" title={this.state.title} text={this.state.text} url={this.state.url} />);
    platforms.push(<ShareOnFacebook key="facebook" title={this.state.title} text={this.state.text} url={this.state.url} />);
    platforms.push(<ShareOnPinterest key="pinterest" title={this.state.title} text={this.state.text} url={this.state.url} />);

    return (
      <div className="highlightMenu" ref="quotyContainer">
          <div className="highlightMenu-inner">
            {platforms}
          </div>
          <div className="highlightMenu-arrowClip"><span className="highlightMenu-arrow"></span></div>
      </div>
    );
  }
});

ReactDOM.render(<Quoty />, document.getElementById('quotyContainer'));
