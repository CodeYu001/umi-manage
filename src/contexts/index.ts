import React from "react";

export type UserInfo = {
  accountName?: string;
  authorization?: string;
  expireTime?: 0;
  functionIds?: number[];
  id?: number;
  needReset?: boolean;
  phone?: number;
  projects?: string;
  refreshAuthorization?: string;
  unionId?: number;
  userName?: string;
};

export type AppContextValue = {
  userInfo: UserInfo;
  setUserInfo?: any;
};

export const AppContext = React.createContext<AppContextValue>(
  {} as AppContextValue
);
