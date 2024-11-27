export let role = "landlord"; // This can be dynamically set based on the logged-in user

export const landlordData = [
  {
    id: 1,
    landlordId: "landlord_001",
    name: "Alice Smith",
    email: "alice@smith.com",
    photo:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "123-456-7890",
    properties: ["123 Elm St", "456 Oak St"],
    address: "789 Maple Rd, Springfield, USA",
  },
  {
    id: 2,
    landlordId: "landlord_002",
    name: "James Carter",
    email: "james@carter.com",
    photo:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "321-654-0987",
    properties: ["789 Pine St"],
    address: "654 Birch Ln, Metropolis, USA",
  },
];

export const tenantData = [
  {
    id: 1,
    tenantId: "tenant_001",
    name: "Bob Johnson",
    email: "bob@johnson.com",
    photo:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "987-654-3210",
    rentedProperty: "123 Elm St",
    leaseStart: "2024-01-01",
    leaseEnd: "2024-12-31",
  },
  {
    id: 2,
    tenantId: "tenant_002",
    name: "Emily Davis",
    email: "emily@davis.com",
    photo:
      "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "654-321-9870",
    rentedProperty: "456 Oak St",
    leaseStart: "2024-03-01",
    leaseEnd: "2024-11-30",
  },
];

export const agentData = [
  {
    id: 1,
    agentId: "agent_001",
    name: "Carla Davis",
    email: "carla@realty.com",
    photo:
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "555-555-5555",
    managedProperties: ["123 Elm St", "456 Oak St"],
    agency: "Dream Realty",
  },
  {
    id: 2,
    agentId: "agent_002",
    name: "Michael Thompson",
    email: "michael@homes.com",
    photo:
      "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "222-333-4444",
    managedProperties: ["789 Pine St"],
    agency: "Home Solutions",
  },
];

export const contractorData = [
  {
    id: 1,
    contractorId: "contractor_001",
    name: "David Brown",
    email: "david@repairpro.com",
    photo:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "444-444-4444",
    specialization: ["Plumbing", "Electrical"],
    projects: [
      "Fix leaky faucet at 123 Elm St",
      "Upgrade wiring at 789 Pine St",
    ],
  },
  {
    id: 2,
    contractorId: "contractor_002",
    name: "Sarah Lee",
    email: "sarah@fixit.com",
    photo:
      "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "333-222-1111",
    specialization: ["Carpentry", "Painting"],
    projects: ["Paint walls at 456 Oak St", "Build cabinets at 789 Pine St"],
  },
];
