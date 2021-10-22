import React from "react";
import baiduUrl from "@/sources/images/baidu.png";
import huaweiUrl from "@/sources/images/huawei.png";
import woErWoUrl from "@/sources/images/woerwo.png";
import jiLiUrl from "@/sources/images/jili.png";

interface PartnerBoxProps {
  [key: string]: any;
}
export default React.memo<PartnerBoxProps>(function PartnerBox({
  ...props
}: PartnerBoxProps) {
  return (
    <div className="partner-box">
      <img className="partner-box-img" src={huaweiUrl} alt="华为" />
      <img className="partner-box-img" src={jiLiUrl} alt="吉利" />
      <img className="partner-box-img" src={baiduUrl} alt="百度" />
      <img className="partner-box-img" src={woErWoUrl} alt="沃尔沃" />
    </div>
  );
});
