const { localStorage } = window;
const { sessionStorage } = window;
let keyPrefix = "default-prefix-";

/**
 * 初始化配置
 * @param options keyPrefix：存储前缀，用来区分不同用户数据，否则同一台电脑，不同人存储数据会互相干扰。
 */
export function init(options: any) {
  const { keyPrefix: key = "default-prefix" } = options;
  keyPrefix = `${key}-`;
}

/**
 * localStorage 存储数据
 * @param {string} key 数据的key
 * @param {*} value 要存储的数据
 */
export function setItem(key: string, value: any) {
  const keyRes = keyPrefix + key;
  const valueRes = JSON.stringify(value);
  localStorage.setItem(keyRes, valueRes);
}

/**
 * localStorage 获取数据
 * @param {string} key
 * @return {json} key 对应的数据
 */
export function getItem(key: string) {
  const keyRes = keyPrefix + key;
  const value: any = localStorage.getItem(keyRes);
  return JSON.parse(value);
}

/**
 * localStorage 根据keyPrefix清空数据
 */
export function clear() {
  const localStorageKeys = Object.keys(localStorage);
  if (localStorageKeys && localStorageKeys.length) {
    localStorageKeys.forEach((item) => {
      if (item.startsWith(keyPrefix)) {
        localStorage.removeItem(item);
      }
    });
  }
}

/**
 * localStorage 删除数据
 * @param key
 */
export function removeItem(key: string) {
  const keyRes = keyPrefix + key;
  localStorage.removeItem(keyRes);
}

/**
 * localStorage 根据keys 获取一组数据
 * @param {array} keys
 * @returns {{json}}
 */
export function multiGet(keys: string[]) {
  const values = {} as { [key: string]: any };
  keys.forEach((key: string) => {
    values[key] = getItem(key);
  });
  return values;
}

/**
 * localStorage 根据keys 删除一组数据
 * @param {array} keys
 */
export function multiRemove(keys: string[]) {
  keys.forEach((key: string) => removeItem(key));
}

/**
 * sessionStorage 封装，具有localStorage同样方法
 *
 * @type {{setItem(*=, *=): void, getItem(*=): *, clear(): void, removeItem(*=): void, multiGet(*): *, multiRemove(*): void}}
 */
export const session = {
  setItem(key: string, value: any) {
    const keyRes = keyPrefix + key;
    const valuekeyRes = JSON.stringify(value);
    sessionStorage.setItem(keyRes, valuekeyRes);
  },
  getItem(key: string) {
    const keyRes = keyPrefix + key;
    const value: any = sessionStorage.getItem(keyRes);
    return JSON.parse(value);
  },
  // 根据 keyPrefix 清除用户数据
  clear() {
    const sessionStorageKeys = Object.keys(sessionStorage);
    if (sessionStorageKeys && sessionStorageKeys.length) {
      sessionStorageKeys.forEach((item) => {
        if (item.startsWith(keyPrefix)) {
          sessionStorage.removeItem(item);
        }
      });
    }
  },
  removeItem(key: string) {
    const keyRes = keyPrefix + key;
    sessionStorage.removeItem(keyRes);
  },
  multiGet(keys: string[]) {
    const values: any = {};
    keys.forEach((key) => {
      values[key] = this.getItem(key);
    });
    return values;
  },
  multiRemove(keys: string[]) {
    keys.forEach((key) => this.removeItem(key));
  },
};

const globalStorage = {} as { [key: string]: any };
/**
 * 全局存储封装，刷新之后将被清空
 * @type {{setItem(*, *): void, getItem(*): *, clear(): void, removeItem(*): void, multiGet(*): *, multiRemove(*): void}}
 */
export const global = {
  setItem(key: string, value: any) {
    const keyRes = keyPrefix + key;
    globalStorage[keyRes] = value;
  },
  getItem(key: string) {
    const keyRes = keyPrefix + key;
    return globalStorage[keyRes];
  },
  clear() {
    Object.keys(globalStorage).forEach((key: string) => {
      if (key.startsWith(keyPrefix)) {
        delete globalStorage[key];
      }
    });
  },
  removeItem(key: string) {
    const keyRes = keyPrefix + key;
    delete globalStorage[keyRes];
  },
  multiGet(keys: string[]) {
    const values: any = {};
    keys.forEach((key: string) => {
      values[key] = this.getItem(key);
    });
    return values;
  },
  multiRemove(keys: string[]) {
    keys.forEach((key: string) => this.removeItem(key));
  },
};
