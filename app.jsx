function Application(){
	return(
	    <div>
	    <h1> Hello world from React</h1>
	    <p> Paragraph from React Application  </p>
	    </div>
	);
}


ReactDOM.render(
  <Application/>,
  document.getElementById('container')
);