import java.awt.*;
import java.awt.event.*;
public class Accelerator extends java.applet.Applet implements ActionListener {
 double v1 = 0;
 double v2 = 0;
 double time = 0;
 double a = 0;
TextField txt1 = new TextField("Initial Velocity",30);
TextField txt2 = new TextField("Final Velocity",30);
TextField txt3 = new TextField("Time",30);
TextField txt4 = new TextField("Meters/S ",30);
Button btn1 = new Button(" Compute ");
Button btn2 = new Button(" Reset ");
 public void init() {
 add(txt1);
 add(txt2); 
 add(txt3);
 add(btn1);
 btn1.addActionListener(this); 
 add(btn2);
 btn2.addActionListener(this); 
 add(txt4);
 txt4.setEditable(false);
 
 }
 public void actionPerformed(ActionEvent e) {
Object source = e.getSource();
if (source == btn1) {
 double v1 = (double)((Double.parseDouble(txt1.getText())));
 double v2 = (double)((Double.parseDouble(txt2.getText())));
 double time = (double)((Double.parseDouble(txt3.getText())));
 a = (v2 - v1) / time;
 txt4.setText("Meters/S =" + a);
}
 if (source == btn2) {
 txt1.setText("Initial Velocity");
 txt2.setText("Final Velocity");
 txt3.setText("Time");
 txt4.setText("Meters/S ");
 }
else {
}
 }
 
}