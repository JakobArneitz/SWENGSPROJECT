package at.fh.ima.swengs.moviedbv3.facade;

import at.fh.ima.swengs.moviedbv3.dto.HireDTO;
import at.fh.ima.swengs.moviedbv3.model.Hire;
import at.fh.ima.swengs.moviedbv3.service.HireService;
import at.fh.ima.swengs.moviedbv3.service.HeroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
import java.util.stream.Collectors;

@Service()
@Transactional
public class HireFacade {

    @Autowired
    private HireService hireService;

    @Autowired
    private HeroService heroService;

    void mapDtoToEntity(HireDTO dto, Hire entity) {
        entity.setEnemyName(dto.getEnemyName());
        entity.setEnemyPower(dto.getEnemyPower());
        entity.setHireFrom(dto.getHireFrom());
        entity.setHireTo(dto.getHireTo());
        entity.setSuperhero(dto.getSuperhero());
    }

    private void mapEntityToDto(Hire entity, HireDTO dto) {
        dto.setEnemyName(entity.getEnemyName());
        dto.setEnemyPower(entity.getEnemyPower());
        dto.setHireFrom(entity.getHireFrom());
        dto.setHireTo(entity.getHireTo());
        dto.setSuperhero(entity.getSuperhero());
    }

    public HireDTO update(Long id, HireDTO dto) {
        Hire entity = hireService.findById(id).get();
        mapDtoToEntity(dto, entity);
        mapEntityToDto(hireService.save(entity), dto);
        return dto;
    }

    public HireDTO create(HireDTO dto) {
        Hire entity = new Hire();
        mapDtoToEntity(dto, entity);
        mapEntityToDto(hireService.save(entity), dto);
        return dto;
    }

    public HireDTO getById(Long id) {
        Hire entity = hireService.findById(id).get();
        HireDTO dto = new HireDTO();
        mapEntityToDto(entity, dto);
        return dto;
    }
}
