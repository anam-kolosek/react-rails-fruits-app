class FruitShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments
    };

    this.createComment = this.createComment.bind(this)
    this.addNewComment = this.addNewComment.bind(this)
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

  addNewComment(comment) {
    this.setState({
      comments: this.state.comments.concat(comment)
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

      <h3>Comments</h3>
      <AllComments comments={this.state.comments} />
      <NewComment handleCreate={this.createComment}/>
    </div>
    )
  }
}
