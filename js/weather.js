$.ajax({
    type: 'GET',
    url: 'https://www.tianqiapi.com/api/',
    data: 'version=v1&city=湛江',
    dataType: 'JSON',
    error: function () {
        alert('网络错误');
    },
    success: function (res) {
        $(".weather-city").text(res.city);
        $(".weather-text").text(res.data[0].wea);
        $(".weather-temperature").text(res.data[0].tem2 + "~" + res.data[1].tem1);
    }
});