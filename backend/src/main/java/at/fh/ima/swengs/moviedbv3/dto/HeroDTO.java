package at.fh.ima.swengs.moviedbv3.dto;


import at.fh.ima.swengs.moviedbv3.model.Gender;
import java.util.Set;

public class HeroDTO {

    private Long id;
    private String firstName;
    private String lastName;
	private String superheroName;
	private boolean alive = true;
    private Integer rating;
    private Gender gender;
    private Set<Long> movies;
	private String superPower;
	private String avatar;
	
    public String getSuperheroName() {
		return superheroName;
	}

	public void setSuperheroName(String superheroName) {
		this.superheroName = superheroName;
	}

	public String getSuperPower() {
		return superPower;
	}

	public void setSuperPower(String superPower) {
		this.superPower = superPower;
	}

	public String getAvatar() {
		return avatar;
	}

	public void setAvatar(String avatar) {
		this.avatar = avatar;
	}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public boolean isAlive() {
        return alive;
    }

    public void setAlive(boolean alive) {
        this.alive = alive;
    }

    public Integer getRating() {
        return rating;
    }

    public void setRating(Integer rating) {
        this.rating = rating;
    }

    public Gender getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }

    public Set<Long> getMovies() {
        return movies;
    }

    public void setMovies(Set<Long> movies) {
        this.movies = movies;
    }
}
