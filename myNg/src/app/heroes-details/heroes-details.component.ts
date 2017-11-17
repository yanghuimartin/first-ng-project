import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-heroes-details',
    templateUrl: './heroes-details.component.html',
    styleUrls: ['./heroes-details.component.scss']
})
export class HeroesDetailsComponent implements OnInit {
    constructor() {
    }
    /**
     *@description 添加hero name
     * @param name
     */
    // tslint:disable-next-line:one-line
    add(name: string){
        // alert(name);
        console.log(this);
    }
    /**
     * 生命周期(组件初始化)
     */
    ngOnInit(): void {
        console.log('ng init');
    }

}
