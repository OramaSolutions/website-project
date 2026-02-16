import { useEffect, useState } from "react";

const DemoBooking = () => {
  const [slots, setSlots] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch("/api/demo/slots?date=2026-01-20")
      .then(res => res.json())
      .then(setSlots);
  }, []);

  const bookSlot = async () => {
    await fetch("/api/demo/book", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Aditya",
        email: "26aditya@gmail.com",
        slot: selected
      })
    });

    alert("Demo booked!");
  };

  return (
    <div className="space-y-4">
      <h3 className="font-semibold">Select a time slot</h3>

      <div className="grid grid-cols-2 gap-2">
        {slots.map(slot => (
          <button
            key={slot.start}
            onClick={() => setSelected(slot.start)}
            className={`border rounded-lg py-2 text-sm ${
              selected === slot.start
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            {slot.start} - {slot.end}
          </button>
        ))}
      </div>

      <button
        disabled={!selected}
        onClick={bookSlot}
        className="w-full bg-blue-600 text-white py-2 rounded-lg disabled:opacity-50"
      >
        Confirm Booking
      </button>
    </div>
  );
};

export default DemoBooking;
