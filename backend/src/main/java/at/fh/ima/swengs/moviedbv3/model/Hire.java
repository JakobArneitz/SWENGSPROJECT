package at.fh.ima.swengs.moviedbv3.model;

import com.fasterxml.jackson.annotation.*;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.Date;
import java.util.List;
import java.util.Objects;
import java.util.Set;

@Entity
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
public class Hire {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    
    private String enemyName;
    private String enemyPower;

    @Temporal(TemporalType.TIMESTAMP)
    private Date hireFrom;
    
    @Temporal(TemporalType.TIMESTAMP)
    private Date hireTo;
	
    private String superhero;

    public Hire() {
    }

    public Hire(String enemyName, String enemyPower) {
        this.enemyName = enemyName;
        this.enemyPower = enemyPower;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getEnemyName() {
        return enemyName;
    }

    public void setEnemyName(String enemyName) {
        this.enemyName = enemyName;
    }
    
    public String getEnemyPower() {
        return enemyPower;
    }

    public void setEnemyPower(String enemyPower) {
        this.enemyPower = enemyPower;
    }

    public Date getHireFrom() {
		return hireFrom;
	}

	public void setHireFrom(Date hireFrom) {
		this.hireFrom = hireFrom;
	}

	public Date getHireTo() {
		return hireTo;
	}

	public void setHireTo(Date hireTo) {
		this.hireTo = hireTo;
	}

    public String getSuperhero() {
        return superhero;
    }

    public void setSuperhero(String superhero) {
        this.superhero = superhero;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Hire hire = (Hire) o;
        return id == hire.id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public String toString() {
        return "Hire{" +
                "id=" + id +
                ", enemyName='" + enemyName + '\'' +
                ", enemyPower='" + enemyPower + '\'' +
                '}';
    }
}
