import fiona
from shapely.geometry import shape
from shapely.geometry import Point
import pprint



with fiona.open("../shapefile/tl_2018_us_county.shp", "r") as features:
    pprint.pprint(next(features))
    with open("../output/county_boundaries_copy.txt", "w") as output:
        for item in features:
            #pprint.pprint(item['id'])
            output.write("'" + item['properties']['STATEFP'] + "','")
            output.write(item['properties']['COUNTYFP'] + "','")
            output.write(item['properties']['COUNTYNS'] + "','")
            output.write(item['properties']['GEOID'] + "','")
            output.write(item['properties']['NAME'] + "','")
            output.write(item['properties']['NAMELSAD'] + "','")
            #output.write(item['properties']['LSAD'] + "','")
            #output.write(item['properties']['CLASSFP'] + "','")
            output.write(item['properties']['FUNCSTAT'] + "',")
            output.write(str(item['properties']['ALAND']) + ",")
            output.write(str(item['properties']['AWATER']) + ",")

            lat = float(item['properties']['INTPTLAT'])
            lon = float(item['properties']['INTPTLON'])
            the_point = Point(lon, lat)
            output.write(the_point.wkb_hex + ",")

            geom = shape(item['geometry'])
            output.write(geom.wkb_hex)

            output.write("\n")

print("Done")
# https://gis.stackexchange.com/questions/120571/iterate-through-a-shapefile
# 'properties': OrderedDict([('STATEFP', '31'),
#                            ('COUNTYFP', '039'),
#                            ('COUNTYNS', '00835841'),
#                            ('GEOID', '31039'),
#                            ('NAME', 'Cuming'),
#                            ('NAMELSAD', 'Cuming County'),
#                            ('LSAD', '06'),
#                            ('CLASSFP', 'H1'),
#                            ('MTFCC', 'G4020'),
#                            ('CSAFP', None),
#                            ('CBSAFP', None),
#                            ('METDIVFP', None),
#                            ('FUNCSTAT', 'A'),
#                            ('ALAND', 1477652222),
#                            ('AWATER', 10690952),
#                            ('INTPTLAT', '+41.9158651'),
#                            ('INTPTLON', '-096.7885168')]),
# 'type': 'Feature'}