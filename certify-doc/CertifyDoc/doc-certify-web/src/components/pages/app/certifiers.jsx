import { Heading, Table } from "../../common";
import { Widget } from "../../widgets";
import { CertifierService } from "../../../services";
import { useEffect, useState } from "react";
import { userColumns } from "../../../constants";

export const CertifiersPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    CertifierService.getCertifiers().then((data) => setData(data));
  }, []);

  return (
    <section className="flex flex-col gap-4">
      <section className="flex justify-between items-center">
        <Heading heading="Certifiers" />
        <button className="hover:text-primary flex bg-primary hover:bg-white text-white items-center gap-2 hover:border hover:border-primary rounded-lg py-2 px-3 font-medium">
          Add Certifier
        </button>
      </section>
      <Widget>
        <Table data={data?.certifiers ?? []} columns={userColumns} />
      </Widget>
    </section>
  );
};
