import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, tap } from 'rxjs';

@Component({
  selector: 'search-component',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {

  @Input() filterName: string = '';

  @Output() onSubmiting = new EventEmitter<string>();

  inputSearch = new FormControl('', { nonNullable: true });

  handleSubmit(event: any) {
    // this.onSubmiting.emit(this.inputSearch.value);
    event.preventDefault();
  }

  onChange(): void {
    this.inputSearch.valueChanges
      .pipe(
        map((value: string) => value.trim()),
        filter((value: string) => value !== '' && value !== null),
        debounceTime(400),
        distinctUntilChanged(),
        tap((value: string) => this.onSubmiting.emit(value))
      )
      .subscribe();
  }

  ngOnInit(): void {
    this.onChange();
  }
}
