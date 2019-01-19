package at.fh.ima.swengs.moviedbv3.dto;

import java.util.Date;
import java.util.Set;

public class HireDTO {

	private Long id;
    private String enemyName;
    private String enemyPower;
    private Date hireFrom;
    private Date hireTo;
    private String superhero;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
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
}
