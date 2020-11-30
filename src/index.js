import './scss/main.scss';
import convertLengthUnits from './js/task1/convertLengthUnits';
import getResult from './js/task2/getResult';
import separateSet from './js/task3/separateSet';
import { getCellsOrder } from './js/task4/getCellsOrder';

// task 1
const taskJson1 =
  '{"distance":{"unit": "m", "value": 0.5}, "convert_to": "ft"}';
convertLengthUnits(taskJson1);

// task 2
const taskJson2 =
  '{"data": [{"user": "mike@mail.com", "rating": 20, "disabled": false}, {"user": "greg@mail.com", ' +
  '"rating": 14, "disabled": false}, {"user": "john@mail.com", "rating": 25, "disabled": true}], ' +
  '"condition": {"exclude": [{"disabled": true}], "sort_by": ["rating"]}}';
getResult(taskJson2);

// task 3
const taskJson3 = '{"set": [4,5,6,7,8]}';
separateSet(taskJson3);

// task 4
const taskJson4 = '{"corrections": [1, 12, 7, 1], "cells": [8, 4, 6, 2, 2] }';
getCellsOrder(taskJson4);
