import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { AboutMeComponent } from './about-me/about-me.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BlogComponent } from './blog/blog.component'
import { BlogCardComponent } from './blog-card/blog-card.component'
import { ResumeComponent } from './resume/resume.component';
import { SocialComponent } from './social/social.component';

const routes: Routes = [
	{ path: 'about-me', component: AboutMeComponent},
	{ path: 'blog', component: BlogComponent},
	{ path: 'blog-card', component: BlogCardComponent },
	{ path: 'resume', component: ResumeComponent },
	{ path: 'social', component: SocialComponent },
	{ path: '', component: HomePageComponent},

]
@NgModule({
  declarations: [],
  imports: [
	RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
