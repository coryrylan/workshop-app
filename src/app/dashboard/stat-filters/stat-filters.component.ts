import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stat-filters',
  templateUrl: './stat-filters.component.html',
  styleUrls: ['./stat-filters.component.scss']
})
export class StatFiltersComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      search: ['', Validators.required]
    });
  }

  ngOnInit() { }

  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}
