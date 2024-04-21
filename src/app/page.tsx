"use client";

import React from "react";
import { useChat } from "ai/react";
import fireAlert from "./lib/alert";

function HomePage() {
  const { handleInputChange, input, handleSubmit, messages, isLoading, error } =
    useChat();

  if (error) {
    fireAlert({
      title: "Error",
      text: "Error creating response check API QUOTA or API KEY",
      icon: "error",
    });
  }

  return (
    <section className="flex justify-center items-center h-screen">
      <form
        action=""
        className="w-full px-4 max-w-xl sm:w-11/12 md:w-3/4 lg:w-2/3 xl:max-w-xl"
        onSubmit={handleSubmit}
      >
        <div className="text-white max-h-96 h-full overflow-y-auto">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex flex-col mb-2 p-2 rounded-md ${
                message.role === "assistant"
                  ? "self-end bg-gray-800"
                  : "self-start bg-blue-500"
              } `}
            >
              <span
                className={`text-xs ${
                  message.role === "assistant" ? "text-right" : "text-left"
                }`}
              >
                {message.role}
              </span>
              {message.content}
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row justify-between my-4">
          <label
            htmlFor="message-input"
            className="text-white block font-bold my-2"
          >
            Ask Something...
          </label>
          <button
            type="submit"
            className="bg-blue-600 text-white px-3 py-2 rounded-md focus:outline-none disabled:opacity-50 mt-2 sm:mt-0"
            disabled={isLoading || !input.trim()}
          >
            Send
          </button>
        </div>

        <textarea
          id="message-input"
          rows={4}
          value={input}
          placeholder="Type your message here ..."
          className="text-black bg-slate-300 px-3 py-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          onChange={handleInputChange}
        />
      </form>
    </section>
  );
}

export default HomePage;
