CREATE TABLE county_geometry
(
  id SMALLSERIAL PRIMARY KEY,       --not in the file
  the_geom geometry(POLYGON,4326), --generated from geom in the file
  interior_pnt geometry(POINT, 4326), --generated from geom in the file
  statefp CHAR(2),
  countyfp CHAR(3),
  countyns CHAR(8),
  geoid CHAR(5),
  county_name TEXT,
  namelsad TEXT,
  lsad CHAR(2),
  classfp CHAR(2),
  mtfcc CHAR(5),
  csafp CHAR(3),
  cbsafp CHAR(5),
  metdivfp CHAR(5),
  funcstat CHAR(1),
  aland BIGINT,  --area of land in m2
  awater BIGINT --area of water in m2

);
