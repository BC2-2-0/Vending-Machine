require('dotenv').config();
var EventSource = require('eventsource')
var evtSource = new EventSource(process.env.URL);

evtSource.onopen = function(e) {
    console.log(e);
}
evtSource.onmessage = function(e) {
    console.log(e.data);
}
evtSource.onerror = function(e) {
    console.log(e);
}