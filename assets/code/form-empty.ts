export class MyFormComponent {
  public form = new FormGroup({});

  submit() {
    console.log(this.form.value);
  }
}