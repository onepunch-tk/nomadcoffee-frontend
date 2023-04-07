export enum EPathName {
  Home = "/",
  Account = "/account",
  Login = "/login",
  SignUp = "/signup",
}

export const makeNestedPathName = (...pathList: string[]): string => {
  let nestedPathName = "";
  pathList.forEach((path) => {
    nestedPathName = nestedPathName + path;
  });
  return nestedPathName;
};

export const getPathWithoutSlash = (path: EPathName) => {
  if (path === EPathName.Home) {
    return path;
  }
  return path.slice(1);
};
