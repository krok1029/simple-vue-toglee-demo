
# Tolgee Vue 範例專案

這是一個從[官方教學](https://github.com/tolgee/vue-example) clone 過來改造的 [Tolgee](https://tolgee.io) 與 Vue 3 製作的多語系範例專案。用來Demo如何在 Vue 專案中整合 Tolgee 進行國際化。

## 如何啟動 Tolgee Server（Docker）

1. 安裝好 [Docker](https://www.docker.com/)。
2. 先拉取 Tolgee Server 的 Docker image：

    ```sh
    docker pull tolgee/tolgee
    ```

3. 啟動 Tolgee Server：

    ```sh
    docker run --name tolgee \
    -p 8085:8080 \
    -v tolgee_data:/data/ \
    -e TOLGEE_AUTHENTICATION_INITIAL_USERNAME=admin \
    -e TOLGEE_AUTHENTICATION_INITIAL_PASSWORD=admin \
    -d tolgee/tolgee

    ```

    這樣 Tolgee Server 就會在本機的 `http://localhost:8085` 運行。

4. 進入 [http://localhost:8085](http://localhost:8085) 註冊帳號並建立專案，取得 API KEY。

## 設定環境變數

1. 複製 `.env.development.local.example` 範本檔案（如果尚未存在）：

    ```sh
    cp .env.development.local.example .env.development.local
    ```

2. 編輯 `.env.development.local`，設定以下內容：

    ```
    VUE_APP_TOLGEE_API_URL=http://localhost:8085
    VUE_APP_TOLGEE_API_KEY=你的_API_KEY
    ```

    - `VUE_APP_TOLGEE_API_URL`：Tolgee Server 的網址（預設為本機 Docker）。
    - `VUE_APP_TOLGEE_API_KEY`：你在 Tolgee 專案中取得的 API KEY。

## 安裝與啟動專案

1. 安裝相依套件：

    ```sh
    npm install
    ```

2. 啟動開發伺服器：

    ```sh
    npm run develop
    ```

3. 開啟瀏覽器進入 [http://localhost:5173](http://localhost:5173)（或終端機顯示的網址）即可開始使用。

## 其他

如需更多 Tolgee 相關資訊，請參考 [官方網站](https://tolgee.io)。
