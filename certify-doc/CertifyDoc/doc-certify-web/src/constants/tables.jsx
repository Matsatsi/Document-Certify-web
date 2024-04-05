import { createColumnHelper } from "@tanstack/react-table";
import { DeleteButton } from "../components";

const columnHelper = createColumnHelper();
export const userColumns = [
  columnHelper.accessor("userID", {
    header: "ID",
  }),
  columnHelper.accessor("firstName", {
    header: "First Name",
  }),
  columnHelper.accessor("lastName", {
    header: "Last Name",
  }),
  columnHelper.accessor("email", {
    header: "Email",
  }),
  columnHelper.display({
    id: "Actions",
    cell: ({ row }) => (
      <div className="flex justify-center gap-2">
        <DeleteButton id={row.original.userID} />
      </div>
    ),
  }),
];
