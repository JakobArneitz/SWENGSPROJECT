package at.fh.ima.swengs.moviedbv3.model;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RepositoryRestResource()
public interface HeroRepository extends PagingAndSortingRepository<Hero,Long>, JpaRepository<Hero, Long>, CrudRepository<Hero, Long> {

    //This would be exposed under the URL: http://localhost:8080/heroes/search/findByFirstNameAndLastName
    public List<Hero> findByFirstNameAndLastName(@Param("firstName") String firstName, @Param("lastName")String lastName);

}
