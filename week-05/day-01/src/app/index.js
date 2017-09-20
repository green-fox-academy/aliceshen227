var React = require('react');
var ReactDOM = require('react-dom');

//Create conponent
var ImagesToShow = React.createClass({
	getInitialState: function(){
		return{
			imgs:['images/chicken.jpg','images/beef.jpg','images/drink.jpg','images/cheese.jpg','images/pizza.jpg','images/rice.jpg'],
			title:['Delicious Chicken!','Delicious Beef!','Delicious Beer!','Delicious Cheese Stick!','Delicious Pizza!','Delicious Rice!'],
			decsription:['Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.','Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.','Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.','Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.','Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'],
			currentIndex: 0
		}
	},
	render:function(){
		var imagesToRender = this.state.imgs;
		imagesToRender = imagesToRender.map(function(item, index){
			return (
				<ImagesItem item={item} key={index} showCurr={this.showCurr}/>
			);
		}.bind(this));
		return(
			<div>
				<header>
					<p>Food Gallery</p>
				</header>
				<form className="search" onSubmit={this.handleSubmit}>
					<input type="text" required ref="newItem"/>
					<input type="submit" value="Search" />
				</form>
				<div className="slide_show">
				<div className="b left">
						 <button type="button" className="arrow" onClick={this.prevSlide}></button>
				 </div>
					 <div className="slideshow-container">
							 <div className="pic">
										<img src={this.state.imgs[this.state.currentIndex]}/>
										<div className="text">
												<p className="heading">{this.state.title[this.state.currentIndex]}</p>
												<p className="blah">{this.state.decsription[this.state.currentIndex]}</p>
										</div>
								</div>
						</div>
				 <div className="b right">
						 <button type="button" className="arrow" onClick={this.nextSlide}></button>
				 </div>
				</div>
				<div className='thumbnail'>
					<ul>{imagesToRender}</ul>
				</div>
			</div>
		);
	},//render

	nextSlide: function(){
		if(this.state.currentIndex===5){
			this.setState({
				currentIndex:0
			});
		}
		else{
			let curr = this.state.currentIndex+1
			this.setState({
				currentIndex:curr
			});
		}
	},

	prevSlide: function(){
		if(this.state.currentIndex===0){
			this.setState({
				currentIndex:5
			});
		}
		else{
			let curr = this.state.currentIndex-1
			this.setState({
				currentIndex:curr
			});
		}
	},

	showCurr: function(item){
			var updatedIndex;
			for(let i = 0; i<this.state.imgs.length; i++){
				if (item === this.state.imgs[i]){
					updatedIndex = i;
				}
			}
			this.setState({currentIndex:updatedIndex});
	},

	handleSubmit: function(e){
		e.preventDefault();
		var updatedIndex;
		for(let i = 0; i<this.state.imgs.length; i++){
			if (this.state.imgs[i].includes(this.refs.newItem.value)&&this.refs.newItem.value!=='jpg'){
				updatedIndex = i;
			}
			else{
			}
		}
		this.setState({currentIndex:updatedIndex});
	}
});

var ImagesItem = React.createClass({
	render: function(){
		return(
			<li><button type="button" id="chicken" className="tbb" onClick={this.handleIndex}><img src={this.props.item} className="tb"/></button></li>
		)
	},
	handleIndex: function(){
		this.props.showCurr(this.props.item);
	}
})

// put component into html page

ReactDOM.render(<ImagesToShow />, document.getElementsByClassName('container')[0]);
