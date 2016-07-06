/**
 * Created by Administrator on 6/22/2016.
 */

exports.name = 'message';

exports.emitXmppEvent = function(aimxmpp, stanza) {
    aimxmpp.emit('message', stanza);
};
