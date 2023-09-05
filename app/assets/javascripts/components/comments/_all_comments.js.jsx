const AllComments = ({comments}) => {

  var all_comments = comments.map((comment) => {
    return(
      <div key={comment.id}>
       <Comment comment={comment}/>
      </div>
    )
  })

  return(
    <div>
      {all_comments}
    </div>
  )
}