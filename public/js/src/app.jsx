var React    = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var networks = [];
networks['twitter']   = require('./platforms/twitter.jsx')
networks['linkedin']  = require('./platforms/linkedin.jsx')
networks['google']    = require('./platforms/google.jsx')
networks['separator'] = require('./platforms/separator.jsx')
networks['facebook']  = require('./platforms/facebook.jsx')
networks['pinterest'] = require('./platforms/pinterest.jsx')

var Quoty = React.createClass({
  getInitialState: function() {
    return {
      url: $('meta[property="og:url"]').attr("content") || $('meta[property="og:url"]').attr("value") || window.location.href,
      text: "",
      title: document.title,
    };
  },

  handleSelection: function(e) {
    var menu = $(this.refs.quotyContainer);
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
    this.platforms = [];
    this.props.networks.split('|').forEach(function(network, index) {
      this.platforms.push(React.createElement(networks[network], {
        key  : network,
        title: this.state.title,
        text : this.state.text,
        url  : this.state.url
      }));
    }, this);
    return (
      <div className="quoty" ref="quotyContainer">
          <div className="quoty-inner">
            {this.platforms}
          </div>
          <div className="quoty-arrowClip"><span className="quoty-arrow"></span></div>
      </div>
    );
  }
});

ReactDOM.render(<Quoty networks="facebook|twitter|google|pinterest|linkedin" />, document.getElementById('quotyContainer'));
