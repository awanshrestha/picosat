
void setup() {
  Serial.begin(9600);
}

void loop() {
  int i=1;
  while(i<10000000){
      Serial.print("S.N  "); 
         Serial.print(i);
         Serial.print("   ");
         i++;

      Serial.print("Temperature: "); 
      Serial.print((rand() % (20 + 1 - 17) + 17)+ .01);           
      Serial.print(" °C    ");
      Serial.print(" Humidity: ");
      Serial.print((rand() % (70 + 1 - 60) + 60)+ .01);   
      Serial.print(" %    ");
      Serial.print(" Atm pressure: ");
      Serial.print((rand() % (10000 + 1 - 9000) + 9000)+ .01);              
      Serial.print(" pascal    ");
      Serial.print(" Altitude: ");
      Serial.print((rand() % (1500 + 1 - 1495) + 1495)+ .01);
      Serial.print(" meter    ");

      Serial.print(" ax: ");
      Serial.print("20.00");
      Serial.print("    ");

      Serial.print(" ay: ");
      Serial.print("20.00");
      Serial.print("    ");

      Serial.print(" az: ");
      Serial.print("20.00");
      Serial.print("    ");

      Serial.print(" gx: ");
      Serial.print("20.00");
      Serial.print("    ");
      Serial.print(" gy: ");
      Serial.print("20.00");
      Serial.print("    ");
      Serial.print(" gz: ");
      Serial.print("20.00");
      Serial.print("    \n");

        delay(5000);   
  }
  
 
}


     
    
   
