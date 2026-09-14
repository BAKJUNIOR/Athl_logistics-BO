
import { Component } from '@angular/core';
import { PageBreadcrumbComponent } from '../../../components/common/page-breadcrumb/page-breadcrumb.component';
import { DefaultInputsComponent } from '../../../components/form/form-elements/default-inputs/default-inputs.component';
import { SelectInputsComponent } from '../../../components/form/form-elements/select-inputs/select-inputs.component';
import { TextAreaInputComponent } from '../../../components/form/form-elements/text-area-input/text-area-input.component';
import { InputStatesComponent } from '../../../components/form/form-elements/input-states/input-states.component';
import { InputGroupComponent } from '../../../components/form/form-elements/input-group/input-group.component';
import { FileInputExampleComponent } from '../../../components/form/form-elements/file-input-example/file-input-example.component';
import { CheckboxComponentsComponent } from '../../../components/form/form-elements/checkbox-components/checkbox-components.component';
import { RadioButtonsComponent } from '../../../components/form/form-elements/radio-buttons/radio-buttons.component';
import { ToggleSwitchComponent } from '../../../components/form/form-elements/toggle-switch/toggle-switch.component';
import { DropzoneComponent } from '../../../components/form/form-elements/dropzone/dropzone.component';

@Component({
  selector: 'app-form-elements',
  imports: [
    PageBreadcrumbComponent,
    DefaultInputsComponent,
    SelectInputsComponent,
    TextAreaInputComponent,
    InputStatesComponent,
    InputGroupComponent,
    FileInputExampleComponent,
    CheckboxComponentsComponent,
    RadioButtonsComponent,
    ToggleSwitchComponent,
    DropzoneComponent
],
  templateUrl: './form-elements.component.html',
  styles: ``
})
export class FormElementsComponent {

}
