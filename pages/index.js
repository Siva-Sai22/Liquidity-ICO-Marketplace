import React, { useState, useContext } from "react";

import { AddLiquidity, ICOSale, LiquidityHistory } from "../components/index";
import { CONTEXT } from "../context/index";

const index = () => {
  const { } = useContext(CONTEXT);

  //MODEL STATE
  const [openAddPool, setOpenAddPool] = useState(false);
  const [openAllLiquidity, setOpenAllLiquidity] = useState(false);

  return <div className="crumina-grid">
    <Header setOpenAddPool={setOpenAddPool}
      setOpenAllLiquidity={setOpenAllLiquidity}
      connect={connect}
      address={address}
    />

    <div className="main-content-wrapper">
      <Hero transferNativeToken={transferNativeToken} />
      <ICOTokens />
      <LiquidityHistory GET_ALL_LIQUIDITY={GET_ALL_LIQUIDITY} />
      <App />
      <Analytic />
      <Access />
      <ICOSale tokenSale={tokenSale} nativeToken={nativeToken} buyToken={buyToken} />
    </div>

    {openAddPool && (
        <div className="new_center">
          <AddPool 
          setOpenAddPool={setOpenAddPool} 
          LOAD_TOKEN={LOAD_TOKEN} 
          notifyError={notifyError} 
          notifySuccess={notifySuccess} 
          GET_POOL_ADDRESS={GET_POOL_ADDRESS}/>
        </div>
      )}

    {openAllLiquidity && (
        <div className="new_center">
          <AddLiquidity 
          CREATE_LIQUIDITY={CREATE_LIQUIDITY}
          setOpenAllLiquidity={setOpenAllLiquidity}
          />
        </div>
      )}

      {loader && (
        <div className="new_center">
          <Loader />
        </div>
      )}
      <Footer />
  </div>;
};

export default index;
