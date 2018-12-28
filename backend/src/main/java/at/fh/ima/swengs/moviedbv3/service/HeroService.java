package at.fh.ima.swengs.moviedbv3.service;

import at.fh.ima.swengs.moviedbv3.model.Hero;
import at.fh.ima.swengs.moviedbv3.model.HeroRepository;
import at.fh.ima.swengs.moviedbv3.model.Movie;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Service()
public class HeroService {

    @Autowired
    private HeroRepository heroRepository;

    public Optional<Hero> findById(Long id) {
        return heroRepository.findById(id);
    }

    public Hero save(Hero entity) {
        return heroRepository.save(entity);
    }

}