import java.sql.*;
public class SqlConn{
	
 public Connection conn;
 public Statement stmt;
 public ResultSet rs;
 
 public SqlConn(){
	 conn = null;
	 stmt = null;
	 rs = null;
 }
	//connects to the dabase 
 public void initConn(String strUrl){
 if(strUrl.equals("")||(strUrl=="null")){
 strUrl = "jdbc:odbc:monthly";
 }
 
	 try{
	Class.forName("sun.jdbc.odbc.JdbcOdbcDriver"); 
	 }
	 catch(Exception e){
	 	 System.out.println(e.toString());
	 }
	 try{
	 conn = DriverManager.getConnection(strUrl,"sa","");
	 }
	 catch(Exception e){
	 System.out.println("Could not load Driver"); 
	}	
 }
//checks if the connection is established 
 public boolean isConectionOk(String strUrl){
 
 
 if(strUrl.equals("")||(strUrl=="null")){
 strUrl = "jdbc:odbc:monthly";
 }
 
	 try{
	 Class.forName("sun.jdbc.odbc.JdbcOdbcDriver"); 
	 }
	 catch(Exception e){
	 	 System.out.println(e.toString());
	 	 return false;
	 }
	 try{
	 conn = DriverManager.getConnection(strUrl,"sa","");
	 }
	 catch(Exception e){
	 System.out.println("Could not load Driver"); 
	 return false;
	 }	
	 
	 return true;
	 
 }
 	//returns the connection back ... it helps if you want you have you own con inside you pages
 
 public Connection getConnection(String strUrl){ 
 if(strUrl.equals("")||(strUrl=="null")){
 strUrl = "jdbc:odbc:monthly";
 }
	 try{
	Class.forName("sun.jdbc.odbc.JdbcOdbcDriver"); 
	 }
	 catch(Exception e){
	 	 System.out.println(e.toString() + "sun.jdbc.odbc.JdbcOdbcDriver - failed");
	 }
	 try{
	 conn = DriverManager.getConnection(strUrl,"sa","");
	 }
	 catch(Exception e){
		 System.out.println("Could not load Driver"); 
	 }	
	 
	 return conn;
 }
	//returns the recordset 
 public ResultSet returnRecods(String strSQL)
 {
	 try{			
		 stmt = conn.createStatement();		
		 rs = stmt.executeQuery(strSQL);
	 }
	 catch(SQLException e){
		 System.out.println(e.toString() + " returnRecods() method failed"); 
	 }
	 return rs;
}
	//executes the query ..
 public void execQuery(String strSQL){
 	 try{
	stmt = conn.createStatement(); 
stmt.executeUpdate(strSQL);
 }
 catch(SQLException e){
		 System.out.println(e.toString() + " execQuery() method failed"); 
	 }
 }
 public void CloseConn(){
	 try{
	 conn.close();
	 }catch(SQLException e){
	 System.out.println(e.toString() + " CloseConn() method failed");
	 }
 }
 
	
}