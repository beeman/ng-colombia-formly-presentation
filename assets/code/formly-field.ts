export class MyFormComponent {
  public form = new FormGroup({});

  public model = {};

  public fields: FormlyFieldConfig[] = [{
    type: 'input',
    key: 'name',
    templateOptions: {
      label: 'Name',
      placeholder: 'Enter name',
      required: true
    }
  }];

  submit() {
    console.log(this.form.value);
  }
}