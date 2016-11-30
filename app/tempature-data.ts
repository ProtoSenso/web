import { InMemoryDbService } from 'angular2-in-memory-web-api';
import { Tempature } from './Shared/Dto/Tempature';

export class tempatureData implements InMemoryDbService {
  createDb() {

    var tempatures = [];

    for(var i=0; i<10; i++)
    {
      var temp = new Tempature();
      temp.id = 9;
      temp.celsius = Math.floor(Math.random() * 30) + 10;

      tempatures.push(temp);  
    }

    return {tempatures};
  }
}