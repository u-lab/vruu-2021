import dayjs from "dayjs";
import { fetchSpreadSheet, SpreadSheetContent } from "./fetchSpreadSheet";

type News = {
    // 投稿日
    createdAt: string;
    // Newsタイトル
    title: string
    // アイキャッチ画像
    imageLink: string
    // Newsリンク
    link?: string
}

const handler = async () => {
    const spreadSheetData = await fetchSpreadSheet();

    const newsList = spreadSheetDataToNewsList(spreadSheetData);

    return newsList;
}

const spreadSheetDataToNewsList = (spreadSheetData: SpreadSheetContent[]) => {
    return spreadSheetData.map(row => {
        const news: News = {
            createdAt: dayjs(row.timeStamp).format("YYYY-MM-DD"),
            title: row.title,
            imageLink: originalDriveImageLinkToImageLink(row.imageLink),
            link: row.link,
        }

        return news;
    });
}

/**
 * Driveのリンクを加工
 *
 * @param originalDriveImageLink
 * @returns
 */
const originalDriveImageLinkToImageLink = (originalDriveImageLink: string) => {
    const id = originalDriveImageLink.replace(
        "https://drive.google.com/open?id=",
        ""
    );
    return `https://drive.google.com/uc?export=view&id=${id}&usp=sharing`;
}

(async () => {
    const newsList = await handler();
    console.log(
        "// プログラムによる自動生成です。\n\n" +
        "window.newsList = " +
        JSON.stringify(newsList, null, 2));
})();