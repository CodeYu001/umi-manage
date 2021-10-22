/*
 * @Author: jiaoyang.wang
 * @LastEditors: jiaoyang.wang
 * @Description: 全局对应的ts声明文件
 */
import { Dispatch, History, Location } from 'umi';

declare namespace GlobalTs {
  interface DefaultProps {
    history: History;
    location: Location;
    dispatch?: Dispatch;
    children?: any;
  }
}
