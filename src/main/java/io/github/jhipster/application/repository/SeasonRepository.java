package io.github.jhipster.application.repository;

import io.github.jhipster.application.domain.Season;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Season entity.
 */
@SuppressWarnings("unused")
@Repository
public interface SeasonRepository extends JpaRepository<Season, Long> {

}
