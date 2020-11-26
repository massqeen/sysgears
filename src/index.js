import './scss/main.scss';
import convertLengthUnits from './js/task1/convertLength';

const taskJson =
  '{"distance":{"unit": "mm", "value": 2000}, "convert_to": "yd"}';
convertLengthUnits(taskJson);
