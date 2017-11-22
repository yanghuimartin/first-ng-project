import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
		<div class="container box">
			<h1>{{title}}</h1>
			<nav>
				<a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
				<a routerLink="/heroes" routerLinkActive="active">Heroes</a>
			</nav>
			<router-outlet></router-outlet>
		</div>
    `,
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'welcome to my first Angular APP';

}
