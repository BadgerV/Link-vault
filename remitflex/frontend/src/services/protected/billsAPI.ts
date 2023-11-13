import * as billRoutes from "../apiRoutes/billRoutes";
import { protectedGet } from "../apiHelper";

export const bills = {
  getCategories: async () => {
    return await protectedGet(billRoutes.billsCategories);
  }
};
