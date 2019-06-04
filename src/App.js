import React, {Component} from "react";
import ReactDOM from "react-dom";
import {boundMethod} from 'autobind-decorator'

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

const Button = ({onClick, children = 'delete'})=>(
	<button
		onClick = {onClick}
	>
		{children}
	</button>
);


const Search = ({onChange, value, children}) =>(
	<form>
		{children}
		<input 
			type="text"
			value = {value}
			onChange={onChange}
		/>
	</form>
);



const List = ({list, searchTerm, searchFunction, deleteFunction}) =>(
	<div>
		{list.filter(searchFunction(searchTerm)).map((item)=>{

			const {objectID, url, author, title}= item;

			return(
				<div key = {objectID} >
					<a href={url}>{title} </a>
					<span>{author} </span>
					<span>{objectID}</span>
					<span>
						<Button 
							onClick = {() => deleteFunction(objectID)} //don't forget to bind onDismiss function
							type="button"
						>
							delete2
						</Button>
						
					</span>
				</div>
			)
		})
		}





	</div>
	

);
	

ReactDOM.render(<App/>, document.getElementById('app'));



