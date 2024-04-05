import { Heading, Table } from "../../common";
import { Widget } from "../../widgets";
import { AdminService } from "../../../services";
import { useEffect, useState } from "react";
import { userColumns } from "../../../constants";

export const AdminsPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    AdminService.getAdmins().then((data) => setData(data));
  }, []);

  return (
    <section className="flex flex-col gap-4">
      <section className="flex justify-between items-center">
        <Heading heading="Admins" />
        <button className="hover:text-primary flex bg-primary hover:bg-white text-white items-center gap-2 hover:border hover:border-primary rounded-lg py-2 px-3 font-medium">
          Add Admin
        </button>
      </section>
      <Widget>
        <Table data={data?.admins ?? []} columns={userColumns} />
      </Widget>
    </section>
  );
};
