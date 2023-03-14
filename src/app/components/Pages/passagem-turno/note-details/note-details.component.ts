import { Component } from '@angular/core';
import { AbstractControl, NgForm, UntypedFormControl, UntypedFormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss']
})
export class NoteDetailsComponent {

  TurnoForm = new UntypedFormGroup({
    title: new UntypedFormControl('',Validators.required),
    message: new UntypedFormControl('',Validators.required)
    
  });



  get title() {
    return this.TurnoForm.get('title');
  }

  get message() {
    return this.TurnoForm.get('message');
  }

  submit() {
    
    const { title, message  } = this.TurnoForm.value;
    console.log(title);
    console.log(message);

  }
}
