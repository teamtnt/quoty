var React = require('react');

var ShareOnPinterest = React.createClass({
  render: function() {
    return (
      <button onClick={this.handleClick}><span className="fa fa-pinterest"></span></button>
    );
  }
});

module.exports = ShareOnPinterest;
