import './scss/main.scss';
import convertLengthUnits from './js/task1/convertLength';
import getResult from './js/task2/getResult';

// task 1
const taskJson1 =
  '{"distance":{"unit": "mm", "value": 2000}, "convert_to": "yd"}';
convertLengthUnits(taskJson1);

// task 2
const taskJson2 =
  '{"data": [{"user": "mike@mail.com", "rating": 20, "disabled": false}, {"user": "greg@mail.com", ' +
  '"rating": 14, "disabled": false}, {"user": "john@mail.com", "rating": 25, "disabled": true}], ' +
  '"condition": {"exclude": [{"disabled": true}], "sort_by": ["rating"]}}';
getResult(taskJson2);
