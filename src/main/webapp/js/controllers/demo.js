var sourceIp = "127.0.0.1";
var tartgetIp="127.0.0.1";
jsPlumb.ready(function () {

    var instance = window.jsp = jsPlumb.getInstance({
        // default drag options
        DragOptions: { cursor: 'pointer', zIndex: 2000 },
        // the overlays to decorate each connection with.  note that the label overlay uses a function to generate the label text; in this
        // case it returns the 'labelText' member that we set on each connection in the 'init' method below.
        ConnectionOverlays: [
            [ "Arrow", {//箭头
                location: 1,
                visible:true,
                width:11,
                length:11,
                id:"ARROW",
                events:{
                    click:function() { alert("you clicked on the arrow overlay")}
                }
            } ],
            [ "Label", {//线上的内容
                location: 0.1,
                id: "label",
                cssClass: "aLabel",
                events:{
                    tap:function() { alert("hey"); }
                }
            }]
        ],
        Container: "canvas"
    });

    var basicType = {
        connector: "StateMachine",
        paintStyle: { stroke: "red", strokeWidth: 4 },
        hoverPaintStyle: { stroke: "blue" },
        overlays: [
            "Arrow"
        ]
    };
        instance.registerConnectionType("basic", basicType);

    // this is the paint style for the connecting lines..
    var connectorPaintStyle = {
            strokeWidth: 2,
            stroke: "#61B7CF",
            joinstyle: "round",
            outlineStroke: "white",
            outlineWidth: 2
        },
    // .. and this is the hover style.
        connectorHoverStyle = {
            strokeWidth: 3,
            stroke: "#216477",
            outlineWidth: 5,
            outlineStroke: "white"
        },
        endpointHoverStyle = {
            fill: "#216477",
            stroke: "#216477"
        },
    // the definition of source endpoints (the small blue ones)
        sourceEndpoint = {
            endpoint: "Dot",
            paintStyle: {
                stroke: "#7AB02C",
                fill: "transparent",
                radius: 7,
                strokeWidth: 1
            },
            isSource: true,
            connector: [ "Flowchart", { stub: [40, 60], gap: 10, cornerRadius: 5, alwaysRespectStubs: true } ],
            connectorStyle: connectorPaintStyle,
            hoverPaintStyle: endpointHoverStyle,
            connectorHoverStyle: connectorHoverStyle,
            dragOptions: {},
            overlays: [
                [ "Label", {
                    location: [0.5, 1.5],
                    label: "Drag",
                    cssClass: "endpointSourceLabel",
                    visible:false
                } ]
            ]
        },
    // the definition of target endpoints (will appear when the user drags a connection)
        targetEndpoint = {
            endpoint: "Dot",
            paintStyle: { fill: "#7AB02C", radius: 7 },
            hoverPaintStyle: endpointHoverStyle,
            maxConnections: -1,
            dropOptions: { hoverClass: "hover", activeClass: "active" },
            isTarget: true,
            overlays: [
                [ "Label", { location: [0.5, -0.5], label: "Drop", cssClass: "endpointTargetLabel", visible:false } ]
            ]
        },
        init = function (connection) {
            tartgetIp=connection.targetId;
            sourceIp=connection.sourceId;
            var xmlString="<?xml version='1.0' encoding='utf-8'?><DynamicDecodeCfg><DecodeCfgType>VIA_IP</DecodeCfgType><EncodeChanCfg><EncodeIPAddress>"+sourceIp+"</EncodeIPAddress><EncodePort>8000</EncodePort><EncodeChanMode>normal</EncodeChanMode><EncodeChanID>1</EncodeChanID><EncodeTransmitProtocol>tcp</EncodeTransmitProtocol><EncodeChanType>main</EncodeChanType><Username>admin</Username><Password>admin1234</Password><FactoryDefine>0</FactoryDefine></EncodeChanCfg></DynamicDecodeCfg>";
            var startUrl="http://"+tartgetIp+"/PSIA/Custom/SelfExt/Decode/decodeChannels/1/dynamicDecode/start";

            $.ajax(ajaxSettings({
                url:"startDecoderConfig",
                type:"post",
                async:false,
                data:{configXml:xmlString,url:startUrl},
                success:function(data)
                {
                    $("#xmlStatus").val(data.data);

                }


            }));
            connection.getOverlay("label").setLabel(connection.sourceId + "-" + connection.targetId);

        };

    var _addEndpoints = function (toId, sourceAnchors, targetAnchors) {
        for (var i = 0; i < sourceAnchors.length; i++) {
            var sourceUUID = toId + sourceAnchors[i];
            instance.addEndpoint(toId, sourceEndpoint, {
                anchor: sourceAnchors[i], uuid: sourceUUID
            });
        }
        for (var j = 0; j < targetAnchors.length; j++) {
            var targetUUID = toId + targetAnchors[j];
            instance.addEndpoint(toId, targetEndpoint, { anchor: targetAnchors[j], uuid: targetUUID });
        }
    };

    // suspend drawing and initialise.
    instance.batch(function () {

        _addEndpoints("192.168.1.191", ["TopCenter", "BottomCenter"], ["LeftMiddle", "RightMiddle"]);
        _addEndpoints("192.168.1.44", ["LeftMiddle", "BottomCenter"], ["TopCenter", "RightMiddle"]);
        _addEndpoints("192.168.1.65", ["RightMiddle", "BottomCenter"], ["LeftMiddle", "TopCenter"]);
        _addEndpoints("192.168.1.64", ["LeftMiddle", "RightMiddle"], ["TopCenter", "BottomCenter"]);
        _addEndpoints("192.168.1.111", ["LeftMiddle", "BottomCenter"], ["TopCenter", "RightMiddle"]);
        // listen for new connections; initialise them the same way we initialise the connections at startup.
        instance.bind("connection", function (connInfo, originalEvent) {
            init(connInfo.connection);
        });

        // make all the window divs draggable  拖动
        instance.draggable(jsPlumb.getSelector(".flowchart-demo .window"), { grid: [20, 20] });
        // THIS DEMO ONLY USES getSelector FOR CONVENIENCE. Use your library's appropriate selector
        // method, or document.querySelectorAll:
        //jsPlumb.draggable(document.querySelectorAll(".window"), { grid: [20, 20] });

        // connect a few up
        $.ajax(ajaxSettings({
            url:"getDecoderStatusInfo",
            type:"get",
             success:function(data)
            {
                var oParser = new DOMParser();
                var xmlDoc = oParser.parseFromString(data.data,"text/xml");
                var startip=$(xmlDoc).find('EncodeIPAddress').eq(0).text();
                instance.connect({uuids: [startip+"BottomCenter", "192.168.1.65TopCenter"], editable: true})
            }
        }));

        instance.connect({uuids: ["Window2BottomCenter", "Window3TopCenter"], editable: true});
        instance.connect({uuids: ["Window2LeftMiddle", "Window4LeftMiddle"], editable: true});
        instance.connect({uuids: ["Window4TopCenter", "Window4RightMiddle"], editable: true});
        instance.connect({uuids: ["Window3RightMiddle", "Window2RightMiddle"], editable: true});
        instance.connect({uuids: ["Window4BottomCenter", "Window1TopCenter"], editable: true});
        instance.connect({uuids: ["Window3BottomCenter", "Window1BottomCenter"], editable: true});
        //

        //
        // listen for clicks on connections, and offer to delete connections on click.
        //
        instance.bind("click", function (conn, originalEvent) {
            if (confirm("Delete connection from " + conn.sourceId + " to " + conn.targetId + "?"))
               //instance.detach(conn);
            conn.toggleType("basic");
        });

        instance.bind("connectionDrag", function (connection) {
            console.log("connection " + connection.id + " is being dragged. suspendedElement is ", connection.suspendedElement, " of type ", connection.suspendedElementType);
        });

        instance.bind("connectionDragStop", function (connection) {
            console.log("connection " + connection.id + " was dragged");
        });

        instance.bind("connectionMoved", function (params) {
            console.log("connection " + params.connection.id + " was moved");
        });
    });

    jsPlumb.fire("jsPlumbDemoLoaded", instance);

});
/**
 *
 * 更新连接状态.
 * @param targetIp
 */
function getDecoderStatus(targetIp){
    $.ajax(ajaxSettings({
        url:"getDecoderStatus/"+targetIp,
        type:"get",
        success:function(data)
        {
            var oParser = new DOMParser();
            var xmlDoc = oParser.parseFromString(data.data,"text/xml");
            var status=$(xmlDoc).find('ConnectStatus').eq(0).text();
            //进行页面的显示，更新连接状态

        }


    }));
}
