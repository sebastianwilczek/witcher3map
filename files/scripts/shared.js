L.Icon.Default.imagePath="../files/images/leaflet";var getMapdata=function(i){$.cachedScript("../files/scripts/mapdata-"+i+".js").done(function(i,n){$.cachedScript("../files/scripts/custom.js").done(function(i,n){$(document).i18n()})})};$.i18n.init(i18noptions,function(){var i=location.pathname.match(/\/(\w{1})\/(?:index.html)?$/)[1];$.i18n.loadNamespace(i,function(){"w"==i?getMapdata("white_orchard"):"v"==i?getMapdata("hos_velen"):"g"==i?getMapdata("gaunter"):"s"==i?getMapdata("skellige"):"t"==i?getMapdata("toussaint"):"k"==i?getMapdata("kaer_morhen"):"f"==i?getMapdata("fables"):"i"==i&&getMapdata("isle_mists")})}),$(function(){$(".dd-selected").on("click",function(){setTimeout(function(){$("#sidebar").getNiceScroll().resize()},500)})}),window.createMarker=function(i,n,o,e,s){var c="markers-"+map_path+"-hidden",r=L.marker(i,setMarker(n)).bindLabel(o,{direction:"auto"}).bindPopup(e);return r.on("contextmenu",function(i){toggleOpacity(i,c),updatePills(i,s)}),isMarkerInvisible(c,r.getLatLng().lat,r.getLatLng().lng)?(r.setOpacity(invisibleMarkerOpacity),markerCount[s]||(markerCount[s]=0)):markerCount[s]=markerCount[s]+1||1,r},window.setMarker=function(i,n){return{icon:i,riseOnHover:!0}},window.getLatLngKey=function(i,n){return i+";"+n},window.isMarkerInvisible=function(i,n,o){return invisibleMarkers[i].indexOf(getLatLngKey(n,o))>-1},window.toggleOpacity=function(i,n){var o=getLatLngKey(i.latlng.lat,i.latlng.lng);i.target&&1===i.target.options.opacity?(i.target.setOpacity(invisibleMarkerOpacity),invisibleMarkers[n].push(o)):(i.target.setOpacity(1),invisibleMarkers[n].splice(invisibleMarkers[n].indexOf(o),1)),localStorage[n]=JSON.stringify(invisibleMarkers[n])},window.updatePills=function(i,n){i.target&&.85===i.target.options.opacity?markerCount[n]=markerCount[n]+1||1:markerCount[n]=markerCount[n]-1||0,$("ul.key:not(.controls) > li:not(.none) > i."+n+" ~ :last").text(markerCount[n])},window.resetInvisibleMarkers=function(){var i="markers-"+map_path+"-hidden";invisibleMarkers[i]=[],localStorage[i]=JSON.stringify(invisibleMarkers[i]),location.reload()},window.icons={},window.markers={},window.invisibleMarkers={},window.markerCount={},window.notes={};var icons=window.icons,markers=window.markers,invisibleMarkerOpacity=.25;window.processData=function(data){var mapKey="markers-"+map_path+"-hidden";localStorage[mapKey]||(localStorage[mapKey]=JSON.stringify([])),invisibleMarkers[mapKey]=JSON.parse(localStorage[mapKey]);var notesKey="notes"+map_path;localStorage[notesKey]||(localStorage[notesKey]=JSON.stringify([])),notes[map_path]=JSON.parse(localStorage[notesKey]),Object.keys(data).forEach(function(dataKey){var items=data[dataKey],groupItems=[];items.forEach(function(item){null==item.popupTitle&&(item.popupTitle=item.label),item.coords.forEach(function(coord){var ug_icon="icons."+dataKey+"_ug";item.label.includes($.t("misc.underground"))?item.label.includes($.t("treasure.watertreasure"))?groupItems.push(createMarker(coord,icons.treasure_uw_ug,item.label,"<h1>"+item.popupTitle+"</h1>"+item.popup,dataKey)):groupItems.push(createMarker(coord,eval(ug_icon),item.label,"<h1>"+item.popupTitle+"</h1>"+item.popup,dataKey)):item.label.includes($.t("treasure.watertreasure"))?groupItems.push(createMarker(coord,icons.treasure_uw,item.label,"<h1>"+item.popupTitle+"</h1>"+item.popup,dataKey)):groupItems.push(createMarker(coord,icons[dataKey],item.label,"<h1>"+item.popupTitle+"</h1>"+item.popup,dataKey))})}),markers[dataKey]=L.layerGroup(groupItems)})},icons.abandoned=L.icon({iconUrl:"../files/images/icons/abandoned.png",iconSize:[30,30]}),icons.alchemy=L.icon({iconUrl:"../files/images/icons/alchemy.png",iconSize:[20,28]}),icons.armourer=L.icon({iconUrl:"../files/images/icons/armourer.png",iconSize:[24,34]}),icons.armourerstable=L.icon({iconUrl:"../files/images/icons/armourerstable.png",iconSize:[30,27]}),icons.banditcamp=L.icon({iconUrl:"../files/images/icons/banditcamp.png",iconSize:[29,30]}),icons.barber=L.icon({iconUrl:"../files/images/icons/barber.png",iconSize:[30,30]}),icons.blacksmith=L.icon({iconUrl:"../files/images/icons/blacksmith.png",iconSize:[27,30]}),icons.boat=L.icon({iconUrl:"../files/images/icons/boat.png",iconSize:[30,28]}),icons.brothel=L.icon({iconUrl:"../files/images/icons/brothel.png",iconSize:[28,26]}),icons.contracts=L.icon({iconUrl:"../files/images/icons/contract.png",iconSize:[20,31]}),icons.entrance=L.icon({iconUrl:"../files/images/icons/entrance.png",iconSize:[28,27]}),icons.event=L.icon({iconUrl:"../files/images/icons/event.png",iconSize:[23,34]}),icons.grindstone=L.icon({iconUrl:"../files/images/icons/grindstone.png",iconSize:[30,26]}),icons.guarded=L.icon({iconUrl:"../files/images/icons/guarded.png",iconSize:[23,34]}),icons.gwent=L.icon({iconUrl:"../files/images/icons/gwent.png",iconSize:[24,30]}),icons.gwentquest=L.icon({iconUrl:"../files/images/icons/gwentquest.png",iconSize:[24,30]}),icons.hansebase=L.icon({iconUrl:"../files/images/icons/hansebase.png",iconSize:[29,30]}),icons.harbor=L.icon({iconUrl:"../files/images/icons/harbor.png",iconSize:[27,30]}),icons.herbalist=L.icon({iconUrl:"../files/images/icons/herbalist.png",iconSize:[25,28]}),icons.hidden=L.icon({iconUrl:"../files/images/icons/hidden.png",iconSize:[23,34]}),icons.hollow=L.icon({iconUrl:"../files/images/icons/hollow.png",iconSize:[28,27]}),icons.honeycomb=L.icon({iconUrl:"../files/images/icons/honeycomb.png",iconSize:[29,29]}),icons.innkeep=L.icon({iconUrl:"../files/images/icons/innkeep.png",iconSize:[26,30]}),icons.kid=L.icon({iconUrl:"../files/images/icons/kid.png",iconSize:[28,30]}),icons.monsterden=L.icon({iconUrl:"../files/images/icons/monsterden.png",iconSize:[30,27]}),icons.monsternest=L.icon({iconUrl:"../files/images/icons/monsternest.png",iconSize:[23,30]}),icons.note_marker=L.icon({iconUrl:"../files/images/icons/note_marker.png",iconSize:[23,23]}),icons.notice=L.icon({iconUrl:"../files/images/icons/notice.png",iconSize:[23,28]}),icons.pid=L.icon({iconUrl:"../files/images/icons/pid.png",iconSize:[24,34]}),icons.poi=L.icon({iconUrl:"../files/images/icons/poi.png",iconSize:[28,28]}),icons.pop=L.icon({iconUrl:"../files/images/icons/pop.png",iconSize:[27,30]}),icons.scavenger=L.icon({iconUrl:"../files/images/icons/scavenger.png",iconSize:[30,30]}),icons.shopkeeper=L.icon({iconUrl:"../files/images/icons/shopkeeper.png",iconSize:[21,30]}),icons.sidequests=L.icon({iconUrl:"../files/images/icons/sidequests.png",iconSize:[10,30]}),icons.signalfire=L.icon({iconUrl:"../files/images/icons/signalfire.png",iconSize:[17,34]}),icons.signpost=L.icon({iconUrl:"../files/images/icons/signpost.png",iconSize:[27,34]}),icons.smugglers=L.icon({iconUrl:"../files/images/icons/smugglers.png",iconSize:[28,30]}),icons.spoils=L.icon({iconUrl:"../files/images/icons/spoils.png",iconSize:[25,28]}),icons.treasure=L.icon({iconUrl:"../files/images/icons/treasure.png",iconSize:[23,34]}),icons.treasure_uw=L.icon({iconUrl:"../files/images/icons/treasure_uw.png",iconSize:[23,34]}),icons.vineyardinfestation=L.icon({iconUrl:"../files/images/icons/vineyardinfestation.png",iconSize:[28,32]}),icons.abandoned_ug=L.icon({iconUrl:"../files/images/icons/underground/abandoned.png",iconSize:[30,40]}),icons.alchemy_ug=L.icon({iconUrl:"../files/images/icons/underground/alchemy.png",iconSize:[21,37]}),icons.armourer_ug=L.icon({iconUrl:"../files/images/icons/underground/armourer.png",iconSize:[24,43]}),icons.armourerstable_ug=L.icon({iconUrl:"../files/images/icons/underground/armourerstable.png",iconSize:[30,36]}),icons.banditcamp_ug=L.icon({iconUrl:"../files/images/icons/underground/banditcamp.png",iconSize:[29,39]}),icons.barber_ug=L.icon({iconUrl:"../files/images/icons/underground/barber.png",iconSize:[30,39]}),icons.blacksmith_ug=L.icon({iconUrl:"../files/images/icons/underground/blacksmith.png",iconSize:[27,39]}),icons.boat_ug=L.icon({iconUrl:"../files/images/icons/underground/boat.png",iconSize:[30,37]}),icons.brothel_ug=L.icon({iconUrl:"../files/images/icons/underground/brothel.png",iconSize:[28,33]}),icons.contracts_ug=L.icon({iconUrl:"../files/images/icons/underground/contract.png",iconSize:[23,43]}),icons.event_ug=L.icon({iconUrl:"../files/images/icons/underground/event.png",iconSize:[23,37]}),icons.grindstone_ug=L.icon({iconUrl:"../files/images/icons/underground/grindstone.png",iconSize:[30,35]}),icons.guarded_ug=L.icon({iconUrl:"../files/images/icons/underground/guarded.png",iconSize:[23,43]}),icons.gwent_ug=L.icon({iconUrl:"../files/images/icons/underground/gwent.png",iconSize:[24,39]}),icons.gwentquest_ug=L.icon({iconUrl:"../files/images/icons/underground/gwentquest.png",iconSize:[24,39]}),icons.hansebase_ug=L.icon({iconUrl:"../files/images/icons/underground/hansebase.png",iconSize:[29,39]}),icons.harbor_ug=L.icon({iconUrl:"../files/images/icons/underground/harbor.png",iconSize:[27,39]}),icons.herbalist_ug=L.icon({iconUrl:"../files/images/icons/underground/herbalist.png",iconSize:[25,37]}),icons.hidden_ug=L.icon({iconUrl:"../files/images/icons/underground/hidden.png",iconSize:[23,43]}),icons.hollow_ug=L.icon({iconUrl:"../files/images/icons/underground/hollow.png",iconSize:[28,36]}),icons.honeycomb_ug=L.icon({iconUrl:"../files/images/icons/underground/honeycomb.png",iconSize:[29,37]}),icons.innkeep_ug=L.icon({iconUrl:"../files/images/icons/underground/innkeep.png",iconSize:[26,39]}),icons.kid_ug=L.icon({iconUrl:"../files/images/icons/underground/kid.png",iconSize:[28,39]}),icons.monsternest_ug=L.icon({iconUrl:"../files/images/icons/underground/monsternest.png",iconSize:[23,39]}),icons.notice_ug=L.icon({iconUrl:"../files/images/icons/underground/notice.png",iconSize:[23,30]}),icons.pid_ug=L.icon({iconUrl:"../files/images/icons/underground/pid.png",iconSize:[24,43]}),icons.poi_ug=L.icon({iconUrl:"../files/images/icons/underground/poi.png",iconSize:[28,37]}),icons.pop_ug=L.icon({iconUrl:"../files/images/icons/underground/pop.png",iconSize:[27,39]}),icons.scavenger_ug=L.icon({iconUrl:"../files/images/icons/underground/scavenger.png",iconSize:[30,39]}),icons.shopkeeper_ug=L.icon({iconUrl:"../files/images/icons/underground/shopkeeper.png",iconSize:[21,39]}),icons.sidequests_ug=L.icon({iconUrl:"../files/images/icons/underground/sidequests.png",iconSize:[10,39]}),icons.signalfire_ug=L.icon({iconUrl:"../files/images/icons/underground/signalfire.png",iconSize:[17,34]}),icons.signpost_ug=L.icon({iconUrl:"../files/images/icons/underground/signpost.png",iconSize:[27,43]}),icons.smugglers_ug=L.icon({iconUrl:"../files/images/icons/underground/smugglers.png",iconSize:[28,39]}),icons.spoils_ug=L.icon({iconUrl:"../files/images/icons/underground/spoils.png",iconSize:[25,37]}),icons.treasure_ug=L.icon({iconUrl:"../files/images/icons/underground/treasure.png",iconSize:[32,38]}),icons.treasure_uw_ug=L.icon({iconUrl:"../files/images/icons/underground/treasure_uw.png",iconSize:[32,38]}),icons.vineyardinfestation_ug=L.icon({iconUrl:"../files/images/icons/underground/vineyardinfestation.png",iconSize:[28,41]});