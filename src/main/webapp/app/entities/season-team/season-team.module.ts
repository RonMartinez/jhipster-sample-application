import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterSampleApplicationSharedModule } from 'app/shared';
import {
  SeasonTeamComponent,
  SeasonTeamDetailComponent,
  SeasonTeamUpdateComponent,
  SeasonTeamDeletePopupComponent,
  SeasonTeamDeleteDialogComponent,
  seasonTeamRoute,
  seasonTeamPopupRoute
} from './';

const ENTITY_STATES = [...seasonTeamRoute, ...seasonTeamPopupRoute];

@NgModule({
  imports: [JhipsterSampleApplicationSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    SeasonTeamComponent,
    SeasonTeamDetailComponent,
    SeasonTeamUpdateComponent,
    SeasonTeamDeleteDialogComponent,
    SeasonTeamDeletePopupComponent
  ],
  entryComponents: [SeasonTeamComponent, SeasonTeamUpdateComponent, SeasonTeamDeleteDialogComponent, SeasonTeamDeletePopupComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSampleApplicationSeasonTeamModule {}
