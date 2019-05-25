import React, {Component} from "react";
import ReactDOM from "react-dom";

//data test

const list = [
  {
    title: 'React',
    url: 'https://facebook.com',
    author: 'carrillo haha',
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://google.com',
    author: 'moi haha',
    points: 5,
    objectID: 1,
  },
];

class App extends Component {

	constructor(props){
		super(props);

		this.state = {
			list,
			searchTerm:''
		}

		//this.onDismiss = this.onDismiss.bind(this);
		this.onSearchChange = this.onSearchChange.bind(this);
	}

	isSearched(searchTerm){
		return function(item){
			return !searchTerm ||
				item.title.toLowerCase().includes(searchTerm.toLowerCase())

		}
	};

	onDismiss(id){
		const updatedList = this.state.list.filter((item)=> item.objectID !== id)
		this.setState({list : updatedList});
	};

	onSearchChange(e){
		this.setState({searchTerm: e.target.value})

	};

	render(){

	    return (
				<div className = "App" >
					<form>
						<input 
							type="text"
							onChange={this.onSearchChange}
						
						
						
						/>
					</form>
	        {this.state.list.filter(this.isSearched(this.state.searchTerm)).map((item)=> 
	          <div key = {item.objectID} >
		          <a href={item.url}>{item.title} </a>
		          <span>{item.author} </span>
		          <span>{item.objectID}</span>
		          <span>
		          	<button
		          		onClick = {()=>this.onDismiss(item.objectID)}
		          	>
		          	Dismiss
		          	</button>

		          </span>
	          </div>
	        )}
				</div>
	    )
  	}
};

ReactDOM.render(<App/>, document.getElementById('app'));



