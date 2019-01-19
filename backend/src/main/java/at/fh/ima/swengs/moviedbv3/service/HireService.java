package at.fh.ima.swengs.moviedbv3.service;

import at.fh.ima.swengs.moviedbv3.model.Hire;
import at.fh.ima.swengs.moviedbv3.model.HireRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service()
public class HireService {

    @Autowired
    private HireRepository hireRepository;

    public Optional<Hire> findById(Long id) {
        return hireRepository.findById(id);
    }

    public Hire save(Hire entity) {
        return hireRepository.save(entity);
    }
}
