const cv = require('opencv');
const dmCodec = require("dm-codec");

cv.readImage("image01.png", function (err, mat) {
    mat.convertGrayscale();
    console.log("width= " + mat.width());
    console.log("height= " + mat.height());
    console.log("channels= " + mat.channels());
    let result = dmCodec.decode({
        width: mat.width(),
        height: mat.height(),
        channels: mat.channels(),
        data: mat.getData(),
    });
    console.log(result);
});
