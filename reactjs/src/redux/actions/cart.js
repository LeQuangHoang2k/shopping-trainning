export const create = (data) => {
  return { type: "CREATE", data };
};

export const update = (data) => {
  return { type: "UPDATE", data };
};

export const upCount = (data) => {
  return { type: "UP_COUNT", data };
};

export const dowCount = (data) => {
  return { type: "DOW_COUNT", data };
};

export const cancel = (data) => {
  return { type: "CANCEL", data };
};

