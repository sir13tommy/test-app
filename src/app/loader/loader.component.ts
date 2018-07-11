import { Component, OnInit, Input } from '@angular/core';
import { HtmlService } from '../html.service';
import { timeout } from 'rxjs/operators';
import { asyncScheduler } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  private data : {
    content: string
  } = { content: 'Loading...' }
  @Input() url: string

  constructor(
    private html: HtmlService
  ) { }

  ngOnInit() {
    // get content
    this.html.get(this.url)
      .pipe(timeout(5000))
      .subscribe((data: any) => {
          this.data.content = data
        }, (err: HttpErrorResponse) => {
          this.data.content = err.message
      })
  }
}
