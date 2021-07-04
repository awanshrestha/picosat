
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
      Serial.print((rand() % (15 + 1 - 11) + 17)+ .01);           
      Serial.print(" °C    ");
      Serial.print(" Humidity: ");
      Serial.print((rand() % (60 + 1 - 50) + 60)+ .21);   
      Serial.print(" %    ");
      Serial.print(" Atm pressure: ");
      Serial.print((rand() % (100000 + 1 - 97000) + 97000)+ .34);              
      Serial.print(" pascal    ");
      Serial.print(" Altitude: ");
      Serial.print((rand() % (1500 + 1 - 1495) + 1495)+ .06);
      Serial.print(" meter    ");
      Serial.print(" Gas: ");
      Serial.print((rand() % (33 + 1 - 30) + 30));
      Serial.print(" Pollution: ");
      Serial.print((rand() % (14 + 1 - 5) + 5));
      Serial.print(" mmhg    ");
     
      Serial.print("    \n");

        delay(5000);   
  }
}


     
    
   
