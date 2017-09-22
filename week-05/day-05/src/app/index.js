import './css/style.scss';
var React = require('react');
var ReactDOM = require('react-dom');
var token = 'Basic YWxpY2VzaGVuMjI3OjNiYzQxN2RkOWU5YWY3ZjlhNTU0M2FjYzk5MjdjODE1OTAxZjYyMTU=';
const API_URL = 'https://api.github.com';
const STATUS_CODE = 200;
var myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');
myHeaders.append('Authorization', token);
var MY_INIT = {
  method: 'GET',
  headers: myHeaders
}

var HTMLLayout = React.createClass({
  getInitialState: function() {
    return {
      searchResult:{name:'Empty', description:'Please search for a repo', lastPush:null},
      commits:[],
      recommandedUsers:['AlfredWei0420', 'linjialiang1234', 'haochenli', 'chasssssse', 'jerry-ZWL', 'ChiuMungZitAlexander', 'sliu102', 'ZhengnanZhang', 'ttttsai', 'aliceshen227', 'ChrisH404', 'Zoe_Zhou']
    }
  },

  render: function() {
    var commitsToRender = this.state.commits;
		commitsToRender = commitsToRender.map(function(item, index){
			return (
				<CommitItem item={item} key={index}/>
			);
		}.bind(this));
    var usersToRender = this.state.recommandedUsers;
		usersToRender = usersToRender.map(function(item, index){
			return (
				<UserItem item={item} key={index} handleClick={this.handleClick}/>
			);
		}.bind(this));
    return (
      <div>
        <nav>
          <ul>
            <li>
              <a href='https://github.com'>GitHub</a>
            </li>
            <li>
              <a href='https://developer.mozilla.org'>MDN</a>
            </li>
            <li>
              <a href='https://stackoverflow.com'>Stack Overflow</a>
            </li>
          </ul>
        </nav>
        <div className='centerContainer'>
          <form className='searchbar' onSubmit={this.handleSearch}>
            <label>greenfox-academy/</label>
            <input type='text' required placeholder='repository name' className='repoName' ref='repoName'/>
            <input type='submit' value='Go' className='goButton'/>
          </form>
          <div className='mainContent'>
            <div className='searchResultContainer'>
              <p>{this.state.searchResult.name}</p>
              <div className='searchResultTitle'>
                {this.state.searchResult.description}
              </div>
              <div className='searchResultSubTitle'>
                {this.state.searchResult.lastPush}
              </div>
            </div>
            <div>
              <div className='commitTitle'>
                <p>Commits</p>
                <p className='numberOfCommits'>({this.state.commits.length})</p>
              </div>
              {commitsToRender}
            </div>
          </div>
          <aside>
            <form onSubmit={this.handleAuth}>
              <label>Authenticate</label>
              <input type='text' required placeholder='Username' className='username' ref='username'/>
              <input type='password' required placeholder='Token or password' className='passwordOrToken' ref='passwordOrToken'/>
              <button type='submit' className='goButton'>Login</button>
            </form>
            <div className='Recommended'>
              <p>Recommended</p>
              <ul>
                {usersToRender}
              </ul>
            </div>
          </aside>
        </div>
      </div>
      );
  },

  handleSearch: function(e) {
    e.preventDefault();
    var repoName = this.refs.repoName.value;

    this.getInfo(repoName);
    this.getCommit(repoName);
  },

  handleClick:function(name){
    this.getInfo(name);
    this.getCommit(name);
  },

  handleAuth: function(e){
    e.preventDefault();

    var username = this.refs.username.value;
    var passwordOrToken = this.refs.passwordOrToken.value;

    var authToken = 'Basic ' + passwordOrToken;
    var authHeaders = new Headers();
    authHeaders.append('Content-Type', 'application/json');
    authHeaders.append('Authorization', authToken);

    var new_init = {
      method:'GET',
      headers: authHeaders
    }
    var repoDetail = {};
    fetch(`${API_URL}/rate_limit`,new_init).
    then(function (response) {
      if(response.status === 404 || response.status === 401){
        throw error;
      }
      else {
        return response.json()
      }
    }).then(function (body) {
      console.log('passed');
    }.bind(this))
    .catch(function(error){
      repoDetail.name = 'Login Failed!'
      repoDetail.description = 'PLEASE TRY AGAIN!';
      repoDetail.lastPush = null;
      this.setState({searchResult:repoDetail,commits:[]});
    }.bind(this));

  },

  getInfo: function(repoName) {
    var repoDetail = {};
    fetch(`${API_URL}/repos/greenfox-academy/${repoName}`,MY_INIT).
    then(function (response) {
      if(response.status === 404){
        throw error;
      }
      else {
        return response.json()
      }
    }).then(function (body) {
      repoDetail.name = body.name;
      repoDetail.lastPush = body.pushed_at;
      repoDetail.description = body.description||'no Description';
      this.setState({searchResult:repoDetail});
    }.bind(this))
    .catch(function(error){
      repoDetail.name = 'NO SUCH REPO!'
      repoDetail.description = 'PLEASE TRY AGAIN!';
      repoDetail.lastPush = null;
      this.setState({searchResult:repoDetail});
    }.bind(this));
  },

  getCommit: function(repoName) {
    var commitDetail = [];
    fetch(`${API_URL}/repos/greenfox-academy/${repoName}/commits`,MY_INIT).
    then(function (response) {
      if(response.status === 404){
        throw error;
      }
      else {
        return response.json()
      }
    }).then(function (body) {
      for(let i = 0; i < body.length; i++){
        let singleCommitDetail = {message:body[i].commit.message, time: body[i].commit.author.date};
        commitDetail.push(singleCommitDetail);
      }
      this.setState({commits:commitDetail});
    }.bind(this))
    .catch(function(error){
      commitDetail = [];
      this.setState({commits:commitDetail});
    }.bind(this));
  }
});

var CommitItem = React.createClass({
  render: function(){
    return(
      <div>
        <div className='searchResultTitle'>
          {this.props.item.message}
        </div>
        <div className='searchResultSubTitle'>
          {this.props.item.time}
        </div>
      </div>
    )
  }
});

var UserItem = React.createClass({
  render: function(){
    return(
      <li>
        <a onClick={this.handleUserDataChange}>
          {this.props.item}
        </a>
      </li>
    )
  },
  handleUserDataChange: function(){
    this.props.handleClick(this.props.item);
  }
})

ReactDOM.render(<HTMLLayout />, document.getElementsByClassName('container')[0]);
