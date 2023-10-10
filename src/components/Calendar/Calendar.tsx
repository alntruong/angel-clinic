"use client";

import { FC, useState } from 'react'
import ReactCalendar, { Calendar } from 'react-calendar'
import { add, format } from 'date-fns'
import { INTERVAL, STORE_CLOSING_TIME, STORE_OPENING_TIME } from '../../constants/config'

interface IndexProps {}  

interface DateType {
 justDate: Date | null
 dateTime: Date | null
}

interface UserData {
  email: string
  name: string
  comment: string
}

const Index: FC<IndexProps> = ({}) => {
 const [date, setDate] = useState<DateType>({
  justDate: null,
  dateTime: null, 
 })

 console.log(date.dateTime)

 const [userData, setUserData] = useState<UserData>({
    email: '',
    name: '',
    comment: '',
  });

  const handleTimeSelect = (selectedTime: Date) => {
    setDate((prev) => ({ ...prev, dateTime: selectedTime }));
  };

  const handleSubmit = () => {
    if(!userData.name || !userData.email) {
      alert('Please fill in both name and email fields.');
      return;
    }

    if (!isValidEmail(userData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Combine user input data with selected date and time
    const dataToSubmit = {
      selectedDate: date.justDate,
      selectedTime: date.dateTime,
      ...userData,
    };

    // Now you can perform actions with the dataToSubmit, such as sending it to a server
    console.log(dataToSubmit);

    // Reset the form after submitting
    setDate({ justDate: null, dateTime: null });
    setUserData({ email: '', name: '', comment: '' });
  };

    const isValidEmail = (email: string): boolean => {
    // Use a regular expression to validate email format
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
    };


 const getTimes = () => {
  if (!date.justDate) return

  const { justDate } = date

  const beginning = add(justDate, { hours: STORE_OPENING_TIME })
  const end = add(justDate, { hours: STORE_CLOSING_TIME })
  const interval = INTERVAL

  const times = []
  for (let i = beginning; i <= end; i = add(i, { minutes: interval })) {
   times.push(i)
  }

  return times
 }

 const times = getTimes()

 return (
  <div className="md:h-screen w-screen bg-white md:pt-10">
    <div className="max-w-screen-md mx-auto flex flex-col md:flex-row border rounded-lg shadow-md"> 

      {/* Header */}
      <div className="flex-col justify-center items-center text-black pt-7 px-10 border-r border-gray-400 text-center lg:text-left">
        <div className="flex flex-col justify-center h-full pt-5 sm:pt-0">
            <h2 className="text-lg text-gray-400 font-semibold">Angel Clinic</h2>
            <h1 className="text-4xl font-bold pb-5">Exam & Cleaning</h1>
            <p className="text-gray-400 font-semibold">Duration: 1 hr</p>
            <p className="flex-wrap text-gray-400 font-semibold ">123 Main Street Anytown, USA Postal Code: 12345</p>
        </div>
      </div>
    
      {/* Calendar */}
      {date.justDate ? null : (
          <div className="flex flex-col flex-1 p-10 items-center justify-center">
              <h1 className="font-semibold text-xl text-black p-5">Select a Date</h1>
              <ReactCalendar
                  minDate={new Date()}
                  className="REACT_CALENDAR p-1 border-0 text-black"
                  view="month"
                  onClickDay={(selectedDate) =>
                      setDate((prev) => ({ ...prev, justDate: selectedDate }))
                  }
              />
          </div>
      )},

      {/* Time Selector */}
      {date.justDate && date.justDate !== null && !date.dateTime && (
        <div className="flex flex-1 flex-col items-center justify-center gap-4 py-5">
          <h1 className="text-black text-[21px] font-semibold pb-2">Select a Time</h1>
          {times?.map((time, i) => (
            <div
              key={`time-${i}`}
              className="rounded-sm border border-blue-500 bg-white px-20 py-2 text-blue-500
              hover:border-4 hover:font-medium"
            >
              <button
                type="button"
                onClick={() => handleTimeSelect(time)}
              >
                {format(time, 'hh:mm aaaa')}
              </button>
            </div>
          ))}
        </div>
      )}

      {/* User input form */}
      {date.dateTime && (
        <div className="flex flex-1 justify-center items-center">
          <div className="flex flex-col items-center gap-4 md:px-5">
            <h1 className="text-black text-[21px] font-semibold md:pt-10">Enter Your Details</h1>

            {/* Input fields */}
            <div className="flex flex-col items-center gap-4">

              {/* Email Input */}
                <div className="flex flex-col place-self-start lg:px-7">
                  <label className="text-gray-600 mb-1">
                    Email:<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email" // Use 'email' type for better email validation
                    placeholder="you@example.com"
                    value={userData.email}
                    onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                    className="border px-2 py-1 rounded-lg text-black w-80 h-10 peer"
                    required
                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                  />
                  <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                    Please provide a valid email address.
                  </p>
                </div>

              {/* Name Input */}
              <div className="flex flex-col place-self-star lg:px-7">
                <label className="text-gray-600 mb-1">
                  Name<span className="text-red-500">*</span>
                  </label>
                <input
                  type="text"
                  placeholder="Name"
                  value={userData.name}
                  onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                  className="border px-2 py-1 rounded-lg text-black w-80 h-10"
                  required
                />
              </div>

              {/* Comment Input */}
              <div className="flex flex-col">
                <label className="text-gray-600 mb-1">Comment:</label>
                <textarea
                  placeholder="Comment"
                  value={userData.comment}
                  onChange={(e) => setUserData({ ...userData, comment: e.target.value })}
                  className="border px-2 py-1 rounded-lg text-black w-80 h-32"
            
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="button"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-5"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      )}
      </div>
    </div>

 )
}

export default Calendar