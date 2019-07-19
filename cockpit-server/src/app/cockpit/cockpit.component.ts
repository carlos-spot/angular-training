import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
	selector: 'app-cockpit',
	templateUrl: './cockpit.component.html',
	styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
	
	@Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
	@Output() blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
	newServerName = '';
	newServerContent = '';
	
	@ViewChild('serverContentInput', { static: true }) serverContentInput: ElementRef;
	
	constructor() {
	}
	
	ngOnInit() {
	}
	
	// onAddServer(nameInput) {
	//   console.log(nameInput);
	//     this.serverCreated.emit({
	//         serverName: this.newServerName,
	//         serverContent: this.newServerContent
	//     });
	// }
	onAddServer(nameInput) {
		this.serverCreated.emit({
			serverName: nameInput.value,
			serverContent: this.newServerContent
		});
	}
	
	onAddBlueprint() {
		this.blueprintCreated.emit({
			serverName: this.newServerName,
			serverContent: this.newServerContent
		});
	}
	
}
