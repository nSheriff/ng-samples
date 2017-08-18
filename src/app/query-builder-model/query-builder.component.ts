import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Query, Or, And, Rule } from './models';

@Component({
  templateUrl: 'query-builder.component.html',
  selector: 'app-query'
})
export class QueryBuilderModelingComponent {
  @Input() model: Query;
}
