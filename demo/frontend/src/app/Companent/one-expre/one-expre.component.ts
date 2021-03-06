import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-one-expre',
  templateUrl: './one-expre.component.html',
  styleUrls: ['./one-expre.component.scss']
})
export class OneExpreComponent implements OnInit {

  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  ngOnInit() {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
