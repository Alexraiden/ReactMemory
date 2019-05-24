import React, {Component} from "react";
import ReactDOM from "react-dom";

//data test
/*
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
  render(){
    const helloworld = "welkomen React";

    return (
        list.map((item)=> 
          <div key = {item.objectID} >
            <div>
              <span>{item.title} </span>
              <span>{item.author} </span>
              <span>{item.url} </span>
              <span>{item.objectID}</span>
            </div>
          </div>
        )
    )
  }
};
*/



/*
import React from "react";
import ReactDOM from "react-dom";
const App = () => {
  return (
    <div>
      <p style={pStyle}>React just here!</p>
    </div>
  );
};


const pStyle = {
  fontSize: '32px',
  textAlign: 'center'
};


export default App;
ReactDOM.render(<App />, document.getElementById("app"));
*/

/*
function CoolComponent({ adjective = 'Cool' }) {
  return <p>Youpi So fucking {adjective} !</p>
};

ReactDOM.render(
  <div>
    <CoolComponent adjective="awesome" />
    <CoolComponent />
  </div>,
  document.getElementById('app')
);
*/

/*

const Greeter = ({ whom }) => (
  <button onClick={() => console.log(`Bonjour ${whom} !`)}>
    Vas-y, clique pas !
  </button>
)
*/

/*
const App = ({name, bar, val}) => (
		<div>
			{name ? <span>hello {name}</span> : null}
			{bar && <span>foo = {bar}</span>}
			{val && <span>val = {val}</span>}
		</div>
	);

const data = {
	bar: 4,
	val: undefined
};


ReactDOM.render(<App name="world" {...data}/>, document.getElementById('app'))
*/


/*
function App(props){
	return(
		<div>
			<p>Number of items: {props.op}</p>
		</div>
	);
};

ReactDOM.render(<App op={42} />, document.getElementById('app'))
*/

function App(props){
	if(!props.warn){
		return null
	}

	return (
		<div className= "warning">
			warning!
		</div>
	);
};




ReactDOM.render(<App warn />, document.getElementById('app'))