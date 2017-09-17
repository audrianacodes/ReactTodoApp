var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var todoText = this.refs.todoText.value;

    if (todoText.length > 0) {
      this.refs.todoText.value = '';
      dispatch(actions.addTodo(todoText));
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function () {
    return (
      <div className="row">
      <div className="columns small-12">
        <form onSubmit={this.handleSubmit}>
          <div className="row collapse">
            <div className="small-10 medium-11 columns">
              <input type="text" ref="todoText" placeholder="What do you need to do?"/>
            </div>
            <div className="small-2 medium-1 columns">
              <button className="button postfix expanded">+</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    );
  }
});

export default connect()(AddTodo);
