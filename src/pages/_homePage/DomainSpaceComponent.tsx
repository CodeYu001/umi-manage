import { Space } from "antd";
import StrokeTitleComponent from "./component/StrokeTitleComponent";
import productUrl from "@/sources/images/product.png";
import reportUrl from "@/sources/images/report.png";
import runUrl from "@/sources/images/run.png";

export default function DomainSpaceComponent() {
  return (
    <div className="domain-wrapper">
      <Space wrap size="large">
        <div className="box-use">
          <div className="top-circle"></div>
          <div className="bottom-circle"></div>
          <StrokeTitleComponent
            title="适应EAS生态应用"
            className="domain-title"
          />
          <div className="domain-description">
            构建集EAS生态应用运行所依赖的接口/功能点的实现质量，系统性能，系统安全检测为一体的兼容性审核认证体系，提升关键节点系统版本质量
          </div>
          <img src={productUrl} alt="" />
        </div>
        <div className="box-report">
          <div className="top-circle"></div>
          <div className="bottom-circle"></div>
          <StrokeTitleComponent title="生成认证报告" className="domain-title" />
          <div className="domain-description">
            通过审核认证工单生成审核认证报告，输出改进建议，快速解决问题
          </div>
          <img src={reportUrl} alt="" />
        </div>
        <div className="box-run">
          <div className="top-circle"></div>
          <div className="bottom-circle"></div>
          <StrokeTitleComponent title="提供运行标准" className="domain-title" />
          <div className="domain-description">
            及时获悉系统版本状态，为EAS生态应用能否在系统版本上正常运行提供评估依据
          </div>
          <img src={runUrl} alt="" />
        </div>
      </Space>
    </div>
  );
}
