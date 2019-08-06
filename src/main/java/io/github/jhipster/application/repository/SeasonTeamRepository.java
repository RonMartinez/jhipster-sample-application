package io.github.jhipster.application.repository;

import io.github.jhipster.application.domain.SeasonTeam;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the SeasonTeam entity.
 */
@SuppressWarnings("unused")
@Repository
public interface SeasonTeamRepository extends JpaRepository<SeasonTeam, Long> {

}
