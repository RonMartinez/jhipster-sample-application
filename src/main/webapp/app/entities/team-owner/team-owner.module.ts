import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterSampleApplicationSharedModule } from 'app/shared';
import {
  TeamOwnerComponent,
  TeamOwnerDetailComponent,
  TeamOwnerUpdateComponent,
  TeamOwnerDeletePopupComponent,
  TeamOwnerDeleteDialogComponent,
  teamOwnerRoute,
  teamOwnerPopupRoute
} from './';

const ENTITY_STATES = [...teamOwnerRoute, ...teamOwnerPopupRoute];

@NgModule({
  imports: [JhipsterSampleApplicationSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    TeamOwnerComponent,
    TeamOwnerDetailComponent,
    TeamOwnerUpdateComponent,
    TeamOwnerDeleteDialogComponent,
    TeamOwnerDeletePopupComponent
  ],
  entryComponents: [TeamOwnerComponent, TeamOwnerUpdateComponent, TeamOwnerDeleteDialogComponent, TeamOwnerDeletePopupComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSampleApplicationTeamOwnerModule {}
