import React from "react";
import "./index.less";
import DomainSpaceComponent from "./DomainSpaceComponent";
import BannerBoxWrapper from "./component/BannerBoxWrapper";
import FlexCardBox from "./FlexCardBox";
import shading from "@/sources/images/shading.png";
import PartnerBox from "./PartnerBox";
import FirstBannerBox from "./FirstBannerBox";

interface HomePageProps {
  [key: string]: any;
}
const HomePage = (props: HomePageProps) => {
  return (
    <div className="home-page-wrapper">
      <FirstBannerBox />

      <BannerBoxWrapper title="产品目的" style={{ height: "830px" }}>
        <DomainSpaceComponent />
      </BannerBoxWrapper>

      <BannerBoxWrapper
        title="产品优势"
        style={{ height: "638px", background: "#1B1B1B", color: "#fff" }}
      >
        <FlexCardBox />
      </BannerBoxWrapper>

      <BannerBoxWrapper
        title="合作伙伴"
        style={{
          height: "402px",
          background: "url(" + shading + ")",
          backgroundSize: "100% 402px",
        }}
      >
        <PartnerBox />
      </BannerBoxWrapper>

      <div className="home-page-wrapper-footer">
        Copyright © 湖北亿咖通科技有限公司 鄂ICP备17026015号-10©2018-2019 Ecarx
        Co., Ltd. All Rights Reserved
      </div>
    </div>
  );
};

export default React.memo<HomePageProps>(HomePage);
