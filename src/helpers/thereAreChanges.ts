interface IOpts {
  Uname: string,
  address: string,
  initUname: string,
  initAddress: string,
}

const thereAreChanges = (opts: IOpts): boolean => {
  const { Uname, address, initUname, initAddress } = opts;
  if (Uname !== initUname || address !== initAddress) {
    return true;
  }
  return false;
}

export default thereAreChanges;
