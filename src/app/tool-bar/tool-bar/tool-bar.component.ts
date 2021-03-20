import { EventEmitter, Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent implements OnInit {

	@Output()
	accordianClicked : EventEmitter<Boolean> = new EventEmitter<Boolean>();

	constructor() { }

	ngOnInit(): void {
	}

	public accordianClick() {
		this.accordianClicked.emit(true);
		console.log('tool-bar')
	}
}
