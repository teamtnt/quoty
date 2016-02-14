var React = require('react');
var ReactDOM = require('react-dom');

var networks = [];
networks['twitter'] = require('./platforms/twitter.jsx');
networks['linkedin'] = require('./platforms/linkedin.jsx');
networks['googleplus'] = require('./platforms/google.jsx');
networks['separator'] = require('./platforms/separator.jsx');
networks['facebook'] = require('./platforms/facebook.jsx');
networks['pinterest'] = require('./platforms/pinterest.jsx');

var Quoty = React.createClass({
  displayName: 'Quoty',

  getInitialState: function () {
    return {
      url: jQuery('meta[property="og:url"]').attr("content") || jQuery('meta[property="og:url"]').attr("value") || window.location.href,
      text: "",
      title: document.title
    };
  },

  handleMouseDown: function (e) {
    if(jQuery(e.target).parents('.quoty-inner').length != 1) {
      if (window.getSelection().empty) {
          window.getSelection().empty();
      }
      if (window.getSelection().removeAllRanges) {
          window.getSelection().removeAllRanges();
      }
    }
  },

  handleSelection: function (e) {
    var menu = this.menu = jQuery(this.refs.quotyContainer);

    var s;

    if (window.getSelection) {
        s = window.getSelection();
    } else if (document.selection) {
        s = document.selection.createRange();
    }

    if(s.rangeCount <= 0) return;

    var r = s.getRangeAt(0);

    if (r && s.toString()) {
      if ( jQuery(s.baseNode || s.anchorNode).parents(this.props.selector).length != 1 ) { 
        return;
      }

      var p = r.getBoundingClientRect();
      if (p.left || p.top) {
        menu.css({
          left: p.left + p.width / 2 - menu.width() / 2,
          top: p.top + window.pageYOffset - menu.height() - 11,
          display: 'block',
          opacity: 0
        }).animate({
          opacity: 1
        }, 100);

        setTimeout(function () {
          menu.addClass('highlight_menu_animate');
        }, 10);
        this.setState({ text: s.toString() });
        return;
      }
    }
    menu.animate({ opacity: 0 }, function () {
      menu.hide().removeClass('highlight_menu_animate');
    });
  },

  componentDidMount: function () {
    window.addEventListener('mousedown', this.handleMouseDown);
    window.addEventListener('mouseup', this.handleSelection);
  },

  componentWillUnmount: function () {
    window.removeEventListener('mouseup', this.handleSelection);
  },

  render: function () {
    this.platforms = [];
    this.props.networks.split('|').forEach(function (network, index) {
      if(network == "") return;
      this.platforms.push(React.createElement(networks[network], {
        key: network,
        title: this.state.title,
        text: this.state.text,
        url: this.state.url
      }));
    }, this);
    return React.createElement('div', { className: 'quoty', ref: 'quotyContainer' }, React.createElement('div', { className: 'quoty-inner' }, this.platforms), React.createElement('div', { className: 'quoty-arrowClip' }, React.createElement('span', { className: 'quoty-arrow' })));
  }
});

var container = document.getElementById('quotyContainer');
var netw = container.getAttribute('platforms');
var selector = container.getAttribute('selector');

ReactDOM.render(React.createElement(Quoty, { networks: netw, selector: selector }), container);
