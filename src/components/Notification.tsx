type Notification = {
  id: number;
  title: string;
  description: string;
  date: string;
  type: "rent" | "maintenance" | "lease"; // Types for color-coding
};

interface NotificationsProps {
  notifications: Notification[];
}

const Notifications: React.FC<NotificationsProps> = ({ notifications }) => {
  // Map notification types to colors
  const typeColors = {
    rent: {
      background: "bg-blue-50",
      text: "text-blue-700",
    },
    maintenance: {
      background: "bg-red-50",
      text: "text-red-700",
    },
    lease: {
      background: "bg-yellow-50",
      text: "text-yellow-700",
    },
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Notifications</h1>
        <span className="text-xs text-gray-400 cursor-pointer hover:text-gray-600">
          View All
        </span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        {notifications.map((notification) => {
          const colors = typeColors[notification.type];
          return (
            <div
              key={notification.id}
              className={`${colors.background} rounded-md p-4`}
            >
              <div className="flex items-center justify-between">
                <h2 className={`font-medium ${colors.text}`}>
                  {notification.title}
                </h2>
                <span className="text-xs text-gray-400 bg-white rounded-md px-2 py-1">
                  {notification.date}
                </span>
              </div>
              <p className="text-sm text-gray-500 mt-1">
                {notification.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Notifications;
