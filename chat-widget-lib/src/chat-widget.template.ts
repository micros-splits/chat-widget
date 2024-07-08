export var chatWidgetTemplate=`
<div id="chat-container" class="chat-container">

	<style>
		.chat-container {
			height: 100%;
			width: 100%;
		}
	
		.chat-messages{
			height: calc(100% - 40px);
			overflow-y: scroll;
		}
	
		.chat-action-bar{
			display: block;
			height: 30px;
			margin-bottom: 0px;
			padding: 5px;
			padding-top: 10px;
		}
	
		.chat-input{
			height: 100%;
			width: calc(100% - 35px);
			margin: 0px;
			border-radius:10px;
			background-color: rgb(230, 230, 230);
			border-style: none;
	
		}
	
		.chat-send{
			height: 100%;
			width: 30px;
			margin-left: -0px;
			overflow: hidden;
			border-radius:10px;
			padding: 5px;
			border-style: none;
		}
	
		.message-line{
			width: calc(100% - 30px);
			padding: 15px;
			text-align: left;
			max-width: 100%;
		}
	
		.message-line-send {
			direction: rtl;
			text-size-adjust: 80%;
		}
	
		.message-body{
			border-radius: 10px;
			background-color: rgb(230, 230, 230);
			padding: 10px;
			max-width: 80%;
			width: fit-content;
		}
	
	</style>


	<div id="chat-messages" class="chat-messages">

		<Div class="message-line">
			<div class="message-body">hello </div>
		</Div>
		<Div class="message-line message-line-send">
			<div class="message-body ">hello </div>
		</Div>
		<Div class="message-line">
			<div class="message-body">hello helloxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx helloxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx helloxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx helloxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx helloxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx helloxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx helloxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx helloxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx helloxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx helloxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx helloxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx helloxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx helloxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx helloxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx helloxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx helloxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx helloxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx helloxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx helloxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx helloxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx helloxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx helloxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx helloxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx helloxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx helloxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx helloxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx helloxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx helloxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx helloxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx helloxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx helloxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx helloxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx helloxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx helloxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx helloxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx helloxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx helloxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx helloxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx helloxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx helloxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx helloxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx helloxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx helloxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx helloxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx helloxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx helloxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx helloxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx helloxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx helloxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx helloxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx helloxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx helloxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx helloxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx helloxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx helloxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx helloxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx helloxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx helloxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx helloxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx helloxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx helloxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx helloxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx helloxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx helloxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx helloxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx helloxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx helloxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx helloxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx helloxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>
		</Div>
		
	</div>
	<div class="chat-action-bar">
		<input id="chat-input" class="chat-input" placeholder="enter order..."/>
		<button id="chat-send" class="chat-send">></button>
	</div>
</div>
`;