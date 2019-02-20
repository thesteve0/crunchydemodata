import fiona
import pprint

with fiona.open("../shapefile/tl_2018_us_county.shp", "r") as shapes:
    pprint.pprint(next(shapes))
    