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
    return {windowWidth: window.innerWidth};
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
            this.setState({
              text: s.toString(),
              title: "My Fancy Title",
              url:  "http://www.google.com"
            });
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
    platforms.push(<ShareOnGooglePlus key="google" title={this.state.title} text={this.state.text} url={this.state.url}/>);
    platforms.push(<ShareOnLinkedIn key="linkedin" />);
    platforms.push(<ShareOnTwitter key="twitter" title={this.state.title} text={this.state.text} url={this.state.url} />);
    platforms.push(<ShareOnFacebook key="facebook" />);
    platforms.push(<ShareOnPinterest key="pinterest" />);

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



// app.directive("shareContent", ["$window", function(e) {
//     return {
//         restrict: "A",
//         link: function(r, n, o) {
//             var i = function(r) {
//                 function n() {
//                     var r = encodeURIComponent(o.shareUrl),
//                         n = encodeURIComponent(o.shareTitle),
//                         i = "",
//                         c = 480,
//                         a = 700;
//                     switch ((n += o.sharePowered ? " powered by @Krowdster" : " via @Krowdster"), n.replace(/\s\s+/g, " "), o.shareType) {
//                         case "buffer":
//                             c = 600, i = "https://bufferapp.com/add?text=" + n + "&url=" + r;
//                             break;
//                         case "facebook":
//                             c = 300, a = 600, i = "http://www.facebook.com/sharer/sharer.php?s=100&p[url]=" + r + "&p[images][0]=&p[title]=" + n;
//                             break;
//                         case "twitter":
//                             c = 500, i = "https://twitter.com/intent/tweet?text=" + n + "&url=" + r;
//                             break;
//                         case "google+":
//                             a = 500, c = 600, i = "https://plus.google.com/share?url=" + r;
//                             break;
//                         case "pinterest":
//                             a = 850, c = 700, i = "http://www.pinterest.com/pin/find/?url=" + r + "&description=" + n;
//                             break;
//                         case "linkedin":
//                             c = 500, a = 500, i = "http://www.linkedin.com/shareArticle?mini=true&url=" + r + "&title=" + n;
//                             break;
//                         case "pocket":
//                             c = 600, a = 600, i = "https://getpocket.com/save?url=" + r + "&title=" + n
//                     }
//                     e.open(i, n, "height=" + c + ",width=" + a)
//                 }
//                 r.preventDefault(), n()
//             };
//             n.on("click", i), n.on("touchend", i)
//         }
//     }
// }]);
