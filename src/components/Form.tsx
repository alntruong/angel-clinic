return (
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
)

export default Form;
