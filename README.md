# Remunerations Calculator

## Description

Calculate the remuneration of employees based on their worked time according to the day and hours

## Getting Started

1. Install dependencies `yarn | npm install`
2. Compile project `yarn build | npm run build`
3. Run project `yarn start | npm run start`

That is all! :+1:

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