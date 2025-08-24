import { useState } from "react";

function TextInput() {
  const [ID, setID] = useState("");

  const handleChange = (event) => {
    setID(event.target.value);
  };

  return (
    <div className=" flex flex-col items-center justify-center bg-gray-100 p-6">

      <input
        type="text"
        value={ID}
        onChange={handleChange}
        placeholder="Enter UID"
        className="w-72 px-4 py-2 border rounded-lg focus:outline-none border-gray-300"
      />
    </div>
  );
}

export default TextInput
