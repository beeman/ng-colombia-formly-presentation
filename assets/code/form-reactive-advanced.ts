export class MyFormComponent {
  public form = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  submit() {
    console.log(this.form.value);
  }
}