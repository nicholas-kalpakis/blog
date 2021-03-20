import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

	public introTitle: string = "Short Summary of My Background";
	public introBody: string = "Gives an intro to my background as a software engineer.";
	public introImg: string = "assets/img/blog-intro-img.jpeg"
	public introAuthor: string = "Nick Kalpakis"

	public wfhTitle: string = "Working from Home in 2020";
	public wfhBody: string = "What affects are wfh going to have in the future?  Why would you pay New York City rent while you don't have to live in a close proximity to the office?";
	public wfhImg: string = "assets/img/blog-intro-img.jpeg";
	public wfhAuthor: string = "Nick Kalpakis";
	

	public futureTitle: string = "Buidling Technology in the Future";
	public futureBody: string = "Software affects our daily lives and a majority of our decisions every day.  It is up to product teams to shape the daily journey of everyone's lives.";
	public futureImg: string = "assets/img/blog-intro-img.jpeg";
	public futureAuthor: string = "Nick Kalpakis";


	public twitterTitle: string = "Twitter VS Slack/Discord/Clubhouse";
	public twitterBody: string = "I'd like to see Twitter move into these spaces."
	public twitterImg: string = "assets/img/blog-intro-img.jpeg";
	public twitterAuthor: string = "Nick Kalpakis";
	
	constructor() { }

	ngOnInit(): void {
	}
}
