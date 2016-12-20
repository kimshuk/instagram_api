var token = '###', // my access token
    userid = 'self', // user id to get photos from (currently myself)
    num_photos = 4; // how many photos to pull

$.ajax({
    url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent',
    dataType: 'jsonp',
    type: 'GET',
    data: {
        access_token: token,
        count: num_photos
    },
    success: function (data) {
        console.log(data);
        for (x in data.data) {
            $('ul').append('<li><img src="' + data.data[x].images.low_resolution.url + '"></li>'); // URL of image, 306x306
        }
    },
    error: function (data) {
        console.log(data);
    }


});