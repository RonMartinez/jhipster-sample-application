package io.github.jhipster.application.repository;

import io.github.jhipster.application.domain.Rules;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Rules entity.
 */
@SuppressWarnings("unused")
@Repository
public interface RulesRepository extends JpaRepository<Rules, Long> {

}
