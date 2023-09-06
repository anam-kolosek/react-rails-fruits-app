class FruitShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments
    };

    this.createComment = this.createComment.bind(this)
    this.addNewComment = this.addNewComment.bind(this)
    this.handleDeleteComment = this.handleDeleteComment.bind(this)
    this.handleEditComment = this.handleEditComment.bind(this)
  }

  createComment(body) {
    let params = JSON.stringify({comment: {body: body, fruit_id: this.props.fruitId} })

    fetch('http://localhost:3000/api/v1/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: params,
    }).then((response) => {return response.json()})
    .then((comment)=>{
      this.addNewComment(comment)
    })
  }

  handleEditComment(comment, newBody) {
    fetch(`http://localhost:3000/api/v1/comments/${comment.id}`, 
    {
      method: 'PUT',
      body: JSON.stringify({ comment: { body: newBody } }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {return response.json()})
    .then((updatedComment)=>{
      this.updateComment(updatedComment)
    })
  }

  handleDeleteComment(id) {
    fetch(`http://localhost:3000/api/v1/comments/${id}`, 
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(() => { 
        this.deleteComment(id)
      })
  }

  addNewComment(comment) {
    this.setState({
      comments: this.state.comments.concat(comment)
    })
  }

  updateComment(comment) {
    newComments = this.state.comments.map((c) => c.id === comment.id ? comment : c)
    this.setState({
      comments: []
    })

    this.setState({
      comments: newComments
    })
  }

  deleteComment(id){
    newComments = this.state.comments.filter((comment) => comment.id !== id)
    this.setState({
      comments: newComments
    })
  }

  render(){
    const showFruitStyle = {
      marginLeft: '5%'
    }
  
    const tableStyle = {
      width: '20%',
      marginTop: '1.5%'
    };

    return(
      <div style={showFruitStyle}>
        <h2>Show Fruit</h2>

        <table className="table" style={tableStyle}>
          <tbody>
            <tr>
              <th scope="row">Name</th>
              <td>{this.props.fruitName}</td>
            </tr>

            <tr>
              <th scope="row">Description</th>
              <td>{this.props.fruitDescription}</td>
            </tr>
          </tbody>
        </table>

        <h3>Comments ({this.state.comments.length})</h3>
        <AllComments comments={this.state.comments} handleEdit={this.handleEditComment} handleDelete={this.handleDeleteComment} />
        <NewComment handleCreate={this.createComment}/>
      </div>
    )
  }
}
