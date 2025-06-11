import { GetIndexFromSlugID } from "./hash";
import YukinaConfig from "../../yukina.config";

/**
 * cover: ... が指定されていない記事に、自動でバナー画像（カバー画像）を割り当てるやつ
 * Retrieves the cover URL for an unspecified entry based on the provided ID.
 *
 * @param id - The unique identifier for the entry.
 * @returns The URL of the corresponding cover image.
 */
export function GetCoverURLForUnspecifiedEntry(id: string): string {
  const index = GetIndexFromSlugID(id, YukinaConfig.banners.length);
  return YukinaConfig.banners[index];
}
