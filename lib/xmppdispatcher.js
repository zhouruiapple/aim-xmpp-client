/**
 * Created by Administrator on 6/22/2016.
 */

var iqprotocol = require('./iqprotocol.js');
var messageprotocol = require('./messageprotocol.js');
var presenceprotocol = require('./presenceprotocol.js');

exports.XmppDispatcher = function(aimxmpp) {
    this.aimxmpp = aimxmpp;

    this.dispatch = function(stanza) {
        var protocol = stanza.getName();

        switch (protocol) {
            case iqprotocol.name:
                iqprotocol.emitXmppEvent(this.aimxmpp, stanza);
                break;
            case messageprotocol.name:
                messageprotocol.emitXmppEvent(this.aimxmpp, stanza);
                break;
            case presenceprotocol.name:
                presenceprotocol.emitXmppEvent(this.aimxmpp, stanza);
                break;
            default:
                console.log('unsupport protocol');
                break;
        }
    };
};
