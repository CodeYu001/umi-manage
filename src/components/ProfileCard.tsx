import React, { useContext, useState } from "react";
import { Menu, Button, Dropdown } from "antd";
import { UserOutlined, DownOutlined } from "@ant-design/icons";
import usePersistFn from "@/components/hooks/usePersistFn";
import { useHistory } from "react-router-dom";
import cls from "classnames";
import "./ProfileCard.less";
import { AppContext, AppContextValue } from "@/contexts";

interface ProfileCardProps {
  [key: string]: any;
}
export default React.memo<ProfileCardProps>(function ProfileCard(
  props: ProfileCardProps
) {
  const { setUserInfo, userInfo } = useContext<AppContextValue>(AppContext);
  const [active, setActive] = useState(false);

  const history = useHistory();
  const handleLogout = usePersistFn(() => {
    localStorage.setItem("token", "");
    setUserInfo({});
    history.push("/homePage");
  });

  return (
    <Dropdown
      arrow={true}
      className={cls("profile-dropdown", { "profile-dropdown-active": active })}
      onVisibleChange={(val) => setActive(val)}
      overlay={
        <Menu>
          <Menu.Item>
            <Button type="link" icon={<UserOutlined />} onClick={handleLogout}>
              退出登录
            </Button>
          </Menu.Item>
        </Menu>
      }
    >
      <Button
        type="link"
        icon={<UserOutlined />}
        onClick={(e) => e.preventDefault()}
        style={{ color: "#fff" }}
      >
        {userInfo?.userName ?? ""}
        <DownOutlined style={{ color: "#fff" }} />
      </Button>
    </Dropdown>
  );
});
