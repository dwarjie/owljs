import { useEnv, useState } from "@odoo/owl";

const useStore = () => {
  const env = useEnv();
  return useState(env.store);
};

export { useStore };
