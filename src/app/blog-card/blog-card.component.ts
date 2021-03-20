import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent implements OnInit {

	@Input()
	public title: String;

	@Input()
	public body: String;

	@Input()
	public img: String;

	@Input()
	public author: String;

	constructor() { }

	ngOnInit(): void {
	}

}
