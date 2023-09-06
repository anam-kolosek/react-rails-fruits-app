class Comment extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      editMode: props.editMode || false
    };
  }

  changeEditMode() {
    this.setState({
      editMode: !this.state.editMode
    })
  }

  render() {
    const commentStyle = {
      width: '20%',
      marginBottom: '0.5%',
      padding: '1%',
      paddingBottom: '0.5%',
      borderRadius: '5px',
      border: '1px solid gray'
    }
  
    const editBtnStyle = {
      marginRight: '3px'
    }

    const { comment, handleEdit, handleDelete } = this.props;
    let formFields = { }

    if (!this.state.editMode)
      return(
        <div style={commentStyle}>
          <div>{comment.body}</div>
          <br/>
          <button onClick={() => this.changeEditMode()} className="btn btn-success btn-xs" style={editBtnStyle}>Edit</button>
          <button onClick={() => {if(window.confirm('Delete the comment?')){handleDelete(comment.id)};}} className="btn btn-danger btn-xs">Delete</button>
        </div>
      )
    return (
      <div style={commentStyle}>
        <textarea rows='5' ref={input => formFields.body = input} defaultValue={comment.body} className="form-control" />
        <br/>
        <button onClick={() => handleEdit(comment, formFields.body.value)} className="btn btn-success btn-xs" style={editBtnStyle}>Save</button>
        <button onClick={() => this.changeEditMode()} className="btn btn-default btn-xs">Cancel</button>
      </div>
    )
  }
}
