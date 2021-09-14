# バーチャル宇都宮大学 告知サイト

2021年度版リポジトリ

## 2020年のバーチャル宇都宮大学はこちらから

- [UUVR 2020 サイト](https://2020.vr-uu.com/)
- [UUVR 2020 Repository](https://github.com/u-lab/uuvr.github.io)

## スプレッドシートの更新

```shell
# スプレッドシートの更新
$ npm --prefix ./scripts/FetchNewsList run generate | sed '1,4d' > docs/js/news.js
```
