# How we downloaded the wikipedia page for each US county

On Feb 13, 2019, we went to:
https://en.wikipedia.org/wiki/List_of_United_States_counties_and_county_equivalents
and used the firefox plugin "table to excel" to capture all the county names in the US by state.

This is saved in this directory as:
3243_x_4_wikitable_sortable_jquery-tablesorter.csv

In the script we can use the name plus state to autogenerate the page name for the wikipedia page for the county.

Each page can then be called through the API. XML is the "nicer" formatted return though we may want to grab JSON.
The format for the request is "county name, state name"

It might be better to use Beautiful Soup to pull down the HTML page, parse the table, and grab the link from there. That might be more sustainable - though
susceptible to format changes on the page. 


https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=xml&formatversion=2&titles=Autauga_County,_Alabama
