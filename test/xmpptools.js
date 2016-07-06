/**
 * Created by Administrator on 6/22/2016.
 */

 exports.associateXmppEvent = function(aimxmpp) {
     aimxmpp.on('sockt-error', function(data) {
         console.log('sockt-error %s', data);
     });

     aimxmpp.on('connect', function(data) {
         console.log('aim xmpp connect');
     });

     aimxmpp.on('reconnect', function(data) {
         console.log('aim xmpp reconnect');
     });

     aimxmpp.on('disconnect', function(data) {
         console.log('aim xmpp disconnect');
     });

     aimxmpp.on('online', function(data) {
         console.log('aim xmpp online');
     });

     aimxmpp.on('offline', function(data) {
         console.log('aim xmpp offline');
     });

     aimxmpp.on('error', function(data) {
         console.log('aim xmpp error');
     });

     aimxmpp.on('presence', function(stanza) {
         console.log('aim xmpp presence %s', stanza);
     });

     aimxmpp.on('presence-subscribe', function(stanza) {
         console.log('aim xmpp presence-subscribe %s', stanza);
     });

     aimxmpp.on('presence-subscribed', function(stanza) {
         console.log('aim xmpp presence-subscribed %s', stanza);
     });

     aimxmpp.on('presence-unsubscribed', function(stanza) {
         console.log('aim xmpp presence-unsubscribed %s', stanza);
     });

     aimxmpp.on('presence-unavailable', function(stanza) {
         console.log('aim xmpp presence-unavailable %s', stanza);
     });

     aimxmpp.on('presence-error', function(stanza) {
         console.log('aim xmpp presence-error %s', stanza);
     });

     aimxmpp.on('query-jabber:iq:roster', function(stanza) {
         console.log('aim xmpp query-jabber:iq:roster %s', stanza);
     });

     aimxmpp.on('message', function(stanza) {
         console.log('aim xmpp message %s', stanza);
     });
 };
