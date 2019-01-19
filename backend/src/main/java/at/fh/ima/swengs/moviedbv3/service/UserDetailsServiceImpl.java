package at.fh.ima.swengs.moviedbv3.service;

import at.fh.ima.swengs.moviedbv3.model.ActorRepository;
import at.fh.ima.swengs.moviedbv3.model.Movie;
import at.fh.ima.swengs.moviedbv3.model.MovieRepository;
import at.fh.ima.swengs.moviedbv3.model.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service("userDetailsService")   // It has to be annotated with @Service.
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private BCryptPasswordEncoder encoder;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private MovieRepository movieRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        try {
            at.fh.ima.swengs.moviedbv3.model.User user = userRepository.findByUsername(username);
            if (user.getUsername().equals(username)) {

                // Remember that Spring needs roles to be in this format: "ROLE_" + userRole (i.e. "ROLE_ADMIN")
                // So, we need to set it to that format, so we can verify and compare roles (i.e. hasRole("ADMIN")).
                List<GrantedAuthority> grantedAuthorities = AuthorityUtils
                        .commaSeparatedStringToAuthorityList(user.isAdmin() ? "ROLE_ADMIN" : "ROLE_USER");

                // The "User" class is provided by Spring and represents a model class for user to be returned by UserDetailsService
                // And used by auth manager to verify and check user authentication.
                return new User(user.getUsername(), encoder.encode(user.getPassword()), grantedAuthorities);
            }
        } catch (Exception e) {
        }
        // If user not found. Throw this exception.
        throw new UsernameNotFoundException("Username: " + username + " not found");
    }

    @PostConstruct()
    @Transactional
    public void initUsers() {
        if (userRepository.count() == 0) {
            at.fh.ima.swengs.moviedbv3.model.User admin = new at.fh.ima.swengs.moviedbv3.model.User();
            admin.setUsername("admin");
            admin.setPassword("12345");
            admin.setAdmin(true);
            userRepository.save(admin);

            at.fh.ima.swengs.moviedbv3.model.User tester = new at.fh.ima.swengs.moviedbv3.model.User();
            tester.setUsername("tester");
            tester.setPassword("12345");
            userRepository.save(tester);
        }

        if (movieRepository.count() == 0) {
            List<String> movieNames = Arrays.asList("Wonder Woman","Spider-man","Batman","Superman","Justice League", "Iron Man", "Hulk", "Avengers", "Black Panther", "Deadpool");
            List<Movie> movies = new ArrayList<>();
            movieNames.forEach(movieName -> {
                Movie movie = new Movie();
                movie.setTitle(movieName);
                movies.add(movie);
            });
            movieRepository.saveAll(movies);
        }

    }

}