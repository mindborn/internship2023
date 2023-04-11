/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package jdbc;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

/**
 *
 * @author Manoj
 */
public class Main2
{

    public static void main(String[] args) throws Exception
    {
//        new com.mysql.cj.jdbc.Driver();
        Class.forName("com.mysql.cj.jdbc.Driver");
        try (Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/internship", "root", "root"))
        {
            try (Statement st = con.createStatement())
            {
                try (ResultSet rs = st.executeQuery("select * from item"))
                {
                    while (rs.next())
                    {
                        int itemid = rs.getInt("itemid");
                        String name = rs.getString("name");
                        float rate = rs.getFloat("rate");

                        System.out.println(itemid + "\t" + name + "\t" + rate);
                    }
                }
            }
        }
    }
}
