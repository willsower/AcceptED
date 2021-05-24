import React, { ReactNode, SyntheticEvent, useState } from 'react';

import ApiCalendar from 'react-google-calendar-api';

export default class DoubleButton extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      eventTitle: '',
      eventDescription: ''

    }
    this.handleItemClick = this.handleItemClick.bind(this);
  }
  handlechange(evt) {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  async handleItemClick(event, name) {
    if (name === 'sign-in') {
      ApiCalendar.handleAuthClick();
    } else if (name === 'sign-out') {
      ApiCalendar.handleSignoutClick();
    }
  }

  listEvents() {
    if (ApiCalendar.sign){
      ApiCalendar.listUpcomingEvents(10).then(({ result }) => {
        console.log(result.items);
      });
    }
  }

  static Event = {
    'summary': 'Google I/O 2015',
    'location': '800 Howard St., San Francisco, CA 94103',
    'description': 'A chance to hear more about Google\'s developer products.',
    'start': {
      'dateTime': '2021-05-27T09:00:00-07:00',
      'timeZone': 'America/Los_Angeles'
    },
    'end': {
      'dateTime': '2021-05-27T17:00:00-07:00',
      'timeZone': 'America/Los_Angeles'
    },
    'recurrence': [
      'RRULE:FREQ=DAILY;COUNT=2'
    ],
    'attendees': [
      { 'email': 'lpage@example.com' },
      { 'email': 'sbrin@example.com' }
    ],

  }

  // ApiCalendar.createEvent(Event)





  render() {
    return (
      <>

        <p className='text-sm md:text-base font-semibold'>Event Title</p>
        <input name="eventTitle" autoFocus onChange={this.handlechange} value={this.state.eventTitle} className='text-xs md:text-sm bg-gray-50 rounded p-2 flex-1 mb-4 border' id='fullName' type='fullName' placeholder='Event Title' />

        <p className='text-sm md:text-base font-semibold'>Event Description</p>
        <input name="eventDescription" autoFocus onChange={this.handlechange} value={this.state.eventDescription} className='text-xs md:text-sm bg-gray-50 rounded p-2 flex-1 mb-4 border' id='fullName' type='fullName' placeholder='Dinner with...' />

        <br />
        <br />

        <button
          onClick={this.listEvents}
        >
          Submit
                </button>

        
        <br/>


        <button
          onClick={(e) => this.handleItemClick(e, 'sign-in')}
        >
          sign-in
                </button>
        <button
          onClick={(e) => this.handleItemClick(e, 'sign-out')}
        >
          sign-out
                </button>
      </>
    );
  }
}

































// // If modifying these scopes, delete token.json.
// import { google } from 'googleapis'

// export default function Home({ calendar }) {

//     const createEvent = async () => {
//         var event = {
//             'summary': 'Google I/O 2015',
//             'location': '800 Howard St., San Francisco, CA 94103',
//             'description': 'A chance to hear more about Google\'s developer products.',
//             'start': {
//                 'dateTime': '2021-05-28T09:00:00-07:00',
//                 'timeZone': 'America/Los_Angeles'
//             },
//             'end': {
//                 'dateTime': '2021-05-28T17:00:00-07:00',
//                 'timeZone': 'America/Los_Angeles'
//             },
//             'recurrence': [
//                 'RRULE:FREQ=DAILY;COUNT=2'
//             ],
//             'attendees': [
//                 { 'email': 'zahgz4011@gmail.com' },

//             ],
//             'reminders': {
//                 'useDefault': false,
//                 'overrides': [
//                     { 'method': 'email', 'minutes': 24 * 60 },
//                     { 'method': 'popup', 'minutes': 10 }
//                 ]
//             }
//         };

//         const calendar = google.calendar({ version: 'v3', oauth2Client });
//         // const calendar = google.calendar_v3(oauth2Client)

//         calendar.events.insert({
//             auth: oauth2Client,
//             calendarId: 'primary',
//             resource: event,
//         }, function (err, event) {
//             if (err) {
//                 console.log('There was an error contacting the Calendar service: ' + err);
//                 return;
//             }
//             console.log('Event created: %s', event.htmlLink);
//         });

//     }

//     return (
//         <button onClick={createEvent} className='w-20 bg-blue-600 text-white rounded md:w-28 p-1 m-auto'>
//             Add Event
//         </button>
//     )


// }





// export const getServerSideProps = async () => {

//     console.log('Line 68')
//     const oauth2Client = new google.auth.OAuth2(
//         process.env.GOOGLE_CLIENT_ID,
//         process.env.GOOGLE_CLIENT_SECRET,
//         // 'http://localhost:3000/api/post/',   // YOUR_REDIRECT_URL_
//     );
//     console.log('Line 74')

//     // generate a url that asks permissions for Blogger and Google Calendar scopes
//     const scopes = [
//         'https://www.googleapis.com/auth/calendar.events',
//         'https://www.googleapis.com/auth/calendar'
//     ];

//     console.log('Line 82')
//     const url = oauth2Client.generateAuthUrl({
//         // 'online' (default) or 'offline' (gets refresh_token)
//         access_type: 'offline',

//         // If you only need one scope you can pass it as a string
//         scope: scopes
//     });

//     console.log('Line 91')

//     // const qs = new url.URL(req.url, 'http://localhost:3000').searchParams;
//     // const code = qs.get('code');
//     // console.log('code is ' + code)

//     // const { tokens } = await oauth2Client.getToken(code) // issue in this line
//     // console.log('Line 94')
//     // oauth2Client.setCredentials(tokens);


//     // var event = {
//     //     'summary': 'Google I/O 2015',
//     //     'location': '800 Howard St., San Francisco, CA 94103',
//     //     'description': 'A chance to hear more about Google\'s developer products.',
//     //     'start': {
//     //         'dateTime': '2021-05-28T09:00:00-07:00',
//     //         'timeZone': 'America/Los_Angeles'
//     //     },
//     //     'end': {
//     //         'dateTime': '2021-05-28T17:00:00-07:00',
//     //         'timeZone': 'America/Los_Angeles'
//     //     },
//     //     'recurrence': [
//     //         'RRULE:FREQ=DAILY;COUNT=2'
//     //     ],
//     //     'attendees': [
//     //         { 'email': 'zahgz4011@gmail.com' },

//     //     ],
//     //     'reminders': {
//     //         'useDefault': false,
//     //         'overrides': [
//     //             { 'method': 'email', 'minutes': 24 * 60 },
//     //             { 'method': 'popup', 'minutes': 10 }
//     //         ]
//     //     }
//     // };

//     const calendar = google.calendar({ version: 'v3', oauth2Client });
//     // const calendar = google.calendar_v3(oauth2Client)

//     // calendar.events.insert({
//     //     auth: oauth2Client,
//     //     calendarId: 'primary',
//     //     resource: event,
//     // }, function (err, event) {
//     //     if (err) {
//     //         console.log('There was an error contacting the Calendar service: ' + err);
//     //         return;
//     //     }
//     //     console.log('Event created: %s', event.htmlLink);
//     // });

//     return {
//         props: {
//             calendar
//         }
//     }


//     // request.execute(function (event) {
//     //     appendPre('Event created: ' + event.htmlLink);
//     // });


// }