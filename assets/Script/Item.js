cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        itemID: 0
    },

    // use this for initialization
    onLoad: function () {
        this.node.on('touched', function() {
            console.log('Item ' + this.itemID + ' clicked');
        }, this);
    },

    updateItem: function(tmplId, itemId) {
        this.itemID = itemId;
        this.label.string = 'Tmpl#' + tmplId + ' Item#' + itemId;
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
