import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterSampleApplicationSharedModule } from 'app/shared';
import {
  RulesComponent,
  RulesDetailComponent,
  RulesUpdateComponent,
  RulesDeletePopupComponent,
  RulesDeleteDialogComponent,
  rulesRoute,
  rulesPopupRoute
} from './';

const ENTITY_STATES = [...rulesRoute, ...rulesPopupRoute];

@NgModule({
  imports: [JhipsterSampleApplicationSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [RulesComponent, RulesDetailComponent, RulesUpdateComponent, RulesDeleteDialogComponent, RulesDeletePopupComponent],
  entryComponents: [RulesComponent, RulesUpdateComponent, RulesDeleteDialogComponent, RulesDeletePopupComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSampleApplicationRulesModule {}
