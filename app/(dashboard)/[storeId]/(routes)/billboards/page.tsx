import prismadb from "@/lib/prismadb";
import BillboardClient from "./components/client";

const Billboards = async ({ params }: { params: { storeId: string } }) => {
  const billboards = await prismadb.billboard.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="flex flex-col">
      <div className="flex-1 p-8 pt-6 space-y-4">
        <BillboardClient data={billboards} />
      </div>
    </div>
  );
};

export default Billboards;
