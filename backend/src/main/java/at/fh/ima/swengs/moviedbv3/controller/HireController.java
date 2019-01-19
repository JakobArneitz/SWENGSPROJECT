package at.fh.ima.swengs.moviedbv3.controller;

import at.fh.ima.swengs.moviedbv3.dto.HireDTO;
import at.fh.ima.swengs.moviedbv3.facade.HireFacade;
import at.fh.ima.swengs.moviedbv3.model.Hire;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
public class HireController {

    @Autowired
    private HireFacade hireFacade;

    @GetMapping("/dto/hires/{id}")
    HireDTO getById(@PathVariable Long id) {
        return hireFacade.getById(id);
    }

    @PostMapping("/dto/hires")
    HireDTO create(@RequestBody @Valid HireDTO dto) {
        return hireFacade.create(dto);
    }

    @PutMapping("/dto/hires/{id}")
    HireDTO update(@RequestBody @Valid HireDTO dto, @PathVariable Long id) {
        return hireFacade.update(id, dto);
    }
}
