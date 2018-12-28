package at.fh.ima.swengs.moviedbv3.facade;

import at.fh.ima.swengs.moviedbv3.dto.HeroDTO;
import at.fh.ima.swengs.moviedbv3.model.Hero;
import at.fh.ima.swengs.moviedbv3.service.HeroService;
import at.fh.ima.swengs.moviedbv3.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
import java.util.stream.Collectors;

@Service()
@Transactional
public class HeroFacade {

    @Autowired
    private HeroService heroService;

    @Autowired
    private MovieService movieService;

    void mapDtoToEntity(HeroDTO dto, Hero entity) {
        entity.setFirstName(dto.getFirstName());
        entity.setLastName(dto.getLastName());
        entity.setSuperheroName(dto.getSuperheroName());
        entity.setAlive(dto.isAlive());
        entity.setRating(dto.getRating());
        entity.setGender(dto.getGender());
        entity.setMovies(movieService.getMovies(dto.getMovies()));
        entity.setSuperPower(dto.getSuperPower());
        entity.setAvatar(dto.getAvatar());
    }

    private void mapEntityToDto(Hero entity, HeroDTO dto) {
        dto.setId(entity.getId());
        dto.setFirstName(entity.getFirstName());
        dto.setLastName(entity.getLastName());
        dto.setSuperheroName(entity.getSuperheroName());
        dto.setAlive(entity.isAlive());
        dto.setRating(entity.getRating());
        dto.setGender(entity.getGender());
        dto.setMovies(entity.getMovies().stream().map((m) -> m.getId()).collect(Collectors.toSet()));
        dto.setSuperPower(entity.getSuperPower());
        dto.setAvatar(entity.getAvatar());
    }

    public HeroDTO update(Long id, HeroDTO dto) {
        Hero entity = heroService.findById(id).get();
        mapDtoToEntity(dto, entity);
        mapEntityToDto(heroService.save(entity), dto);
        return dto;
    }

    public HeroDTO create(HeroDTO dto) {
        Hero entity = new Hero();
        mapDtoToEntity(dto, entity);
        mapEntityToDto(heroService.save(entity), dto);
        return dto;
    }

    public HeroDTO getById(Long id) {
        Hero entity = heroService.findById(id).get();
        HeroDTO dto = new HeroDTO();
        mapEntityToDto(entity, dto);
        return dto;
    }
}
