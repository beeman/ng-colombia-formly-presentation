export class MyFormComponent {
  public form = new FormGroup({});

  public fields: FormlyFieldConfig[] = [{
    type: 'input',
    key: 'name',
    templateOptions: {
      label: 'Name',
      placeholder: 'Enter name',
      required: true
    }
  }];

  public model = {};

  submit() {
    console.log(this.form.value);
  }
}