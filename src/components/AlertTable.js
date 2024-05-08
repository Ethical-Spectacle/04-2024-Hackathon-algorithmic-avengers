import React from 'react';

const tickets = [
  { id: 108, description: "Bin sensor not reporting data", type: "Complaint", source: "System", date: "10/31/2019", status: "Under review" },
  { id: 117, description: "Bin ID 125635 at 100% fill level", type: "Complaint", source: "System", date: "10/24/2019", status: "Resolved" },
  { id: 124, description: "Add new bin sensor to system", type: "Request", source: "User", date: "09/26/2019", status: "Resolved" },
  { id: 127, description: "Bin ID 12275 at 100% fill level", type: "Complaint", source: "System", date: "10/19/2019", status: "Resolved" },
//   { id: 128, description: "Bin ID 12375 at 100% fill level", type: "Complaint", source: "System", date: "10/18/2019", status: "In process" },
//   { id: 133, description: "Bin temperature sensor reporting unsafe levels", type: "Complaint", source: "System", date: "10/29/2019", status: "Resolved" },
//   { id: 135, description: "Unable to log in to Route Management", type: "Complaint", source: "User", date: "11/10/2019", status: "Under review" },
//   { id: 136, description: "Unable to log in to Route Management", type: "Complaint", source: "User", date: "11/10/2019", status: "Under review" }
];

const TicketTable = () => {
  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      {/* Container that allows vertical scrolling */}
      <div className="max-h-[15.5rem] overflow-y-auto">
        <table className="w-full text-sm text-left text-gray-200">
          <thead className="text-xs uppercase bg-gray-800">
            <tr>
              <th scope="col" className="py-3 px-6">Ticket Log</th>
              <th scope="col" className="py-3 px-6">Type</th>
              <th scope="col" className="py-3 px-6">Source</th>
              <th scope="col" className="py-3 px-6">Date</th>
              <th scope="col" className="py-3 px-6">Status</th>
            </tr>
          </thead>
          <tbody className="bg-gray-900">
            {tickets.map((ticket) => (
              <tr key={ticket.id} className="border-b border-gray-700">
                <td className="py-4 px-6">{ticket.description}</td>
                <td className="py-4 px-6">{ticket.type}</td>
                <td className="py-4 px-6">{ticket.source}</td>
                <td className="py-4 px-6">{ticket.date}</td>
                <td className="py-4 px-6">{ticket.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TicketTable;
