import {Component, OnInit, TemplateRef} from '@angular/core';
import {BsModalService, BsModalRef} from "ngx-bootstrap";

@Component({
    selector: 'app-info',
    templateUrl: './info.component.html',
    styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
    modalRef: BsModalRef;
    name;
    bsRangeValue: any = [new Date(2017, 7, 4), new Date(2017, 7, 20)];

    constructor(private modalService: BsModalService) {
    }

    edit(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
        this.modalService.onHidden.subscribe((reason: string, e, a, d, c) => {
            console.log(reason, e, a, d, c);
        })
    }

    ngOnInit() {
    }
}
