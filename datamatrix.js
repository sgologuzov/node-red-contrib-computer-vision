const cv = require('opencv');
const dmCodec = require("dm-codec");

module.exports = function (RED) {
    function DatamatrixNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        node.on('input', function (msg) {
            node.status({fill: "blue", shape: "dot", text: "Analyzing"});
            cv.readImage(msg.payload, function (err, mat) {
                let result = dmCodec.decode({
                    width: mat.width(),
                    height: mat.height(),
                    channels: mat.channels(),
                    data: mat.getData(),
                });
                msg.payload = result;
                node.send(msg);
                node.status({})
            });
        });
    }

    RED.nodes.registerType("datamatrix", DatamatrixNode);
};
