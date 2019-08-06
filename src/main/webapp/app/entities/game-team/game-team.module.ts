import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterSampleApplicationSharedModule } from 'app/shared';
import {
  GameTeamComponent,
  GameTeamDetailComponent,
  GameTeamUpdateComponent,
  GameTeamDeletePopupComponent,
  GameTeamDeleteDialogComponent,
  gameTeamRoute,
  gameTeamPopupRoute
} from './';

const ENTITY_STATES = [...gameTeamRoute, ...gameTeamPopupRoute];

@NgModule({
  imports: [JhipsterSampleApplicationSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    GameTeamComponent,
    GameTeamDetailComponent,
    GameTeamUpdateComponent,
    GameTeamDeleteDialogComponent,
    GameTeamDeletePopupComponent
  ],
  entryComponents: [GameTeamComponent, GameTeamUpdateComponent, GameTeamDeleteDialogComponent, GameTeamDeletePopupComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSampleApplicationGameTeamModule {}
