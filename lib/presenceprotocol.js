/**
 * Created by Administrator on 6/22/2016.
 */

exports.name = 'presence';

exports.emitXmppEvent = function(aimxmpp, stanza) {
    if (stanza.attrs.type) {
        switch (stanza.attrs.type) {
            case 'subscribe':
                aimxmpp.emit('presence-subscribe', stanza);
                break;
            case 'subscribed':
                aimxmpp.emit('presence-subscribed', stanza);
                break;
            case 'unsubscribed':
                aimxmpp.emit('presence-unsubscribed', stanza);
                break;
            case 'unavailable':
                aimxmpp.emit('presence-unavailable', stanza);
                break;
            case 'error':
                aimxmpp.emit('presence-error', stanza);
                break;
            default:
                console.log('unsupport presence type [%s]', stanza.attrs.type);
                break;
        }
    } else {
        aimxmpp.emit('presence', stanza);
    }
};
