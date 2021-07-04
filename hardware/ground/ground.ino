#include <nRF24L01.h>
#include <RF24.h>
#include <RF24_config.h>

RF24 receive (9,8);    // ce,csn          //create object called receive
byte address [5] = "00001";               //create an array with 5 elements, where each element is 1 byte;


typedef struct
  {
    float temperature = 0;
    float humidity = 0;
    float pressure = 0;
    float altitude = 0;
    float ax = 0;
    float ay = 0;
    float az = 0;
    float gx = 0;
    float gy = 0;
    float gz = 0;
    
  }Package;

  Package data;

void setup() {
  Serial.begin(9600);
  Serial.print("Starting Receiver \n");
  receive.begin();
  receive.openReadingPipe(0,address);      //open reading pipe 0 at address 00001
  receive.setPALevel(RF24_PA_MIN);         //Set RF output to minimum
  receive.setDataRate(RF24_250KBPS);       //set datarate to 250kbps
  receive.setChannel(100);                 //set frequency to channel 100
  receive.startListening(); 
}

void loop() {

  if (receive.available())                //check when received data available
  {
    
    int i=1;
     while(i<10000000)
     {
         Serial.print("S.N  "); 
         Serial.print(i);
         Serial.print("   ");
         i++;
        
    
    receive.read(&data, sizeof(data));
    Serial.print("Temperature: ");
    Serial.print(data.temperature);                
    Serial.print(" °C    ");
    Serial.print(" Humidity: ");
    Serial.print(data.humidity);                   
    Serial.print(" %    ");
    Serial.print(" Atm pressure: ");
    Serial.print(data.pressure);                   
    Serial.print(" pascal    ");
    Serial.print(" Altitude: ");
    Serial.print(data.altitude);
    Serial.print(" meter    ");
    
    Serial.print(" ax: ");
    Serial.print(data.ax);
    Serial.print("    ");

    Serial.print(" ay: ");
    Serial.print(data.ay);
    Serial.print("    ");

    Serial.print(" az: ");
    Serial.print(data.az);
    Serial.print("    ");

    Serial.print(" gx: ");
    Serial.print(data.az);
    Serial.print("    ");

    Serial.print(" gy: ");
    Serial.print(data.az);
    Serial.print("    ");

    Serial.print(" gz: ");
    Serial.print(data.az);
    Serial.print("    \n");
 
    delay(600);
     }  
  }
}
