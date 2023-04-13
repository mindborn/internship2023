package in.mindborn.jdbcrest.controllers;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.lang.Nullable;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import in.mindborn.jdbcrest.entity.Medicine;

class MedicineRowMapper implements RowMapper<Medicine> {

    @Override
    @Nullable
    public Medicine mapRow(ResultSet rs, int rownum) throws SQLException {
        System.out.println("mapRow method invoked");
        Medicine m = new Medicine();
        m.setMedicineid(rs.getInt("medicineid"));
        m.setName(rs.getString("name"));
        m.setMfgdate(rs.getDate("mfgdate"));
        m.setExpdate(rs.getDate("expdate"));
        m.setRate(rs.getFloat("rate"));

        return m;
    }

}

@RestController
public class MedicineController {

    @Autowired
    JdbcTemplate jdbcTemplate;

    @GetMapping("/medicine")
    public List<Medicine> getAllMedicines()
    {
        List<Medicine> medicines=this.jdbcTemplate.query("select * from medicine", new MedicineRowMapper());
        return medicines;
    }

    @GetMapping("/medicine/{id}")
    public Optional<Medicine> getMedicine(@PathVariable("id") Integer id) {
        try
        {
            Medicine m = this.jdbcTemplate.queryForObject("select * from medicine where medicineid=?", new MedicineRowMapper(), id);
            return Optional.of(m);
        }
        catch(DataAccessException e)
        {
            return Optional.empty();
        }
    }

    @PostMapping("/medicine")
    public Medicine addMedicine(@RequestBody Medicine medicine) {
        int rows = this.jdbcTemplate.update("insert into medicine values (0,?,?,?,?,?)",
                medicine.getName(),
                medicine.getContents(),
                medicine.getMfgdate(),
                medicine.getExpdate(),
                medicine.getRate());
        System.out.println(rows + " updated");
        return medicine;
    }

    @PutMapping("/medicine")
    public Medicine updateMedicine(@RequestBody Medicine medicine) {
        int rows = this.jdbcTemplate.update(
                "update medicine set name=?, contents=?, mfgdate=?, expdate=?, rate=? where medicineid=?",
                medicine.getName(),
                medicine.getContents(),
                medicine.getMfgdate(),
                medicine.getExpdate(),
                medicine.getRate(),
                medicine.getMedicineid());
        System.out.println(rows + " rows updated");
        return medicine;
    }

    @DeleteMapping("/medicine/{id}")
    public void deleteMedicine(@PathVariable("id") Integer id) {
        this.jdbcTemplate.update("delete from medicine where medicineid=?", id);
    }
}
