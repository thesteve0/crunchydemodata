if(void 0===CDC)var CDC=new Object;void 0===CDC.Metrics&&(CDC.Metrics=new Object),CDC.Metrics.GoogleAnalytics={SetAccountNumber:function(account,domain){}},function($){$(document).ready(function(){void 0!==$.fn.on?($("body").on("click","#menu-nav",function(e){window.setTimeout(function(){var eventName="";$("#navmenu").is(":hidden")||(eventName="Mobile Navigation Menu Opened",s.linkTrackVars="prop50,prop49,prop46,prop2,prop31,channel",s.prop50=s.pageName,s.tl(!0,"o",eventName))},500)}),$("body").on("click",".back-btn",function(){window.setTimeout(function(){s.linkTrackVars="prop50,prop49,prop46,prop2,prop31,channel",s.prop50=s.pageName,s.tl(!0,"o","Mobile Navigation Back Used")},500)}),$("#menu-search").on("click",function(){var eventName="";eventName=$("#searchArea-two-column").is(":hidden")?"Mobile Search Opened VP1-2":"Mobile Search Closed VP1-2",s.linkTrackVars="prop50,prop49,prop46,prop2,prop31,channel",s.prop50=s.pageName,s.tl(!0,"o",eventName)}),$("#vp1-a2z-button").on("click",function(){var eventName="";eventName=$(".a2z-bar").is(":hidden")?"A-Z Index Closed VP1-2":"A-Z Index Opened VP1-2",s.linkTrackVars="prop50,prop49,prop46,prop2,prop31,channel",s.prop50=s.pageName,s.tl(!0,"o",eventName)}),$(".a2z-button").on("click",function(){var eventName="";eventName=$(".a2z-bar").is(":hidden")?"A-Z Index Closed VP3-4":"A-Z Index Opened VP3-4",s.linkTrackVars="prop50,prop49,prop46,prop2,prop31,channel",s.prop50=s.pageName,s.tl(!0,"o",eventName)}),$(".ui-accordion-header").on("click",function(){var interaction=$(this).clone().children().remove().end().text()+" Accordion";s.linkTrackVars="prop50,prop49,prop46,prop2,prop31,channel",s.prop50=interaction,s.tl(!0,"o","Accordion expanded")}),$(".ui-tabs-nav li").on("click",function(){var interaction=$(this).text()+" Tab";s.linkTrackVars="prop50,prop49,prop46,prop2,prop31,channel",s.prop50=interaction,s.tl(!0,"o","Tab clicked")})):$.fn.live})}(jQuery);