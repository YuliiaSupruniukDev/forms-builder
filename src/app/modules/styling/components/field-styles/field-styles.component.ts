import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IElement } from 'src/app/interfaces/element.interface';
import { FieldTransferService } from 'src/app/shared/services/field-transfer.service';
import { CFormGeneralStyle } from '../../form-general-style.constant';

@Component({
  selector: 'app-field-styles',
  templateUrl: './field-styles.component.html',
  styleUrls: ['./field-styles.component.scss'],
})
export class FieldStylesComponent implements OnInit {
  generalStyle = CFormGeneralStyle;
  pickedField: IElement;

  pickedFieldSubscription: Subscription;

  constructor(private fieldTransferService: FieldTransferService) {}

  ngOnInit(): void {
    this.onFieldChange();
  }

  onFieldChange(): void {
    this.pickedFieldSubscription =
      this.fieldTransferService.pickedField.subscribe((value: IElement) => {
        this.pickedField = value;
      });
  }

  onDestroy(): void {
    this.pickedFieldSubscription.unsubscribe();
  }
}
