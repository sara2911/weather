
export class  City{
    id: number=0
    city: string='';
    forecast:Forecast[]=[]
   }
   
  
export  class Forecast {
    date: string ='';
    temperatureCelsius: number=0;
    temperatureFahrenheit: number=0;
    humidity: number=0;

   
}
