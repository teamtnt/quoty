(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var networks = [];
networks['twitter'] = require('./platforms/twitter.jsx');
networks['linkedin'] = require('./platforms/linkedin.jsx');
networks['google'] = require('./platforms/google.jsx');
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

  handleSelection: function (e) {
    var menu = jQuery(this.refs.quotyContainer);
    var s = document.getSelection(),
        r = s.getRangeAt(0);
    if (r && s.toString()) {
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
    window.addEventListener('mouseup', this.handleSelection);
  },

  componentWillUnmount: function () {
    window.removeEventListener('mouseup', this.handleSelection);
  },

  render: function () {
    this.platforms = [];
    this.props.networks.split('|').forEach(function (network, index) {
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

ReactDOM.render(React.createElement(Quoty, { networks: 'facebook|twitter|google|pinterest|linkedin' }), document.getElementById('quotyContainer'));

},{"./platforms/facebook.jsx":2,"./platforms/google.jsx":3,"./platforms/linkedin.jsx":4,"./platforms/pinterest.jsx":5,"./platforms/separator.jsx":6,"./platforms/twitter.jsx":7}],2:[function(require,module,exports){
var ShareOnFacebook = React.createClass({
  displayName: "ShareOnFacebook",

  handleClick: function () {
    var url = encodeURIComponent(this.props.url),
        title = encodeURIComponent(this.props.title),
        text = encodeURIComponent(this.props.text);

    var popup = "http://www.facebook.com/sharer/sharer.php?s=100&p[url]=" + url + "&p[images][0]=&p[title]=" + title;
    window.open(popup, title, "height=" + 300 + ",width=" + 600);
  },
  render: function () {
    return React.createElement(
      "button",
      { onClick: this.handleClick },
      React.createElement("span", { className: "fa fa-facebook" })
    );
  }
});

module.exports = ShareOnFacebook;

},{}],3:[function(require,module,exports){
var GooglePlus = React.createClass({
  displayName: "GooglePlus",

  handleClick: function () {
    var url = encodeURIComponent(this.props.url),
        title = encodeURIComponent(this.props.title),
        text = encodeURIComponent(this.props.text);

    var popup = "https://plus.google.com/share?url=" + url;
    window.open(popup, title, "height=" + 600 + ",width=" + 500);
  },
  render: function () {
    return React.createElement(
      "button",
      { onClick: this.handleClick },
      React.createElement("span", { className: "fa fa-google-plus" })
    );
  }
});

module.exports = GooglePlus;

},{}],4:[function(require,module,exports){
var ShareOnLinkedIn = React.createClass({
  displayName: "ShareOnLinkedIn",

  handleClick: function () {
    var url = encodeURIComponent(this.props.url),
        title = encodeURIComponent(this.props.title),
        text = encodeURIComponent(this.props.text);

    var popup = "http://www.linkedin.com/shareArticle?mini=true&url=" + url + "&title=" + title;
    window.open(popup, title, "height=" + 500 + ",width=" + 500);
  },
  render: function () {
    return React.createElement(
      "button",
      { onClick: this.handleClick },
      React.createElement("span", { className: "fa fa-linkedin" })
    );
  }
});

module.exports = ShareOnLinkedIn;

},{}],5:[function(require,module,exports){
var ShareOnPinterest = React.createClass({
  displayName: "ShareOnPinterest",

  handleClick: function () {
    var url = encodeURIComponent(this.props.url),
        title = encodeURIComponent(this.props.title),
        text = encodeURIComponent(this.props.text);

    var popup = "http://www.pinterest.com/pin/find/?url=" + url + "&description=" + text;
    window.open(popup, title, "height=" + 700 + ",width=" + 850);
  },
  render: function () {
    return React.createElement(
      "button",
      { onClick: this.handleClick },
      React.createElement("span", { className: "fa fa-pinterest" })
    );
  }
});

module.exports = ShareOnPinterest;

},{}],6:[function(require,module,exports){
var Separator = React.createClass({
  displayName: "Separator",

  render: function () {
    return React.createElement("div", { className: "separator" });
  }
});

module.exports = Separator;

},{}],7:[function(require,module,exports){
var ShareOnTwitter = React.createClass({
  displayName: "ShareOnTwitter",

  handleClick: function () {
    var url = encodeURIComponent(this.props.url),
        title = encodeURIComponent(this.props.title),
        text = encodeURIComponent(this.props.text);

    var popup = "https://twitter.com/intent/tweet?text=" + text + "&url=" + url;
    window.open(popup, title, "height=" + 300 + ",width=" + 500);
  },
  render: function () {
    return React.createElement(
      "button",
      { onClick: this.handleClick },
      React.createElement("span", { className: "fa fa-twitter" })
    );
  }
});

module.exports = ShareOnTwitter;

},{}]},{},[1]);
