import { CdkDragDrop } from '@angular/cdk/drag-drop';
import {
  Component
} from '@angular/core';
import { DragAndDropService } from 'src/app/shared/services/drag-and-drop.service';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss'],
})
export class FormBuilderComponent {
  fields: string[] = [];

  constructor(private dragAndDropService: DragAndDropService) {}

  onDrop(event: CdkDragDrop<string[]>) {
    this.dragAndDropService.drop(event);
  }
}
