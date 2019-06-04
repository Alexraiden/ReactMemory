import React, {Component} from "react";
import ReactDOM from "react-dom";
import {boundMethod} from 'autobind-decorator';
import List from './customComponents/List';
import Search from './customComponents/Search';

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
		//this.onSearchChange = this.onSearchChange.bind(this);
	}

	isSearched(searchTerm){
		return function(item){
			return !searchTerm ||
				item.title.toLowerCase().includes(searchTerm.toLowerCase())

		}
	};

	@boundMethod
	onDismiss(id){
		const updatedList = this.state.list.filter((item)=> item.objectID !== id)
		this.setState({list : updatedList});
	};

	@boundMethod
	onSearchChange(e){
		this.setState({searchTerm: e.target.value})

	};

	

	render(){

		const {list, searchTerm} = this.state;

	    return (
				<div className = "App" >
					<Search value = {searchTerm} onChange = {this.onSearchChange}>
						Type for Search
					</Search>
					<List 
						list = {list} 
						searchTerm = {searchTerm}
						searchFunction = {this.isSearched}
						deleteFunction = {this.onDismiss}
					/>
				</div>
	    )
  	}
};	

ReactDOM.render(<App/>, document.getElementById('app'));



