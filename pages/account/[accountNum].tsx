import { useRouter } from "next/router";
import React, { useMemo } from "react";
import AccountInfo from "../../components/AccountInfo";
import PageInfo from "../../components/PageInfo";
import { Cuenta } from "../../utils/types";

const AccountNum = () => {
  const router = useRouter();
  const data = router.query;

  const renderData = useMemo(() => {
    return <AccountInfo account={data as Cuenta} />;
  }, [data]);

  return (
    <div className="w-[95%] flex-1 mx-auto  h-full">
      <PageInfo
        toptitle="Consulta de saldo"
        mainTitle="Eeste es tu saldo actual"
      />
      {renderData}
    </div>
  );
};

export default AccountNum;
