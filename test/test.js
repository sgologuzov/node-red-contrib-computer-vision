const cv = require('opencv');
const dmCodec = require("dm-codec");

cv.readImage("test/image01.png", function (err, mat) {
    console.log("width= " + mat.width());
    console.log("height= " + mat.height());
    console.log("channels= " + mat.channels());
    try {
        let result = dmCodec.decode({
            width: mat.width(),
            height: mat.height(),
            channels: mat.channels(),
            data: mat.getData(),
        });
        console.log(result);
    } catch (e) {
        console.error(e);
    }
});

cv.readImage("test/no_image.png", function (err, mat) {
    console.log("width= " + mat.width());
    console.log("height= " + mat.height());
    console.log("channels= " + mat.channels());
    try {
        let result = dmCodec.decode({
            width: mat.width(),
            height: mat.height(),
            channels: mat.channels(),
            data: mat.getData(),
        });
        console.log(result);
    } catch (e) {
        console.error(e);
    }
});
