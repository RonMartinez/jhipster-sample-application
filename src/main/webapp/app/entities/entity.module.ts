import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'owner',
        loadChildren: () => import('./owner/owner.module').then(m => m.JhipsterSampleApplicationOwnerModule)
      },
      {
        path: 'team',
        loadChildren: () => import('./team/team.module').then(m => m.JhipsterSampleApplicationTeamModule)
      },
      {
        path: 'team-owner',
        loadChildren: () => import('./team-owner/team-owner.module').then(m => m.JhipsterSampleApplicationTeamOwnerModule)
      },
      {
        path: 'rules',
        loadChildren: () => import('./rules/rules.module').then(m => m.JhipsterSampleApplicationRulesModule)
      },
      {
        path: 'season',
        loadChildren: () => import('./season/season.module').then(m => m.JhipsterSampleApplicationSeasonModule)
      },
      {
        path: 'week',
        loadChildren: () => import('./week/week.module').then(m => m.JhipsterSampleApplicationWeekModule)
      },
      {
        path: 'game',
        loadChildren: () => import('./game/game.module').then(m => m.JhipsterSampleApplicationGameModule)
      },
      {
        path: 'game-team',
        loadChildren: () => import('./game-team/game-team.module').then(m => m.JhipsterSampleApplicationGameTeamModule)
      },
      {
        path: 'season-team',
        loadChildren: () => import('./season-team/season-team.module').then(m => m.JhipsterSampleApplicationSeasonTeamModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSampleApplicationEntityModule {}
