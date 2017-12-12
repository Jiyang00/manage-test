import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-project-manage',
    templateUrl: './project-manage.component.html',
    styleUrls: ['./project-manage.component.scss']
})
export class ProjectManageComponent implements OnInit {
    projectList: object[];

    constructor() {
    }

    ngOnInit() {
        this.projectList = [
            {
                title: '项目名称项目名称项目名称项目名称',
                statusText: '状态：运行中'
            },
            {
                title: '项目名称项目名称项目名称项目名称',
                statusText: '状态：运行中'
            },
            {
                title: '项目名称项目名称项目名称项目名称',
                statusText: '状态：运行中'
            }
        ]
    }

}
