import type { APIDataType } from "@/types/api";

export const applyLegacyFilter = (filteredData: APIDataType) => {
  return Object.fromEntries(
    Object.entries(filteredData).map(([category, items]) => [
      category,
      Object.fromEntries(
        Object.entries(items).filter(([_, value]) => !value.legacy),
      ),
    ]),
  );
};
