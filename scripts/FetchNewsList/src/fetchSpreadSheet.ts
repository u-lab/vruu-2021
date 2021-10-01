import axios from 'axios';
import csvtojson from 'csvtojson';

const NEWS_CSV_LINK = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ8OQzBAorEAISzJn-HRNNmmhGporORWm6ajL9IY1J6NmlTV8eBEAIeksr0ayxOYOC-In0noL9DX0Z8/pub?gid=242021446&single=true&output=csv";


export type SpreadSheetContent = {
    // 投稿日
    timeStamp: string;
    // Newsタイトル
    title: string
    // アイキャッチ画像
    imageLink: string
    // メールアドレス
    email?: string
    // Newsリンク
    link?: string
}

/**
 * @returns { String }
 */
export const fetchSpreadSheet = async () => {
    const { data } = await axios.get(NEWS_CSV_LINK)
    const obj = await csvtojson({
        noheader: false,  // 1行目がヘッダーの場合はfalse
        output: "csv"
    })
        .fromString(data)

    return (obj as [string, string, string, string, string][])
        .map((arr): SpreadSheetContent => ({
            timeStamp: arr[0],
            title: arr[1],
            imageLink: arr[2],
            email: arr[3],
            link: arr[4],
        })).filter(arr => arr.title !== "")
}