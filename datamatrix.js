const cv = require('opencv');
const dmCodec = require("dm-codec");

module.exports = function (RED) {
    function DatamatrixNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        node.on('input', function (msg) {
            node.status({fill: "blue", shape: "dot", text: "Analyzing"});
            try {
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
            } catch (e) {
                msg.payload = e;
                node.send(msg);
                node.status({fill:"red",shape:"ring",text:"error"})
            }
        });
    }

    RED.nodes.registerType("datamatrix", DatamatrixNode);
};
