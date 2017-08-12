function Application(){
	return(
	    <div className="scoreboard">
			 <div className="header">
	    	   <h1> Score Board </h1>  
	    	 </div>

	    	<div className="players">
	    	    <div className="player"> 
		    	     <div className="player-name">
	                   Nahidul Hasan
		    	     </div>
		    	    <div className="player-score">
		    	         <div className="counter"> 
		    	  	       <button className="counter-action-decrement"> - </button>
		    	  	       <button className="counter-score"> 31 </button>
		    	  	       <button className="counter-action-increment"> + </button>
		    	  	       
		    	  	    </div>
		    	    </div> 

		    	    <div className="player-name">
	                   Mahmudul Hasan
		    	     </div>
		    	    <div className="player-score">
		    	         <div className="counter"> 
		    	  	       <button className="counter-action-decrement"> - </button>
		    	  	       <button className="counter-score"> 30 </button>
		    	  	       <button className="counter-action-increment"> + </button>
		    	  	       
		    	  	    </div>
		    	    </div> 
		    	  	  
	    	    </div>
	    	</div>
	    </div>
	);
}

ReactDOM.render(
  <Application/>,
  document.getElementById('container')
);