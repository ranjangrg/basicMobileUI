import { Component } from 'react';

class CalendarApp extends Component {
	clear_display = () => {
		const elem = document.getElementById("app-calendar-display");
		elem.value = "0";
	};
	render() {
		return (<div>
			<h1> CalendarApp App </h1>
			<div className="container">
				<div className="row"> 
					<input 
						type="number" 
						id="app-calendar-display"
						className="form-control text-end" 
						style={ {fontSize: "2rem"} } 
						defaultValue="0" />
				</div>
				<div className="row">
					<div className="col-9 border" onClick={ () => this.clear_display() }> AC </div>
					<div className="col-3 border"> ÷ </div>
				</div>
				<div className="row">
					<div className="col-3 border"> 7 </div>
					<div className="col-3 border"> 8 </div>
					<div className="col-3 border"> 9 </div>
					<div className="col-3 border"> x </div>
				</div>
				<div className="row">
					<div className="col-3 border"> 4 </div>
					<div className="col-3 border"> 5 </div>
					<div className="col-3 border"> 6 </div>
					<div className="col-3 border"> - </div>
				</div>
				<div className="row">
					<div className="col-3 border"> 1 </div>
					<div className="col-3 border"> 2 </div>
					<div className="col-3 border"> 3 </div>
					<div className="col-3 border"> + </div>
				</div>
				<div className="row">
					<div className="col-6 border"> 0 </div>
					<div className="col-3 border"> . </div>
					<div className="col-3 border"> = </div>
				</div>
			</div>
		</div>);
	};
}

export default CalendarApp;