"use client";

import { useChat } from "ai/react";
import Textarea from "react-textarea-autosize";

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api",
  });
  return (
    <div className="min-h-screen bg-neutral-800 ">
      {messages.length !== 0 ? (
        <div
          className="pb-32 pt-5 space-y-5 w-[75%] 
        mx-auto relative"
        >
          {messages.map((message) => (
            <div key={message.id} className="w-full">
              {message.role === "user" ? (
                <div className="flex gap-x-2">
                  <div
                    className="bg-gray-500 h-12 w-12
                   rounded-lg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-full h-full text-white p-1"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                      />
                    </svg>
                  </div>
                  <div
                    className="rounded-lg p-3 w-full
                   border-gray-500 border-2 text-sm"
                  >
                    {message.content}
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-x-2">
                  <div
                    className="bg-teal-500 h-12 w-12
                 rounded-lg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-full h-full text-white p-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                      />
                    </svg>
                  </div>
                  <div
                    className="rounded-lg p-3 w-full
                 border-gray-500 border-2 text-sm"
                  >
                    {message.content}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full flex justify-center pt-32">
          <h1 className="font-bold text-3xl">
            Please use the input field below
          </h1>
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className="p-5 fixed bottom-0 left-0 w-[75%] mx-auto right-0 bg-neutral-800"
      >
        <div className="relative flex items-center">
          <Textarea
            tabIndex={0}
            required
            rows={1}
            value={input}
            onChange={handleInputChange}
            autoFocus
            placeholder="Send message..."
            spellCheck={false}
            className="w-full focus:outline-none shadow-teal-700 shadow-xl placeholder:text-gray-300 text-sm text-white p-5 pr-16 rounded-xl"
          />
          <button
            type="submit"
            className="absolute
           bg-teal-500 p-2 rounded-lg right-0 mr-5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}
