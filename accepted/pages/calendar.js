import React, { useState, useEffect } from 'react';
// import { gapi } from 'gapi-script'

function Calendar() {

  const [eventTitle, setEventTitle] = useState('')
  const [eventDescription, setEventDescription] = useState('')
  const [eventStartDate, setEventStartDate] = useState('')
  const [eventEndDate, setEventEndDate] = useState('')
  const [eventStartTime, setEventStartTime] = useState('')
  const [eventEndTime, setEventEndTime] = useState('')

  var gapi

  var CLIENT_ID = '1013947570489-qr8ogo147dbp2216ce2cmoviaib0nmfl.apps.googleusercontent.com'
  var MY_API_KEY = process.env.API_KEY

  var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
  var SCOPES = "https://www.googleapis.com/auth/calendar.events"


  const handleClick = () => {
    gapi = window.gapi
    // console.log(window.gapi)

    gapi.load('client:auth2', () => {
      console.log('loaded client')

      // console.log(API_KEY)

      gapi.client.init({
        apiKey: MY_API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      }).then(() => {

        gapi.client.load('calendar', 'v3', () => console.log('bam!'))
        console.log('gapi.auth2.getAuthinstance is ' + gapi.auth2.getAuthInstance())
        gapi.auth2.getAuthInstance().signIn()
          .then(() => {

            var startDateTime = eventStartDate + 'T' + eventStartTime + '-07:00' // 
            var endDateTime = eventEndDate + 'T' + eventEndTime + '-07:00'

            var event = {
              'summary': eventTitle,
              'location': '800 Howard St., San Francisco, CA 94103',
              'description': eventDescription,
              'start': {
                'dateTime': startDateTime,
                'timeZone': 'America/Los_Angeles'
              },
              'end': {
                'dateTime': endDateTime,
                'timeZone': 'America/Los_Angeles'
              },
              'recurrence': [
                'RRULE:FREQ=DAILY;COUNT=1'
              ],
              'attendees': [
                { 'email': 'lpage@example.com' },
                { 'email': 'sbrin@example.com' }
              ],
              'reminders': {
                'useDefault': false,
                'overrides': [
                  { 'method': 'email', 'minutes': 24 * 60 },
                  { 'method': 'popup', 'minutes': 10 }
                ]
              }
            }

            var request = gapi.client.calendar.events.insert({ // add event
              'calendarId': 'primary',
              'resource': event,
            })



            request.execute(event => {
              console.log(event)
              window.open(event.htmlLink)
            })


          })
      })

    })
  }


  return (
    <>

      <script src="https://apis.google.com/js/client.js"></script>

      {/* <button style={{width: 100, height: 50}} onClick={handleClick}>Add Event</button> */}

      <p className='text-sm md:text-base font-semibold'>Event Title</p>
      <input name="eventTitle" autoFocus onChange={(e) => setEventTitle(e.target.value)} value={eventTitle} className='text-xs md:text-sm bg-gray-50 rounded p-2 flex-1 mb-4 border' id='fullName' type='fullName' placeholder='Event Title' />

      <p className='text-sm md:text-base font-semibold'>Event Description</p>
      <input name="eventDescription" autoFocus onChange={(e) => setEventDescription(e.target.value)} value={eventDescription} className='text-xs md:text-sm bg-gray-50 rounded p-2 flex-1 mb-4 border' id='fullName' type='fullName' placeholder='Dinner with...' />

      <p className='text-sm md:text-base font-semibold'>Start Date(YYYY-MM-DD, ex: 2021-05-30 ) </p>
      <input name="eventStatyDate" autoFocus onChange={(e) => setEventStartDate(e.target.value)} value={eventStartDate} className='text-xs md:text-sm bg-gray-50 rounded p-2 flex-1 mb-4 border' id='fullName' type='fullName' placeholder='Event Title' />

      <p className='text-sm md:text-base font-semibold'>End Date(YYYY-MM-DD, ex: 2021-05-30) </p>
      <input name="eventEndDate" autoFocus onChange={(e) => setEventEndDate(e.target.value)} value={eventEndDate} className='text-xs md:text-sm bg-gray-50 rounded p-2 flex-1 mb-4 border' id='fullName' type='fullName' placeholder='Event Title' />

      <p className='text-sm md:text-base font-semibold'>Start Time(HH:MM:SS, ex: 09:00:00) </p>
      <input name="eventStartTime" autoFocus onChange={(e) => setEventStartTime(e.target.value)} value={eventStartTime} className='text-xs md:text-sm bg-gray-50 rounded p-2 flex-1 mb-4 border' id='fullName' type='fullName' placeholder='Event Title' />

      <p className='text-sm md:text-base font-semibold'>End Time(HH:MM:SS, ex: 14:00:00) </p>
      <input name="eventEndTime" autoFocus onChange={(e) => setEventEndTime(e.target.value)} value={eventEndTime} className='text-xs md:text-sm bg-gray-50 rounded p-2 flex-1 mb-4 border' id='fullName' type='fullName' placeholder='Event Title' />



      <br />
      <br />

      <button
        onClick={handleClick}
      >
        Submit
              </button>


      {/* <br/>


      <button
        onClick={(e) => this.handleItemClick(e, 'sign-in')}
      >
        sign-in
              </button>
      <button
        onClick={(e) => this.handleItemClick(e, 'sign-out')}
      >
        sign-out
              </button> */}
    </>
  );

}


export default Calendar;
