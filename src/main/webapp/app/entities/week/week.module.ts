import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterSampleApplicationSharedModule } from 'app/shared';
import {
  WeekComponent,
  WeekDetailComponent,
  WeekUpdateComponent,
  WeekDeletePopupComponent,
  WeekDeleteDialogComponent,
  weekRoute,
  weekPopupRoute
} from './';

const ENTITY_STATES = [...weekRoute, ...weekPopupRoute];

@NgModule({
  imports: [JhipsterSampleApplicationSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [WeekComponent, WeekDetailComponent, WeekUpdateComponent, WeekDeleteDialogComponent, WeekDeletePopupComponent],
  entryComponents: [WeekComponent, WeekUpdateComponent, WeekDeleteDialogComponent, WeekDeletePopupComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSampleApplicationWeekModule {}
