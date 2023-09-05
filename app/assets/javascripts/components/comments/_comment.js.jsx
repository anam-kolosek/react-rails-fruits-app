const Comment = ({comment}) => {

  const commentStyle = {
    width: '20%',
    marginBottom: '1%',
    padding: '1%',
    borderRadius: '5px',
    border: '1px solid gray'
  }

  return (
    <div style={commentStyle}>
      {comment.body}
    </div>
  )
}
