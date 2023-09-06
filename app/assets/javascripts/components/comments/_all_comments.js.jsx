const AllComments = ({comments, handleEdit, handleDelete}) => {

  var all_comments = comments.map((comment) => {
    return(
      <div key={comment.id}>
       <Comment comment={comment} handleEdit={handleEdit} handleDelete={handleDelete}/>
      </div>
    )
  })

  return(
    <div>
      {all_comments}
    </div>
  )
}