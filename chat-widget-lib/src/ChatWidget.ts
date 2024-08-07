import { chatWidgetTemplate } from "./chat-widget.template";




export class ChatWidget {

    doc:Document;
    chatContainer:HTMLElement;
    sendButton:HTMLButtonElement;
    messagesList:HTMLDivElement;

    init(){
        const parser = new DOMParser();
        this.doc = parser.parseFromString(chatWidgetTemplate, 'text/html');

        //this.doc=Document.parseHTMLUnsafe(html);
        this.sendButton=this.doc.getElementById("chat-send") as any;
        this.messagesList=this.doc.getElementById("chat-messages") as any;
        this.chatContainer=this.doc.getElementById("chat-container");
    }

    onSendCLick(listener: (this: HTMLButtonElement, ev: MouseEvent) => any, options?: boolean | AddEventListenerOptions):void{
        return this.sendButton.addEventListener('click',listener);
    }

    send(text:string){
        this.chatContainer.append(`
            <Div class="message-line message-line-send">
			    <div class="message-body">${text}</div>
		    </Div>
            `);
    }


}