import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Observable } from "rxjs";

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {

  constructor(private http: HttpClient) { }

  public igResponse: Observable<any>;

  ngOnInit(): void {

	const access_token = 'IGQVJWNjhQNEY4NkxGSEp4dDk5aFBxN0F6aHRTX095d3V1VkZAYeExOQ3NncFlxZAUNlR0lwcVdoTEs3TmNwWXE5UGYzaFUzMjgwWVZAzVVU2N255cDgwZA2ZAxbWtJdEx5Wm5hanNEQ3BHVGFKLVE3aWdULXpoUU5CMzRpWm1N'
	try {
		this.igResponse = this.http.get(`https://graph.instagram.com/me/media?fields=id,caption&access_token=${access_token}`);
		this.igResponse.subscribe((data) => console.log(data));
	}
	catch (error) {

	}
  }

}