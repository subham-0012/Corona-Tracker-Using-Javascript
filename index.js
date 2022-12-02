function updateMap()
{
    fetch("/latest.json")
    .then(response=>response.json())
    .then(rsp=>{
        rsp.data.forEach(element => {
            latitude=element.coordinates[1];
            longitude=element.coordinates[0];
            // console.log(latitude)
            // console.log(longotide)
            // console.log(" ")
            cases=element.cases;
            if(cases>255){
                color="rgb(255,0,0)"

            }
            else{
                color=`rgb(${cases},0,0)`
            }
            // Mark on the map
            new mapboxgl.Marker({
                draggable: false,
                color:color
                })
                .setLngLat([longitude, latitude])
                .addTo(map);
        });
    })
}
setInterval(updateMap, 2000);
// data is taken from below website
// https://coronadatascraper.com/#timeseries.json