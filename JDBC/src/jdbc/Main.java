/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package jdbc;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

/**
 *
 * @author Manoj
 */
public class Main
{

    public static void main(String[] args) throws Exception
    {
        //Intialize JDBC (Java DataBase Connectivity) Driver
        Class.forName("com.mysql.cj.jdbc.Driver");

        //Connect to Database
        try (Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/internship", "root", "root"))
        {
            //Create Statement
            try (Statement st = con.createStatement())
            {
                //Execute Statement
//        st.executeUpdate("insert into item values (0,'Desktop',100000)");
//        int itemid=2;
//        String name="Mobile";
//        float rate=60000;
//        
//        String query=
//                "update item set name='"+
//                name+
//                "', rate="+
//                rate+
//                " where itemid="+
//                itemid;
//        System.out.println(query);
//        st.executeUpdate(query);
                int itemid = 1;
                st.executeUpdate("delete from item where itemid=" + itemid);
            }
        }
    }

}
