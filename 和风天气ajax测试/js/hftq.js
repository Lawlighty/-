/**
 * Created by Administrator on 2019/8/25 0025.
 */
//$('input[type=submit]').click(function(){
//    var addr = $('input[type=text]').val();
//    console.log(addr);
//    var url = `https://free-api.heweather.net/s6/weather/now?location=${addr}&key=2d6d188f2e124991b50c62347140c73b`;
//    console.log(url);
//    $.ajax({
//        url:url,
//        type:'get',
//        success:function(data){
//            console.log(data);
//            console.log(data['HeWeather6'][0]['basic']['location']);
//            console.log(data['HeWeather6'][0]['now']['tmp']);
//            console.log(data['HeWeather6'][0]['update']['loc']);
//        },
//        error:function(err){
//            console.log(err);
//        }
//    })
//
//});
var wData = null;
function weather_init(){
    var url = `https://free-api.heweather.net/s6/weather/now?location=绍兴&key=2d6d188f2e124991b50c62347140c73b`;
    console.log(url);
    $.ajax({
        url:url,
        type:'get',
        success:function(data){
            wData = data;
            var ss = $('div.wShow span');
            console.log(ss);
            ss.eq(0).html(data['HeWeather6'][0]['basic']['location']);
            ss.eq(1).html(data['HeWeather6'][0]['now']['tmp']);
            ss.eq(2).html(data['HeWeather6'][0]['update']['loc']);
            //console.log(data);
            //console.log(data['HeWeather6'][0]['basic']['location']);
            //console.log(data['HeWeather6'][0]['now']['tmp']);
            //console.log(data['HeWeather6'][0]['update']['loc']);
        },
        error:function(err){
            console.log(err);
        }
    })
}
setTimeout(weather_init,1000);

var show = $('.content .look');
var lookDiv =  $('.content div');
show.mouseenter(function(){
    console.log(lookDiv);
    lookDiv.show();
    lookDiv.empty();
    $('<span></span>').appendTo(lookDiv).html(wData['HeWeather6'][0]['now']['tmp'])
});
show.mouseleave(function(){
    lookDiv.hide();
});