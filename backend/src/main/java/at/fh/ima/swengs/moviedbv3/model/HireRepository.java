package at.fh.ima.swengs.moviedbv3.model;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RepositoryRestResource()
public interface HireRepository extends PagingAndSortingRepository<Hire,Long>, JpaRepository<Hire, Long>, CrudRepository<Hire, Long> {

    //This would be exposed under the URL: http://localhost:8080/hires/search/findByEnemyNameAndEnemyPower
    public List<Hire> findByEnemyNameAndEnemyPower(@Param("enemyName") String enemyName, @Param("enemyPower")String enemyPower);

}
