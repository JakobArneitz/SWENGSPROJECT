package at.fh.ima.swengs.moviedbv3.controller;

import at.fh.ima.swengs.moviedbv3.dto.HeroDTO;
import at.fh.ima.swengs.moviedbv3.facade.HeroFacade;
import at.fh.ima.swengs.moviedbv3.model.Hero;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
public class HeroController {

    @Autowired
    private HeroFacade heroFacade;

    @GetMapping("/dto/heroes/{id}")
    HeroDTO getById(@PathVariable Long id) {
        return heroFacade.getById(id);
    }

    @PostMapping("/dto/heroes")
    HeroDTO create(@RequestBody @Valid HeroDTO dto) {
        return heroFacade.create(dto);
    }

    @PutMapping("/dto/heroes/{id}")
    HeroDTO update(@RequestBody @Valid HeroDTO dto, @PathVariable Long id) {
        return heroFacade.update(id, dto);
    }

}
