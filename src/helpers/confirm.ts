const confirmAction = (msg: string): boolean => {
  const warn = confirm(msg);
  if (warn) {
    return true;
  }
  return false;
}

export default confirmAction;
