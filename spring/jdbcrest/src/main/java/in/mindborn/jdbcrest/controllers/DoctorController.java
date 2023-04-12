package in.mindborn.jdbcrest.controllers;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import in.mindborn.jdbcrest.entity.Doctor;

@RestController
public class DoctorController {
    
    static
    {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }

    @GetMapping("/doctor")
    public List<Doctor> getAllDoctors() throws Exception
    {
        List<Doctor> doctors=new ArrayList<>();
        
        try(Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/internship", "root", "root");
            Statement st=con.createStatement();
            ResultSet rs=st.executeQuery("select * from doctor where active=1"))
        {
            while(rs.next())
            {
                Doctor d=new Doctor();
                d.setDoctorid(rs.getLong("doctorid"));
                d.setName(rs.getString("name"));
                d.setAddress(rs.getString("address"));
                d.setPhone(rs.getString("phone"));
                d.setDegree(rs.getString("degree"));
                d.setSpeciality(rs.getString("speciality"));
                d.setActive(rs.getInt("active"));

                doctors.add(d);
            }
        }
        return doctors;
    }

    @GetMapping("/doctor/{id}")
    public Optional<Doctor> getDoctor(@PathVariable("id") Long doctorid) throws Exception
    {
        Doctor d=null;

        String query="select * from doctor where doctorid="+doctorid+" and active=1";
        System.out.println(query);

        try(Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/internship", "root", "root");
            Statement st=con.createStatement();
            ResultSet rs=st.executeQuery(query))
        {
            if(rs.next())
            {
                System.out.println("Found data");
                d=new Doctor();
                d.setDoctorid(rs.getLong("doctorid"));
                d.setName(rs.getString("name"));
                d.setAddress(rs.getString("address"));
                d.setPhone(rs.getString("phone"));
                d.setDegree(rs.getString("degree"));
                d.setSpeciality(rs.getString("speciality"));
                d.setActive(rs.getInt("active"));
            }
        }
        return Optional.ofNullable(d);
    }

    @PostMapping("/doctor")
    public Doctor addDoctor(@RequestBody Doctor d) throws Exception
    {
        String query="insert into doctor values (0,'"+
        d.getName()+"','"+
        d.getAddress()+"','"+
        d.getPhone()+"','"+
        d.getDegree()+"','"+
        d.getSpeciality()+"',1)";

        System.out.println(query);

        try(Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/internship", "root", "root");
            Statement st=con.createStatement())
        {
            st.executeUpdate(query);
        }
        return d;
    }

    @PutMapping("/doctor")
    public Doctor editDoctor(@RequestBody Doctor d) throws Exception
    {
        String query="update doctor set "+
        "name='"+d.getName()+"',"+
        "address='"+d.getAddress()+"',"+
        "phone='"+d.getPhone()+"',"+
        "degree='"+d.getDegree()+"',"+
        "speciality='"+d.getSpeciality()+"',"+
        "active="+d.getActive()+" "+
        "where doctorid="+d.getDoctorid();

        System.out.println(query);

        try(Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/internship", "root", "root");
            Statement st=con.createStatement())
        {
            st.executeUpdate(query);
        }

        return d;

    }

    @DeleteMapping("/doctor/{id}")
    public boolean deleteDoctor(@PathVariable("id") Long doctorid) throws Exception
    {
        String query="update doctor set active=0 where doctorid="+doctorid;
        // String query="delete from doctor where doctorid="+doctorid;
        try(Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/internship", "root", "root");
            Statement st=con.createStatement())
        {
            st.executeUpdate(query);
        }
        return true;
    }

}
