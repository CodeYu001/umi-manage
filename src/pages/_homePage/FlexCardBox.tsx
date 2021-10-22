import React from "react";
import cardSystemUrl from "@/sources/images/card-system.png";
import reportUrl from "@/sources/images/report-picture.png";
import workUrl from "@/sources/images/work-picture.png";
import systemIcon from "@/sources/images/system.png";
import workIcon from "@/sources/images/work-order.png";
import boardIcon from "@/sources/images/board.png";

export default React.memo(function FlexCardBox() {
  const boxList = [
    { content: "支持多种车机系统", url: cardSystemUrl, icon: systemIcon },
    { content: "工单响应快", url: workUrl, icon: workIcon },
    { content: "报告时间快", url: reportUrl, icon: boardIcon },
  ];
  return (
    <div className="flex-card-box">
      {boxList.map((item, index) => (
        <div
          className="flex-card-box-item"
          key={index}
          style={{
            background: "url(" + item.url + ")",
            backgroundSize: "cover",
          }}
        >
          <div className="flex-card-box-animation">
            <img className="flex-card-box-img" src={item.icon} alt="" />
            <div className="flex-card-box-content">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
});
