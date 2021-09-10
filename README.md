# Remunerations Calculator

## Description

Calculate the remuneration of employees based on their worked time according to the day and hours

## About

The present project uses a layered model as architecture, which allows us in this small application to keep separated the logic of the persistence models and controllers. Helping us to have data control in each layer and ensure the integrity of each process.

## Getting Started

1. Install dependencies `yarn | npm install`
2. Compile project `yarn build | npm run build`
3. Run tests `yarn test | npm run test`
4. Run project `yarn start | npm run start`

That is all! 👍✌🏻

## Formats

Days Format:
* MO: Monday
* TU: Tuesday
* WE: Wednesday
* TH: Thursday
* FR: Friday
* SA: Saturday
* SU: Sunday

Hours Format: **00:00-23:59**

To add more exercises add them to the **employees-data.txt** file respecting the specified format, otherwise you will get an exception

## Examples


**INPUT:** | `RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00`
--- | --- |
**OUTPUT:** | _The amount to pay to RENE is: $215 USD_

**INPUT:** | `ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00`
--- | --- |
**OUTPUT:** | _The amount to pay to ASTRID is: $85 USD_

**INPUT:** | `GABRIEL=MO10:00-12:00,TU10:00-12:00,WE01:00-03:00,TH14:00-18:00,FR20:00-21:00,SA20:00-21:00,SU20:00-21:00`
--- | --- |
**OUTPUT:** | _The amount to pay to GABRIEL is: $240 USD_

## Changes v1.0.0
* The entire project was refactored to use **`DDD`** design pattern
* Input file could be specified with the argument `--path` example `yarn start --path=./new_employees_list.txt` 
* Can specify the name that you want to calculate remuneration with the argument `--name=` example `yarn start --name=ASTRID`
* The pre-commit hook was added to ensure continuous integration
* Tests are updated to handle the multiple arguments in the test, running once per row
* Eslint and Prettier were added to keep a coding standard
* Some methods were updated to keep a more semantic code