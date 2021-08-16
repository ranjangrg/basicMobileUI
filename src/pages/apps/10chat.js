import { Component } from 'react';

// import { SHA256 } from '../../modules/hashFunctions';

let chat_app_state_cache = [
	{src: "bot", msg: "Hi, how may I help you today?", timestamp: 1629138539000},
	// {src: "user", msg: "Hello bot", timestamp: 1629138540000},
];

class ChatBot {
	constructor() {
		this.replies = [
			"Uhuh", "Okay.", "I see", "Thats interesting.",
			"Interesting.", "Is that so?", "Pardon?", "Okay lets begin."
		];
	}
	send_reply = () => {
		let reply_idx = parseInt(Math.random() * this.replies.length);
		let self_obj = this;
		return self_obj.replies[reply_idx];
	};
	get_message = (message) => {
		//.. not implemented .. not used
	};
}

class ChatApp extends Component {
	constructor(props) {
		super(props);
		this.chatbot = new ChatBot();
		this.component_key = 0;
		this.chatbox_id = "app-chat-chatbox";
		this.msg_input_id = "app-chat-msg-input";
		this.state = {
			messages: chat_app_state_cache.slice()
		};
	}
	get_new_key = () => { return this.component_key++; };
	componentDidMount = () => {
		this.setState({
			messages: chat_app_state_cache.slice()
		});
	};
	componentWillUnmount = () => {
		chat_app_state_cache = this.state.messages;
	};
	componentDidUpdate = () => {};
	// Warning: maybe use 'stack' datastruct for message list
	get_sorted_msgs = ( ) => {
		return this.state.messages.sort( (msg1, msg2) => {
			return msg1.timestamp - msg2.timestamp;
		});
	};
	create_message = (message) => {
		const from = message.src;
		const msg = message.msg;
		const timestamp = message.timestamp;
		const local_date_obj = new Date(timestamp);
		const local_date = local_date_obj.toLocaleDateString();
		const local_time = local_date_obj.toLocaleTimeString();
		const time_to_display = `${local_date}, ${local_time}`;
		const is_bot = (from === "bot");
		const new_key = this.get_new_key();
		let msg_comp = (
			<div 
				key={`app-chat-msg-${from}-${timestamp}-${new_key}`} 
				className="row align-items-center py-2">
				<div className={ is_bot ? "col" : "col order-last"}>	
					<h4>{ from }</h4>
				</div>
				<div className="col-10">
					<div className="card">
						<div className="card-body">
							<span className="float-end"> { msg } </span>
						</div>
						<div className="card-footer text-muted">
							<sub className="float-end pb-3">
								{ time_to_display } <br></br>
							</sub>
						</div>
					</div>
				</div>
			</div>);
		return msg_comp;
	};
	add_message = (e) => {
		const msg_input_elem = document.getElementById(e.target.dataset.messageSrcId);
		const new_user_msg_content = msg_input_elem.value;
		if (new_user_msg_content !== '') {
			let old_messages = this.state.messages.slice();
			const new_user_msg = {
				src: "user", 
				msg: new_user_msg_content, 
				timestamp: new Date().getTime()
			};

			// handle 'bot' START
			this.chatbot.get_message(new_user_msg_content);
			const new_bot_msg = {
				src: "bot", 
				msg: this.chatbot.send_reply(), 
				timestamp: new Date().getTime()
			};
			// handle 'bot' END

			let new_messages = [new_user_msg, new_bot_msg, ...old_messages];
			this.setState({
				messages: new_messages
			}, () => {
				// things todo after updating state
				msg_input_elem.value = '';	// clear input
				// scroll to last message
				let chatbox_elem = document.getElementById(e.target.dataset.chatBoxId);
				const chatbox_height = chatbox_elem.scrollHeight;
				chatbox_elem.scrollTop = chatbox_height;
			});
		}
	};
	render() {
		return (<div>
			<h1> Chat App </h1>
			<div id={ this.chatbox_id } className="container px-1" 
				style={ {
					overflowY: "scroll",
					height: "50vh"
				} }>
				{ this.get_sorted_msgs().map( (_msg) => { 
					return this.create_message(_msg);
				} ) }
			</div>
			<div className="input-group mb-3">
				<input 
					id={ this.msg_input_id }
					type="text" className="form-control" 
					placeholder="Enter message ..." 
					aria-label="user message" aria-describedby="app-chat-msg-btn" />
				<button 
					className="btn btn-outline-primary" 
					onClick={ (e) => this.add_message(e) }
					data-message-src-id={ this.msg_input_id }
					data-chat-box-id={ this.chatbox_id }
					type="button" id="app-chat-msg-btn"> Send </button>
			</div>
		</div>);
	}
}

export default ChatApp;