import java.io.*;
import java.lang.*;
class marks
{
private int eng,math,sci;
public marks()
{
	eng=math=sci=0;
}
public marks(int m1,int m2,int m3)
{
	eng=m1;
	math=m2;
	sci=m3;
}
public void getdata()
{
	InputStreamReader ss=new InputStreamReader(System.in);
	BufferedReader br=new BufferedReader (ss);
	try
	{
		eng=Integer.parseInt(br.readLine());
		math=Integer.parseInt(br.readLine());
		sci=Integer.parseInt(br.readLine());
	}
	catch(Exception e)
	{
		System.out.println(e);
	}
 }
	public void putdata()
	{
		System.out.println("in english"+eng);
		System.out.println("im math"+math);
		System.out.println("in sci"+sci);
	}
}
	class inherit extends marks
	{
		private int roll;
		private String name;
		public inherit()
		{
			super();
			roll=0;
			name=null;
		}
		public inherit(int r,String n,int m1,int m2,int m3)
		{
			super(m1,m2,m3);
			roll=r;
			name=n;
		}
		public void getdata()
		{
			BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
			try
			{
				roll=Integer.parseInt(br.readLine());
				name=br.readLine();
				super.getdata();
			}
			catch(Exception e)
		{
				System.out.println(e);
			}
		}
		public void putdata()
		{
			System.out.println("roll is"+roll);
			System.out.println("name is"+name);
			super.putdata();
		}
		public static void main(String args[])
		{
			inherit c=new inherit();
			c.getdata();
			c.putdata();
			//System.out.println(c);
		}
}