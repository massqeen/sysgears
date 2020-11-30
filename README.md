# Test tasks

- ## Developer:

  - **[Arthur Plyuschevsky](https://github.com/massqeen)**

- ## Task 1:

 Разработать приложение для конвертации между единицами измерения расстояния с поддержкой метрической и имперской систем мер. Соотношения для конвертации вы можете взять из таблицы. По умолчанию, приложение должно распознавать метры (m), сантиметры (cm), дюймы (in) и футы (ft), и поддерживать конвертацию между любыми единицами. 
 Также необходимо реализовать возможность расширять список поддерживаемых единиц путем задания правил конвертации посредством JSON файла. Формат JSON файла - на ваше усмотрение. В качестве примера, расширьте ваше приложение добавив в файл значения для миллиметров (mm), ярдов (yd) и километров (km).  
 
   __Входящие параметры:__
 Объект в JSON формате, содержащий расстояние заданное для конвертации (distance) со значением (value) и шкалой (unit), a также обозначение единицы для шкалы, в которую должна быть произведена конвертация (convert_to). Например: 
 {“distance”: {“unit”: “m”, “value”: 0.5}, “convert_to”: “ft”}.  
 
   __Выходные данные:__ 
 Объект в JSON формате, содержащий полученное значение расстояния, округленное до сотых, а также обозначение соответствующей единицы измерения, например: 
 {“unit”: “ft”, “value”: 1.64} 
 
 - ## Task 2:
 
  Разработать простое приложение для сортировки и отбора данных по заранее
          заданным правилам. Приложение должно уметь работать со списками JSON
          объектов произвольной структуры, отбирать объекты, содержащие ключи с
          определенными значениями, а также сортировать объекты по значениям,
          используя естественный порядок сортировки. Например, если для данных
          вида: {“data”: [{“name”: “John”, “email”: “john2@mail.com”}, {“name”:
          “John”, “email”: “john1@mail.com”}, {“name”: “Jane”, “email”:
          “jane@mail.com”}]} задать условие: {“condition”: {“include”: [{“name”:
          “John”}], “sort_by”: [“email”]}} содержащее два правила - include и
          sort_by (где правило include принимает набор пар ключ:значение для
          проверки записей на соответствие, а правило sort_by принимает набор
          ключей для сортировки), результатом будет объект, содержащий только
          записи с именем John, отсортированные по ключу email: {“result”:
          [{“name”: “John”, “email”: “john1@mail.com”}, {“name”: “John”, “email”:
          “john2@mail.com”}]} Планируя подход к дизайну кода приложения,
          необходимо предусмотреть возможность расширять функционал через
          добавление “модулей” с новыми правилами. Модуль может быть представлен
          отдельный классом, связанной группой классов, или просто набором файлов
          - на ваше усмотрение. Важно, чтобы все модули имели между собой
          идентичную структуру, были изолированы друг от друга и кода приложения,
          и взаимодействовали с основным кодом, используя один и тот же подход. В
          качестве примера, вы можете добавить модуль с правилом exclude, которое
          будет отбрасывать записи, содержащие ключи с определенным значением.  

   __Входящие параметры:__
   JSON объект со списком данных (data), и условием для обработки
          (condition): {“data”: [{“user”: “mike@mail.com”, “rating”: 20,
          “disabled”: false}, {“user”: “greg@mail.com”, “rating”: 14, “disabled”:
          false}, {“user”: “john@mail.com”, “rating”: 25, “disabled”: true}],
          “condition”: {“exclude”: [{“disabled”: true}], “sort_by”: [“rating”]}}.  
          
   __Выходные данные:__ 
  JSON объект с данными полученными после применения условия обработки
          (result): {“result”: [{“user”: “greg@mail.com”, “rating”: 14,
          “disabled”: false}, {“user”: “mike@mail.com”, “rating”: 20, “disabled”:
          false}]}

- ## Task 3:
 
Разработать приложение, позволяющее разбивать заданный набор натуральных
        чисел на два поднабора таким образом, чтобы суммы результирующих наборов
        были одинаковыми, либо, если такое разбиение невозможно, максимально
        приближены друг к другу. Во втором случае допускается определенная
        погрешность решения (т.е. выбранный алгоритм может давать не самый
        оптимальный результат в некоторых случаях). Вы можете реализовать свой
        собственный алгоритм решения, или найти и использовать существующие
        математические алгоритмы, разработанные для подобного типа задач.    

   __Входящие параметры:__
  JSON объект, содержащий произвольное множество натуральных чисел (set). Например: {“set”: [4, 5, 6, 7, 8]} или {“set”: [3, 3, 3, 7, 5]}     
  
   __Выходные данные:__    
Объект в JSON формате, содержащий два результирующий набора (set_1 и set_2): {“set_1”: [7, 8], “set_2”: [4, 5, 6]}​, или {“set_1”: [3, 3, 5], “set_2”: [3, 7]}

- ## Task 4:
 
Необходимо разработать алгоритм, позволяющий определить порядок задействования топливных капсул ионных двигателей спутника для совершения заранее заданного ряда маневров. Капсулы имеют 5 разновидностей, и разработаны для получения прироста скорости в 2, 4, 6, 8 или 10 м/с. Каждый маневр требует получить прирост скорости от 1 до 12 м/с. Для совершения одного маневра спутник может одновременно использовать два двигателя: 
- первый - позволяет получить прирост скорости равный значению используемой капсулы. Например, для капсулы 4 м/с, прирост будет ровно 4 м/с. 
- второй - позволяет получить прирост скорости равный половине значения капсулы. Например, для капсулы 4 м/с, прирост будет ровно 2 м/с.     
Для совершения одного маневра запускать каждый двигатель можно максимум один раз. Также, для одного маневра, допускается суммарный прирост скорости меньше требуемого (например если запаса капсул недостаточно), но превышение заданного приращения скорости запрещено. Капсулы невозможно использовать повторно. 
Алгоритм должен определять такой порядок использования капсул, при котором сумма приращений скорости по всем маневрам, и при соблюдении всех условий, будет максимальной, задавая таким образом наиболее точную траекторию. Количество маневров, допустимое приращение скорости на каждом из них, а также доступный набор капсул может быть произвольным. 
Мы рекомендуем решать эту задачу используя генетический алгоритм (возможно, с определенными модификациями). 

    __Входящие параметры:__
JSON объект, содержащий массив произвольной длины с целыми положительными приращениями скорости, которые требуется достичь на каждом из маневров (corrections); и массив произвольной длины содержащий список доступных топливных капсул (cells), например: 
{“corrections”: [1, 12, 7, 1], “cells”: [8, 4, 6, 2, 2] } 
    
   __Выходные данные:__    
JSON объект, содержащий последовательность использования капсул для первого двигателя (main_thruster); последовательность использования капсул для второго двигателя (sec_thruster); и итоговое полученное приращение скорости (delta_velocity). Например: 
{“main_thruster”: [0, 8, 6, 0], “sec_thruster”: [2, 4, 2, 0], “delta_velocity”: 18} 

