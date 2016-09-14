import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from '../../../src/client/calendar';
import PubSub from 'pubsub-js'; 

function mySubscriber(msg,data){
    console.log(msg,data);
}
PubSub.subscribe('date',mySubscriber);

const dates=["2016-09-01","2016-09-02","2016-09-03","2016-09-07","2016-09-08","2016-10-08"];
ReactDOM.render(<Calendar dates={dates}/>, document.getElementById('root'));
