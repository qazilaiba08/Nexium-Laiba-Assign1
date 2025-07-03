"use client";
import { useState } from "react";
import quotes from "@/app/data/quotes"; 
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";


type Quote = {
  topic: string;
  quote: string;
};

export default function Home() {
  const [topic, setTopic] = useState("");
  const [results, setResults] = useState<string[]>([]);

  // Handler for the search button
  const handleSearch = () => {
    const filtered = (quotes as Quote[])
      .filter((q) => q.topic.toLowerCase() === topic.toLowerCase())
      .map((q) => q.quote)
      .slice(0, 6);
    setResults(filtered);
  };

  return (
    <div className="relative flex flex-col items-center justify-center  min-h-[60vh] 
    w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] mx-auto bg-gradient-to-br from-indigo-50
   to-blue-50  p-10 sm:p-12 md:p-16 lg:p-20 border border-gray-200 rounded-3xl 
    shadow-2xl transform transition-all duration-300 ease-in-out ">
  <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 
      flex items-center justify-center gap-4 mb-8 leading-tight " >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
    </svg>
    Quote Generator
  </h1>

  <div className="flex flex-col sm:flex-row gap-4 mb-8 w-full justify-center items-center">
    <Input
      placeholder="Enter topic (e.g., success)"
      value={topic}
      onChange={(e) => setTopic(e.target.value)}
      className="w-full sm:w-80 lg:w-96 p-3 border border-gray-300 rounded-lg 
        focus:ring-2 focus:ring-purple-400 focus:border-transparent text-gray-700 placeholder-gray-400 
        transition duration-200 ease-in-out"/>
    <Button
      onClick={handleSearch}
      className="
        bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg 
        transform hover:scale-105 transition duration-200 ease-in-out w-full sm:w-auto" >
      Get Quotes
    </Button>
  </div>

  <div
    className="flex flex-col gap-4 w-full max-h-64 overflow-y-auto p-2 rounded-lg ">
    {results.length > 0 ? (
      results.map((quote, idx) => (
        <Card
          key={idx}
          className=" bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md 
            transition duration-200 ease-in-out">
          <CardContent className="p-6">
            <p className="italic text-lg md:text-xl text-gray-800 leading-relaxed">
              "{quote}"
            </p>
          </CardContent>
        </Card>
      ))
    ) : (
      <p className="text-gray-500 text-lg text-center p-4">
        No quotes found. Try another topic.
      </p>
    )}
  </div>
</div>
  );
}
