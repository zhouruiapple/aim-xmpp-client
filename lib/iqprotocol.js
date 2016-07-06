/**
 * Created by Administrator on 6/22/2016.
 */

exports.name = 'iq';

var eventSchema = [
    {
        name: 'query',
        xmlns: 'jabber:iq:roster',
    },
];

exports.emitXmppEvent = function(aimxmpp, stanza) {
    eventSchema.forEach(function(event) {
        var child = stanza.getChild(event.name, event.xmlns);
        if(child) {
            aimxmpp.emit(event.name + '-' + event.xmlns, stanza);
        }
        else {
            console.log('unsupport event of stanza [%s]', stanza);
        }
    });
};
