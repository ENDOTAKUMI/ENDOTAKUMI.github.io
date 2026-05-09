# コミットメッセージ規約

このプロジェクトでは、[Conventional Commits v1.0.0](https://www.conventionalcommits.org/ja/v1.0.0/) に従ったコミットメッセージを使用します。

## 基本構造

コミットメッセージは以下の形式に従います：

```text
<type>[optional scope]: <subject>

[optional body]

[optional footer]
```

### 例

```text
feat(auth): add user authentication

Implement login and logout functionality.
Use JWT tokens for session management.

Closes #123
```

## コミットの型（Type）

コミットの型は必須です。以下の型を使用してください：

### 主要な型

- **feat**: 新しい機能の追加（SemVerの`MINOR`に相当）
- **fix**: バグの修正（SemVerの`PATCH`に相当）

### その他の型

- **docs**: ドキュメントのみの変更
- **style**: コードの動作に影響しない変更（空白、フォーマット、セミコロンの欠落など）
- **refactor**: バグ修正も機能追加もしないコードの変更
- **perf**: パフォーマンスを向上させるコードの変更
- **test**: 不足しているテストの追加や既存テストの修正
- **build**: ビルドシステムや外部依存関係に影響する変更
- **ci**: CI設定ファイルやスクリプトの変更
- **chore**: その他の変更（ソースコードやテストの変更を伴わないもの）

## スコープ（Scope）

スコープは任意ですが、変更の影響範囲を示すために使用できます。

括弧で囲んだ名詞で記述します：

```text
feat(parser): add new parsing functionality
fix(api): fix error handling
docs(readme): update installation instructions
```

## タイトル（Subject）

- 型/スコープの後ろのコロンとスペースの直後に記述
- 変更内容の簡潔な要約を**英語**で記述
- 命令形で記述することを推奨（例：`added` ではなく `add`）
- 先頭は小文字で始める
- 末尾にピリオドを付けない

## 本文（Body）

本文は任意です。以下の場合に**英語**で使用することを推奨します：

- 変更の動機を説明する
- 以前の動作との違いを説明する

タイトルと本文の間には1行の空行を入れます。

## フッター（Footer）

フッターは任意で、以下の情報を記載できます：

- **破壊的変更**（BREAKING CHANGE）
- **Issue参照**（Closes、Fixes、Refsなど）

### フッターの例

```text
BREAKING CHANGE: changed configuration file format

Closes #456
Refs #123, #789
```

## 破壊的変更（Breaking Changes）

APIの破壊的変更を導入する場合は、以下のいずれかの方法で明示する必要があります：

### 方法1: 型の後に`!`を付ける

```text
feat!: change user ID type from string to number

BREAKING CHANGE: changed the user ID type.
Existing code needs to be updated.
```

### 方法2: フッターに`BREAKING CHANGE:`を記載

```text
refactor: change database schema

BREAKING CHANGE: changed column names in users table.
Please run migration scripts.
```

## コミット例

### 機能追加

```text
feat(user): add profile editing feature
```

### バグ修正

```text
fix(api): fix null value validation

Fix issue where null values are not properly handled in API responses.
```

### ドキュメント更新

```text
docs: add setup instructions to README
```

### リファクタリング

```text
refactor(auth): move authentication logic to common module
```

### パフォーマンス改善

```text
perf(query): optimize database queries
```

### 破壊的変更を含む場合

```text
feat!: change API endpoint paths

BREAKING CHANGE: moved all API endpoints under /api/v2.
Client code needs to be updated.
```

## 注意事項

- **コミットメッセージのタイトルと本文は英語で記載してください**
- `BREAKING CHANGE`の記述は大文字と小文字を区別します（必ず大文字で記述）
- 1つのコミットには1つの論理的な変更のみを含めるようにしてください
- コミット前に変更内容を確認し、適切な型とスコープを選択してください
