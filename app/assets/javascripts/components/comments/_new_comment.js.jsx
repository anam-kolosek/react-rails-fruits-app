const NewComment = ({handleCreate}) => {
  
  let formFields = {}

  const newCommentStyle = {
    width: '20%',
    marginTop: '1%',
    marginBottom: '1%'
  };

  return(
    <div>
      <textarea rows='5' ref={input => formFields.body = input} placeholder='Enter the comment...' className="form-control" style={newCommentStyle}/>
      <button className="btn btn-primary" onClick={() => {handleCreate(formFields.body.value)}}>Submit</button>
    </div>
  )
}
