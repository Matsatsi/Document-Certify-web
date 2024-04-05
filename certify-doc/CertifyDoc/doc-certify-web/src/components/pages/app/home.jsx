import localforage from "localforage";
import { userStore } from "../../../reducers";
import { StatCard } from "../../common";

export const HomePage = () => {
  const { user } = userStore();
  const { firstName, email, registrationDate } = user;
  const AppStats = {
    user: [
      {
        title: "Documents",
        value: "0",
        description: "uploaded documents",
      },
      {
        title: "Profile",
        value: "90%",
        description: "completed",
      },
      {
        title: "Action Needed",
        value: "1",
        description: "pending action",
      },
    ],
    admin: [
      {
        title: "Admins",
        value: "100",
        description: "admins",
      },
      {
        title: "Active Admins",
        value: "100",
        description: "users",
      },
      {
        title: "Inactive Admins",
        value: "100",
        description: "users",
      },
    ],
    certifiers: [
      {
        title: "Certifiers",
        value: "100",
        description: "certifiers",
      },
      {
        title: "Active Certifiers",
        value: "100",
        description: "users",
      },
      {
        title: "Inactive Certifiers",
        value: "100",
        description: "users",
      },
    ],
  };

  return (
    <section className="w-full">
      <h1 className="text-xl font-semibold">
        Hello, {(firstName || email) ?? ""} 👋
      </h1>
      <h1 className="text-sm font-semibold py-2">
        You joined us{" "}
        <span className="text-green-500">{registrationDate ?? ""}</span>. We are
        glad to have you here. Here&apos;s a summary of your activities.
      </h1>
      <section className="grid w-full grid-cols-1 lg:grid-cols-3 gap-4 py-4">
        {user.role === "User"
          ? AppStats.user.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))
          : user.role === "Admin"
          ? AppStats.admin.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))
          : AppStats.certifiers.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
      </section>
    </section>
  );
};
